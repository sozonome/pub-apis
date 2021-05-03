import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Badges from "./Badges";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      alignSelf="flex-end"
      // height={[120, 36]}
      justifyContent="center"
    >
      <Box textAlign="center">
        <Text fontSize={["sm", "md"]}>
          2020 -{" "}
          <Link href="https://sznm.dev" fontWeight="bold" isExternal>
            sznm.dev
          </Link>
        </Text>

        <Text fontSize={["xs", "sm"]}>
          Powered by https://api.publicapis.org/
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
