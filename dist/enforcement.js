// Within Enforcement SDK
// Governs prospects only. Customers pass through untouched.
export function createEnforcement(config) {
    const { vendorId, apiUrl, apiKey, toolScopeMap } = config;
    async function authorize(toolName, claims, opts) {
        const userType = claims['https://within.com/user_type'];
        // Customers pass straight through — Within is not involved
        if (userType === 'customer') {
            return { allowed: true, bypassed: true };
        }
        // Scope check (from token, no network call)
        const requiredScope = toolScopeMap[toolName];
        if (requiredScope) {
            const userScopes = claims['https://within.com/scopes'] ?? [];
            if (!userScopes.includes(requiredScope)) {
                return { allowed: false, reason: 'scope_denied' };
            }
        }
        // Quota check (live, hits the ledger)
        const email = claims.email;
        if (!email) {
            return { allowed: false, reason: 'no_entitlement' };
        }
        try {
            const res = await fetch(`${apiUrl}/api/ledger/${encodeURIComponent(email)}?vendor_id=${vendorId}`, { headers: { 'Authorization': `Bearer ${apiKey}` } });
            if (!res.ok) {
                return { allowed: false, reason: 'no_entitlement' };
            }
            const ledger = await res.json();
            if (!ledger.isActive) {
                return { allowed: false, reason: 'inactive' };
            }
            if (ledger.quotaRemaining <= 0) {
                return { allowed: false, reason: 'quota_exceeded' };
            }
            return { allowed: true };
        }
        catch {
            // Network error — fail closed
            return { allowed: false, reason: 'no_entitlement' };
        }
    }
    async function complete(toolName, claims, outcome, opts) {
        const userType = claims['https://within.com/user_type'];
        // No-op for customers
        if (userType === 'customer')
            return;
        const email = claims.email;
        if (!email)
            return;
        try {
            await fetch(`${apiUrl}/api/usage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    vendor_id: vendorId,
                    email,
                    domain: claims['https://within.com/domain'],
                    tool_name: toolName,
                    outcome,
                    agent_session_id: opts?.agentSessionId,
                    latency_ms: opts?.latencyMs,
                }),
            });
        }
        catch {
            // Fire-and-forget — don't break the tool call if metering fails
        }
    }
    return { authorize, complete };
}
