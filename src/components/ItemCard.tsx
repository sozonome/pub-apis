import { Box, Heading, Text } from "@chakra-ui/react";

import { ListItem } from "./models/list";

type ItemCardProps = {
  value: ListItem;
};

const ItemCard = ({ value }: ItemCardProps) => {
  return (
    <Box>
      <Heading fontSize="lg">{value.API}</Heading>
      <Text>{value.Description}</Text>
    </Box>
  );
};

export default ItemCard;
