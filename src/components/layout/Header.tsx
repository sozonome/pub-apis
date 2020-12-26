import { Flex, Heading, Box, Text } from "@chakra-ui/react";

import AccessibleLink from "../AccessibleLink";
import AppMenu from "./AppMenu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" height={24} align="center">
      <Box flexBasis="60%">
        <AccessibleLink href="/">
          <Heading as="h1">Public APIs</Heading>
          <Text fontSize="sm">
            Find some public APIs for your next projects
          </Text>
        </AccessibleLink>
      </Box>

      <Box marginLeft="auto" textAlign="right" flexBasis="40%">
        <ThemeToggle />
        <AppMenu />
      </Box>
    </Flex>
  );
};

export default Header;
