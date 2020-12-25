import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

import SearchContainer from "../components/form/SearchContainer";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <SearchContainer />

      <Box marginY={12}>
        <Link href="/all" passHref>
          <Button isFullWidth>I want to see the complete list</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
