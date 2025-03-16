import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;  //Exported
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(supabaseUrl, supabaseKey,{
    global:{
      headers:{
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  });

  return supabase;
};

export default supabaseClient;
        

// set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests