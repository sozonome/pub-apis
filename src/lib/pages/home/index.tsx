'use client';

import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';

import SearchContainer from '@/lib/components/search/SearchContainer';
import { EVENT_TYPE_NAVIGATE } from '@/lib/constants/events';
import type { HomePageProps } from '@/lib/pages/home/types';
import { trackEvent } from '@/lib/utils/trackEvent';

const Home = ({ categoryData }: HomePageProps) => {
  const handleClickAll = () => {
    trackEvent({
      eventName: 'Home: click see complete list',
      eventData: { type: EVENT_TYPE_NAVIGATE },
    });
  };

  const categories = categoryData?.categories ?? [];

  return (
    <Box mb={8} marginX="auto" maxWidth={800}>
      <SearchContainer categories={categories} />

      <Box marginY={12}>
        <Link href="/all" passHref legacyBehavior>
          <Button as={Link} href="/all" width="full" onClick={handleClickAll}>
            I want to see the complete list
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
