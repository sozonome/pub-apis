'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

const Badges = () => {
  const { theme } = useTheme();

  return (
    <div className="my-4 grid w-full grid-cols-2 gap-2 sm:grid-cols-1">
      <a
        href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-golden-kitty-badge&utm_medium=badge&utm_souce=badge-public-apis-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/golden-kitty-badge.svg?post_id=279188&theme=${theme}`}
          alt="Public APIs - Find a public API for your next project | Product Hunt"
          width="200"
          height="43"
        />
      </a>

      <a
        href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-public-apis-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=279188&theme=${theme}&period=daily`}
          alt="Public APIs - Find a public API for your next project | Product Hunt"
          width="200"
          height="43"
        />
      </a>

      <a
        href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-public-apis-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=279188&theme=${theme}`}
          alt="Public APIs - Find a public API for your next project | Product Hunt"
          width="200"
          height="43"
        />
      </a>

      <a
        href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-review&utm_medium=badge&utm_souce=badge-public-apis-3#discussion-body"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=279188&theme=${theme}`}
          alt="Public APIs - Find a public API for your next project | Product Hunt"
          width="200"
          height="43"
        />
      </a>
    </div>
  );
};

export default Badges;
