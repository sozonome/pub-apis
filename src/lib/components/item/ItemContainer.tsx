import type { GridProps } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';

import type { APIEntry } from 'lib/services/publicapis/list/types';

import ItemCard from './ItemCard';

type ItemContainerProps = {
  entries: Array<APIEntry>;
  templateColumns?: GridProps['templateColumns'];
};

const ItemContainer = ({
  entries,
  templateColumns = {
    base: 'repeat(1)',
    md: 'repeat(2, 1fr)',
    xl: 'repeat(3, 1fr)',
  },
}: ItemContainerProps) => {
  return (
    <Grid marginY={4} templateColumns={templateColumns} gap={8}>
      {entries.map((entry) => (
        <ItemCard value={entry} key={`${entry.API}-${entry.Link}`} />
      ))}
    </Grid>
  );
};

export default ItemContainer;
