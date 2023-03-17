import { Grid } from "@chakra-ui/react";

import type { APIEntry } from "lib/services/publicapis/list/types";

import ItemCard from "./ItemCard";

type ItemContainerProps = {
  entries: Array<APIEntry>;
};

const ItemContainer = ({ entries }: ItemContainerProps) => {
  return (
    <Grid
      marginY={4}
      templateColumns={["repeat(1)", "repeat(1fr)", "repeat(2, 1fr)"]}
      gap={8}
    >
      {entries.map((entry) => (
        <ItemCard value={entry} key={`${entry.API}-${entry.Link}`} />
      ))}
    </Grid>
  );
};

export default ItemContainer;
