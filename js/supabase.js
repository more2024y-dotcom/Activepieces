const supabaseUrl = "https://sbrldbbdomfydlynxlsp.supabase.co";

const supabaseKey = "YOUR_ANON_KEY";


const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);


console.log("Supabase URL:", supabaseUrl);
console.log("Key starts:", supabaseKey.substring(0,15));
