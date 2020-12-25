import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      alignSelf="flex-end"
      height={24}
      align="center"
      justifyContent="center"
    >
      <Text>
        2020 -{" "}
        <Link href="https://sznm.dev" fontWeight="bold" isExternal>
          sznm.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
