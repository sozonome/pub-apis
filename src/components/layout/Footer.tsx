import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Badges from "./Badges";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      alignSelf="flex-end"
      height={[48, 36]}
      justifyContent="center"
    >
      <Box textAlign="center">
        <Text>
          2020 -{" "}
          <Link href="https://sznm.dev" fontWeight="bold" isExternal>
            sznm.dev
          </Link>
        </Text>

        <Text fontSize="sm">Powered by https://api.publicapis.org/</Text>

        <Badges />
      </Box>
    </Flex>
  );
};

export default Footer;
