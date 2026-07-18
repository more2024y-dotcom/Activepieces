const supabaseUrl = "https://sbrldbbdomfydlynxlsp.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicmxkYmJkb21meWRseW54bHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzMDYxNjMsImV4cCI6MjA5OTg4MjE2M30.E5NbhpW-kqRkjyx_JuZgIefGxc3F1R9nqs51i-RqcTY";


const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey
);


console.log("Supabase connected:", supabaseClient);
