import { Grid } from "@chakra-ui/react";

import ItemCard from "./ItemCard";

import { ListItem } from "../models/list";

type ItemContainerProps = {
  entries: Array<ListItem>;
  useAccordion?: boolean;
};

const ItemContainer = ({ entries, useAccordion }: ItemContainerProps) => {
  return (
    <Grid
      templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
      gap={2}
    >
      {entries.map((entry, index) => (
        <ItemCard value={entry} key={index} useAccordion={useAccordion} />
      ))}
    </Grid>
  );
};

export default ItemContainer;
