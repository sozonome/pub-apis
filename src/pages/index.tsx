import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

import SearchContainer from "components/form/SearchContainer";
import { trackEventToUmami } from "utils/trackEvent";

const Home = () => {
  const handleClickAll = () => {
    trackEventToUmami("Home: click see complete list", "navigate");
  };

  return (
    <Box mb={8} w="full">
      <SearchContainer />

      <Box marginY={12}>
        <Link href="/all" passHref>
          <Button isFullWidth onClick={handleClickAll}>
            I want to see the complete list
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
