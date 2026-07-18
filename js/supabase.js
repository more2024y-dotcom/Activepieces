// Supabase URL

const supabaseUrl = "https://sbrldbbdomfydlynxlsp.supabase.co";


// Supabase Publishable Key

const supabaseKey = "sb_publishable_UCyYCPiO-Xnbwn0f92z0fw_1Xda2C-s";


// Create Supabase Client

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);


// Test connection

console.log(
    "Supabase connected:",
    supabaseClient
);
