import { Grid, Link, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

const Badges = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid
      width="full"
      templateColumns={["repeat(2, 1fr)"]}
      gap={2}
      marginY={4}
    >
      <Link
        href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-golden-kitty-badge&utm_medium=badge&utm_souce=badge-public-apis-3"
        isExternal
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/golden-kitty-badge.svg?post_id=279188&theme=${colorMode}`}
          alt="Public APIs - Find a public API for your next project | Product Hunt"
          width="200"
          height="43"
        />
      </Link>

      <Link
        href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-public-apis-3"
        target="_blank"
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=279188&theme=${colorMode}&period=daily`}
          alt="Public APIs - Find a public API for your next project | Product Hunt"
          width="200"
          height="43"
        />
      </Link>

      <Link
        href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-public-apis-3"
        target="_blank"
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=279188&theme=${colorMode}`}
          alt="Public APIs - Find a public API for your next project | Product Hunt"
          width="200"
          height="43"
        />
      </Link>

      <Link
        href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-review&utm_medium=badge&utm_souce=badge-public-apis-3#discussion-body"
        isExternal
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=279188&theme=${colorMode}`}
          alt="Public APIs - Find a public API for your next project | Product Hunt"
          width="200"
          height="43"
        />
      </Link>
    </Grid>
  );
};

export default Badges;
