import { Grid, Image, Link, useColorMode } from "@chakra-ui/react";

const Badges = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid
      width="full"
      templateColumns={["repeat(1)", "repeat(2, 1fr)"]}
      gap={2}
      marginY={2}
    >
      <Link
        href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-public-apis-3"
        target="_blank"
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=279188&theme=${colorMode}`}
          alt="Public APIs - Find a public API for your next project | Product Hunt"
          width="250"
          height="54"
        />
      </Link>

      <Link
        href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-public-apis-3"
        target="_blank"
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=279188&theme=${colorMode}&period=daily`}
          alt="Public APIs - Find a public API for your next project | Product Hunt"
          width="250"
          height="54"
        />
      </Link>
    </Grid>
  );
};

export default Badges;
