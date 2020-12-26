import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { ImCopy } from "react-icons/im";

import { ListItem } from "../models/list";

type ItemCardProps = {
  value: ListItem;
  useAccordion?: boolean;
};

const ItemCard = ({ value, useAccordion = true }: ItemCardProps) => {
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

  const handleCopy = () => {
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
    <Box
      padding={4}
      border="1px solid"
      borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
      borderRadius={12}
    >
      <Box>
        <Heading fontSize="lg">{APIName}</Heading>
        <Text marginY={4} fontSize="lg">
          {Description}
        </Text>
      </Box>

      {useAccordion ? (
        <Accordion allowToggle marginY={2}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="sm">Details</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <APIDetails {...apiDetailsProps} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <APIDetails {...apiDetailsProps} />
      )}

      <Box marginTop={4}>
        <Text>API Link: </Text>
        <Grid templateColumns={["repeat(2, 1fr)"]} gap={2}>
          <Link href={APILink} isExternal>
            <Button
              isFullWidth
              colorScheme="blue"
              leftIcon={<FiExternalLink />}
            >
              Open
            </Button>
          </Link>
          <Button onClick={handleCopy} rightIcon={<ImCopy />}>
            Copy
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

type APIDetailsProps = Omit<ListItem, "API" | "Description" | "Link">;

const APIDetails = ({ Category, HTTPS, Cors, Auth }: APIDetailsProps) => {
  return (
    <>
      <Text>Category: {Category}</Text>
      <Text>Support: </Text>
      <Box marginLeft={4}>
        <Flex alignItems="center">
          <Text marginRight={2}>HTTPS :</Text>
          {HTTPS ? (
            <AiFillCheckCircle color="green" />
          ) : (
            <AiFillCloseCircle color="red" />
          )}
        </Flex>

        <Text>CORS : {Cors}</Text>
      </Box>
      {Auth && <Text>Auth : {Auth}</Text>}
    </>
  );
};

export default ItemCard;
