/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Public APIs",
  titleTemplate: "%s | Public APIs",
  defaultTitle: "Public APIs",
  description: "Find public APIs for your next projects.",
  canonical: "https://publicapis.sznm.dev",
  openGraph: {
    url: "https://publicapis.sznm.dev",
    title: "pub-apis",
    description: "Find public APIs for your next projects.",
    images: [
      {
        url: "https://og-image.sznm.dev/**publicapis**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "publicapis.sznm.dev og-image",
      },
    ],
    site_name: "publicapis",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
