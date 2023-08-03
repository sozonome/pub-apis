import Script from 'next/script';

import Providers from '@/app/providers';
import { ThemeProvider } from '@/lib/components/theme-provider';
import { Toaster } from '@/lib/components/ui/toaster';
import { UMAMI_SRC, UMAMI_WEBSITE_ID } from '@/lib/constants/umami';
import Layout from '@/lib/layout';
import { fontSans } from '@/lib/styles/fonts';
import '@/lib/styles/globals.css';

export { metadata } from '@/lib/constants/root_metadata';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={fontSans.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
          <Toaster />
        </ThemeProvider>

        {/* umami self-hosted analytics */}
        <Script
          async
          defer
          data-website-id={UMAMI_WEBSITE_ID}
          src={UMAMI_SRC}
          data-domains="sznm.dev"
        />
      </body>
    </html>
  );
};

export default RootLayout;
