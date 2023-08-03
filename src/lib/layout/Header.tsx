'use client';

import { Flex, Heading, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { ThemeToggle } from '@/lib/components/theme-toggle';

import AppMenu from './AppMenu';

const Header = () => {
  return (
    <Flex as="header" width="full" height={24} align="center">
      <Box flexBasis="60%">
        <Link href="/">
          <Heading as="h1" fontSize={{ base: 'md', md: 'xl' }}>
            Public APIs
          </Heading>
          <Text fontSize="xs" color="gray">
            Find some public APIs for your next projects
          </Text>
        </Link>
      </Box>

      <Box marginLeft="auto" textAlign="right" flexBasis="40%">
        <ThemeToggle />
        <AppMenu />
      </Box>
    </Flex>
  );
};

export default Header;
