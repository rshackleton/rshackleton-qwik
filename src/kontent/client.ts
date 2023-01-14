import { createDeliveryClient } from '@kontent-ai/delivery-sdk';

const deliveryClient = createDeliveryClient({
  defaultLanguage: 'default',
  previewApiKey: import.meta.env.KONTENT_PREVIEW_KEY,
  projectId: import.meta.env.VITE_KONTENT_PROJECT_ID,
});

export default deliveryClient;
