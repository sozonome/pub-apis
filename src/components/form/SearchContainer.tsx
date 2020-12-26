import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { ChangeEvent, ReactText, useState } from "react";

import {
  ListQuery,
  useAPICategories,
  useAPIList,
} from "../../helpers/fetchHooks";
import ItemContainer from "../item/ItemContainer";

type SearchFormValueType = {
  queryParams: ListQuery;

  searchDescription: boolean;
  selectCategory: boolean;
  isRandom: boolean;
};

const INITIAL_VALUES: SearchFormValueType = {
  queryParams: {
    title: "",
  },
  searchDescription: false,
  selectCategory: false,
  isRandom: false,
};

const SearchContainer = () => {
  const {
    values: {
      queryParams: { title, description, https, cors, category },
      searchDescription,
      selectCategory,
      isRandom,
    },
    dirty,
    handleChange,
    setFieldValue,
    handleSubmit,
    resetForm,
  } = useFormik<SearchFormValueType>({
    initialValues: INITIAL_VALUES,
    onSubmit: (formValues: SearchFormValueType) => {
      setShouldFetch(false);
      setSearchQueries(formValues.queryParams);
      setIsRandomSearch(formValues.isRandom);
      setShouldFetch(true);
    },
  });

  const [searchQueries, setSearchQueries] = useState<ListQuery>(undefined);
  const [isRandomSearch, setIsRandomSearch] = useState<boolean>(false);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const {
    data: searchResult,
    isLoading: isLoadingSearchResult,
    isError,
  } = useAPIList(shouldFetch, searchQueries, isRandomSearch);

  const { data: categories } = useAPICategories();

  const toast = useToast();

  if (shouldFetch && isError) {
    toast.closeAll();
    toast({
      position: "top",
      title: "Error",
      description:
        "Error fetching data. Check your internet connection and try to refresh the page.",
      status: "error",
      isClosable: true,
      duration: 10000,
    });
  }

  return (
    <Box>
      <Box marginBottom={4}>
        <Stack>
          <FormControl>
            <Input
              type="text"
              borderRadius={12}
              textAlign="center"
              name="queryParams.title"
              value={title}
              onChange={handleChange}
              placeholder="search API name"
              fontWeight="bold"
              size="lg"
            />
          </FormControl>

          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text>Options</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Stack>
                  <FormControl textAlign="center">
                    <Checkbox
                      isChecked={searchDescription}
                      name="searchDescription"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("searchDescription", e.target.checked);
                        setFieldValue(
                          "queryParams.description",
                          e.target.checked ? "" : undefined
                        );
                      }}
                    >
                      Search Description
                    </Checkbox>
                  </FormControl>
                  {searchDescription && (
                    <FormControl>
                      <Input
                        type="text"
                        borderRadius={12}
                        textAlign="center"
                        name="queryParams.description"
                        value={description}
                        onChange={handleChange}
                        placeholder="search API description"
                        size="md"
                      />
                    </FormControl>
                  )}

                  <FormControl textAlign="center">
                    <Checkbox
                      isChecked={selectCategory}
                      name="selectCategory"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("selectCategory", e.target.checked);
                        setFieldValue(
                          "queryParams.category",
                          e.target.checked ? "" : undefined
                        );
                      }}
                    >
                      Select Category
                    </Checkbox>
                  </FormControl>
                  {selectCategory && (
                    <FormControl>
                      <Select
                        placeholder="Select Category ..."
                        name="queryParams.category"
                        value={category}
                        onChange={handleChange}
                      >
                        {categories?.map((category: string, index) => (
                          <Text as="option" key={index}>
                            {category}
                          </Text>
                        ))}
                      </Select>
                    </FormControl>
                  )}

                  <FormControl alignItems="center">
                    <FormLabel textAlign="center" margin={0}>
                      Support HTTPS
                    </FormLabel>
                    <RadioGroup
                      value={String(https)}
                      name="queryParams.https"
                      onChange={(e: ReactText) => {
                        setFieldValue(
                          "queryParams.https",
                          e === "undefined"
                            ? undefined
                            : JSON.parse(e.toString())
                        );
                      }}
                    >
                      <Stack direction="row" justify="center">
                        <Radio value={String(true)}>Yes</Radio>
                        <Radio value={String(false)}>No</Radio>
                        <Radio value={String(undefined)}>Both</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>

                  <FormControl textAlign="center">
                    <Checkbox
                      isChecked={isRandom}
                      name="isRandom"
                      onChange={handleChange}
                    >
                      Surprise Me
                    </Checkbox>
                  </FormControl>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Box>

      <Stack>
        <Button
          disabled={!dirty}
          colorScheme="teal"
          isFullWidth
          onClick={() => handleSubmit()}
          isLoading={isLoadingSearchResult}
        >
          Search
        </Button>
        <Button
          disabled={!dirty}
          size="sm"
          colorScheme="orange"
          isFullWidth
          onClick={() => resetForm()}
        >
          Clear Search Input
        </Button>
      </Stack>

      {shouldFetch && (
        <Skeleton isLoaded={!isLoadingSearchResult} minHeight={72} marginY={4}>
          {searchResult && searchResult.entries ? (
            <ItemContainer entries={searchResult.entries} />
          ) : (
            <Text textAlign="center">Not Found</Text>
          )}
        </Skeleton>
      )}
    </Box>
  );
};

export default SearchContainer;
