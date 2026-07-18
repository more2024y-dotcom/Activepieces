const supabaseUrl = "https://sbrldbbdomfydlynxlsp.supabase.co";

const supabaseKey = "sb_publishable_UCyYCPiO-Xnbwn0f92z0fw_1Xda2C-s";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);

console.log("Supabase client:", supabaseClient);
