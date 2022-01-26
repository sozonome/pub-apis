import { Flex, Heading, Box, Text, useBreakpointValue } from "@chakra-ui/react";

import AccessibleLink from "lib/components/AccessibleLink";

import AppMenu from "./AppMenu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const headingSize = useBreakpointValue<string>({
    base: "md",
    md: "2xl",
  });

  return (
    <Flex as="header" width="full" height={24} align="center">
      <Box flexBasis="60%">
        <AccessibleLink href="/">
          <Heading as="h1" fontSize={headingSize}>
            Public APIs
          </Heading>
          <Text fontSize={["xs", "sm"]}>
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
