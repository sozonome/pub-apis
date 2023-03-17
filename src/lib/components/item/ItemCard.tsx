import {
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Tag,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { ImCopy } from "react-icons/im";

import type { APIEntry } from "lib/services/publicapis/list/types";

type APIDetailsProps = Omit<APIEntry, "API" | "Description" | "Link">;

const APIDetails = ({ Category, HTTPS, Cors, Auth }: APIDetailsProps) => {
  return (
    <Flex alignItems="center" gap={2} wrap="wrap">
      <Tag>{Category}</Tag>
      <Tag alignItems="center">
        <Text marginRight={2}>HTTPS :</Text>
        {HTTPS ? (
          <AiFillCheckCircle color="green" />
        ) : (
          <AiFillCloseCircle color="red" />
        )}
      </Tag>
      <Tag>CORS : {Cors}</Tag>
      {Auth && <Tag>Auth : {Auth}</Tag>}
    </Flex>
  );
};

type ItemCardProps = {
  value: APIEntry;
};

const ItemCard = ({ value }: ItemCardProps) => {
  const { colorMode } = useColorMode();

  const {
    API: APIName,
    Description,
    Cors,
    HTTPS,
    Auth,
    Category,
    Link: APILink,
  } = value;

  const apiDetailsProps: APIDetailsProps = {
    Cors,
    HTTPS,
    Category,
    Auth,
  };

  const toast = useToast();

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(APILink);
    toast({
      description: `"${APILink}" copied to clipboard!`,
      status: "success",
      isClosable: true,
      duration: 9000,
      position: "top-right",
    });
  };

  return (
    <Grid
      padding={{ base: 4, md: 8 }}
      border="1px solid"
      borderColor={colorMode === "light" ? "gray.200" : "gray.400"}
      borderRadius={24}
      transition="ease-out 0.3s"
      _hover={{
        transform: "scale(1.02)",
      }}
      gap={4}
      role="group"
      as={Link}
      href={APILink}
      style={{
        textDecoration: "none",
      }}
      position="relative"
    >
      <Box>
        <Heading fontSize="lg">{APIName}</Heading>
        <Text marginY={1} fontSize="sm" color="gray" fontWeight="light">
          {Description}
        </Text>
      </Box>

      <APIDetails {...apiDetailsProps} />

      <IconButton
        position="absolute"
        top={{ base: 4, md: 6 }}
        right={{ base: 4, md: 6 }}
        aria-label="copy button"
        onClick={handleCopy}
        icon={<ImCopy />}
        size="md"
      />
    </Grid>
  );
};

export default ItemCard;
