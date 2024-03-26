import type { Metadata, Viewport } from 'next';

const creator = 'Agustinus Nathaniel';
const baseUrl = 'https://publicapis.sznm.dev';
const appName = 'Public APIs';
const description = 'Find public APIs for your next projects.';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: appName,
  authors: { name: 'sozonome' },
  creator,
  publisher: creator,
  generator: 'Next.js',
  keywords: [appName, 'public-apis', 'publicapis', 'publicapis.sznm.dev'],
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: 'https://sznm.dev/app_icons/pub-apis.svg',
  },
  appleWebApp: {
    title: 'pub-apis',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
  title: {
    default: appName,
    template: '%s | Public APIs',
  },
  description,
  openGraph: {
    url: 'https://publicapis.sznm.dev',
    title: appName,
    description,
    images: [
      {
        url: 'https://og-image.sznm.dev/**publicapis**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
        alt: 'publicapis.sznm.dev og-image',
      },
    ],
    siteName: 'sozonome',
  },
  twitter: {
    creator: '@sozonome',
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark light',
};
