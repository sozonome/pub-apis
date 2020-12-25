import { Grid } from "@chakra-ui/react";

import ItemCard from "./ItemCard";

import { ListItem } from "../models/list";

type ItemContainerProps = {
  entries: Array<ListItem>;
};

const ItemContainer = ({ entries }: ItemContainerProps) => {
  return (
    <Grid
      templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
      gap={2}
    >
      {entries.map((entry, index) => (
        <ItemCard value={entry} key={index} />
      ))}
    </Grid>
  );
};

export default ItemContainer;
