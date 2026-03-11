import { MongoClient } from "npm:mongodb@6";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

let cachedClient: MongoClient | null = null;

async function getMongoClient(): Promise<MongoClient> {
  if (cachedClient) return cachedClient;
  const uri = Deno.env.get('MONGODB_URI');
  if (!uri) throw new Error('MONGODB_URI secret is not configured');
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const client = await getMongoClient();
    const db = client.db('drselam');
    const appointments = db.collection('appointments');

    const doc = {
      name,
      email,
      phone: phone || null,
      service: service || null,
      message: message || null,
      status: 'pending',
      createdAt: new Date(),
    };

    const result = await appointments.insertOne(doc);

    console.log('Appointment saved:', result.insertedId.toString());

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId.toString() }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error saving appointment:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
