import { Box, Skeleton } from "@chakra-ui/react";

import ItemCard from "../components/ItemCard";

import { useAPIList } from "../helpers/fetchHooks";

const All = () => {
  const { data, isLoading } = useAPIList(true);

  return (
    <Box>
      <Skeleton isLoaded={!isLoading} minHeight="80vh">
        {data &&
          data.entries &&
          data.entries
            .sort((a, b) => {
              if (a.API < b.API) {
                return -1;
              }
              if (a.API > b.API) {
                return 1;
              }
              return 0;
            })
            .map((entry, index) => <ItemCard value={entry} key={index} />)}
      </Skeleton>
    </Box>
  );
};

export default All;
