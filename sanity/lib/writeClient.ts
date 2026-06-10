import { createClient } from "@sanity/client";


export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-02-28',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});