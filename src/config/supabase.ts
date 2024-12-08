import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY ) {
    throw new Error('Missing Supabase credentials in environment variables');
}

export const supabaseClient = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
  
  
    {
        auth: {
            persistSession: false
        }
    }
);

export const uploadImage = async (imageData: {
    name: string;
    description: string;
    filename: string;
}) => {
    const { data, error } = await supabaseClient
        .from('images')
        .insert([
            {
                ...imageData,
                created_at: new Date().toISOString()
            }
        ])
        .select();

    if (error) throw error;
    return data;
};

export const getImages = async () => {
    const { data, error } = await supabaseClient
        .from('images')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
};
