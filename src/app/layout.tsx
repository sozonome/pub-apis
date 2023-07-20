import Script from 'next/script';

import Providers from 'app/providers';
import { UMAMI_SRC, UMAMI_WEBSITE_ID } from 'lib/constants/umami';
import Layout from 'lib/layout';

export { metadata } from 'lib/constants/root_metadata';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>

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
