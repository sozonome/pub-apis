import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

import SearchContainer from "lib/components/search/SearchContainer";
import { useCategoryList } from "lib/services/publicapis/category";
import { trackEventToUmami } from "lib/utils/trackEvent";

import type { HomePageProps } from "./types";

const Home = ({ categoryFallbackData }: HomePageProps) => {
  const handleClickAll = () => {
    trackEventToUmami("Home: click see complete list", "navigate");
  };

  const { data: categories } = useCategoryList(categoryFallbackData);

  return (
    <Box mb={8} marginX="auto" maxWidth={1000}>
      <SearchContainer categories={categories} />

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
