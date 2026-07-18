const supabaseUrl = "https://sbrldbbdomfydlynxlsp.supabase.co";

const supabaseKey = const supabaseKey = "eyJhbGciOiJIUzI1Ni...";


const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);


console.log("Supabase connected:", supabaseClient);
