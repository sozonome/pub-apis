import { Flex, Heading, Box, Text } from "@chakra-ui/react";

import AccessibleLink from "../AccessibleLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" height={24} align="center">
      <AccessibleLink href="/">
        <Heading as="h1">Public APIs</Heading>
        <Text>Find some public APIs for your next projects</Text>
      </AccessibleLink>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
