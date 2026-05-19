import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
export async function getPropertyByName(name) {
    const { data, error } = await supabase
        .from('properties')
        .select('*')
        .ilike('name', `%${name}%`)
        .limit(1)
        .single();
    if (error)
        return null;
    return data;
}
export async function searchProperties(filters) {
    let query = supabase.from('properties').select('*');
    if (filters.name) {
        query = query.ilike('name', `%${filters.name}%`);
    }
    if (filters.address) {
        query = query.ilike('address', `%${filters.address}%`);
    }
    if (filters.square_footage_min) {
        query = query.gte('square_footage', filters.square_footage_min);
    }
    if (filters.square_footage_max) {
        query = query.lte('square_footage', filters.square_footage_max);
    }
    if (filters.price_min) {
        query = query.gte('price', filters.price_min);
    }
    if (filters.price_max) {
        query = query.lte('price', filters.price_max);
    }
    const { data, error } = await query;
    if (error)
        return [];
    return data;
}
export async function getPriceSummary() {
    const { data, error } = await supabase
        .from('properties')
        .select('price, name');
    if (error)
        return null;
    const total = data.reduce((sum, p) => sum + p.price, 0);
    const avg = total / data.length;
    return {
        total_listings: data.length,
        average_price: avg,
        most_expensive: data.reduce((max, p) => p.price > max.price ? p : max),
        least_expensive: data.reduce((min, p) => p.price < min.price ? p : min),
    };
}
export async function findUserByEmail(email) {
    const { data } = await supabase
        .from('users') // whatever the user table is in the vendor's database
        .select('id')
        .eq('email', email)
        .single();
    return data;
}
