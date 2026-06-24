import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fa'],

  // Used when no locale matches
  defaultLocale: 'fa',
  localeDetection: false,
  // Automatically redirect to locale-prefixed paths
  localePrefix: 'always',
});
