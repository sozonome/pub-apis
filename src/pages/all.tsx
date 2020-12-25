import { Box, Button, Skeleton } from "@chakra-ui/react";
import Link from "next/link";

import ItemContainer from "../components/item/ItemContainer";

import { useAPIList } from "../helpers/fetchHooks";

const All = () => {
  const { data, isLoading } = useAPIList(true);

  const sortedData =
    data &&
    data.entries.sort((a, b) => {
      if (a.API < b.API) {
        return -1;
      }
      if (a.API > b.API) {
        return 1;
      }
      return 0;
    });

  return (
    <Box>
      <Link href="/" passHref>
        <Button isFullWidth size="lg" marginBottom={8}>
          Search
        </Button>
      </Link>
      <Skeleton isLoaded={!isLoading} minHeight="80vh">
        {data && data.entries && <ItemContainer entries={sortedData} />}
      </Skeleton>
    </Box>
  );
};

export default All;
