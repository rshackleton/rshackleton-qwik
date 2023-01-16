import sanityClient from '@sanity/client';

const client = sanityClient({
  apiVersion: new Date().toISOString().substring(0, 10),
  dataset: import.meta.env.VITE_SANITY_DATASET,
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  useCdn: true,
});

export default client;
