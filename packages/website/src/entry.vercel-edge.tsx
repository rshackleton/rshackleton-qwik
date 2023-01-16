import { createQwikCity } from '@builder.io/qwik-city/middleware/vercel-edge';
import qwikCityPlan from '@qwik-city-plan';
import render from './entry.ssr';

// remove once this has been released: https://github.com/BuilderIO/qwik/issues/2597
(String as any).prototype.toUppercase = String.prototype.toUpperCase;

export default createQwikCity({ render, qwikCityPlan });
