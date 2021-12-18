import { Grid } from "@chakra-ui/react";

import { APIEntry } from "services/publicapis/list/types";

import ItemCard from "./ItemCard";

type ItemContainerProps = {
  entries: Array<APIEntry>;
  useAccordion?: boolean;
};

const ItemContainer = ({ entries, useAccordion }: ItemContainerProps) => {
  return (
    <Grid
      marginY={4}
      templateColumns={[
        "repeat(1)",
        "repeat(1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={8}
    >
      {entries.map((entry) => (
        <ItemCard
          value={entry}
          key={`${entry.API}-${entry.Link}`}
          useAccordion={useAccordion}
        />
      ))}
    </Grid>
  );
};

export default ItemContainer;
