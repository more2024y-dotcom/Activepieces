const supabaseUrl = "YOUR_SUPABASE_PROJECT_URL";

const supabaseKey = "YOUR_SUPABASE_ANON_KEY";


const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);
