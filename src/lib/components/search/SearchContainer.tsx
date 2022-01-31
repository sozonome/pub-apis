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
  Grid,
  Input,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import type { FormikErrors } from "formik";
import { useFormik } from "formik";
import type { ChangeEvent, ReactText } from "react";
import { useState } from "react";

import ItemContainer from "lib/components/item/ItemContainer";
import { useApiList } from "lib/services/publicapis/list";
import type { APIListParams } from "lib/services/publicapis/list/types";
import { formikSubmitButtonDisabled } from "lib/utils/formikSubmitButtonDisabled";

import type { SearchContainerProps } from "./types";

type SearchFormValueType = {
  queryParams: APIListParams;

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

const SearchContainer = ({ categories }: SearchContainerProps) => {
  const [searchQueries, setSearchQueries] = useState<APIListParams>();
  const [isRandomSearch, setIsRandomSearch] = useState<boolean>(false);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const {
    data: searchResult,
    isLoading: isLoadingSearchResult,
    isError,
  } = useApiList(searchQueries, isRandomSearch, undefined, shouldFetch);

  const {
    values: {
      queryParams: { title, description, https, category },
      searchDescription,
      selectCategory,
      isRandom,
    },
    errors,
    dirty,
    handleChange,
    setFieldValue,
    handleSubmit,
    resetForm,
  } = useFormik<SearchFormValueType>({
    initialValues: INITIAL_VALUES,
    validate: (formValues: SearchFormValueType) => {
      const formErrors: FormikErrors<SearchFormValueType> = {};

      const emptyQueries = [
        formValues.queryParams.title,
        formValues.queryParams.category,
        formValues.queryParams.description,
      ].every((query) => !query);

      if (formValues.queryParams.https !== undefined && emptyQueries) {
        formErrors.queryParams = { ...formErrors.queryParams };
        formErrors.queryParams.title = "Title must not be empty";
      }

      if (formValues.selectCategory && !formValues.queryParams.category) {
        formErrors.queryParams = { ...formErrors.queryParams };
        formErrors.queryParams.category = "Category must be selected";
      }

      if (formValues.searchDescription && !formValues.queryParams.description) {
        formErrors.queryParams = { ...formErrors.queryParams };
        formErrors.queryParams.description = "Description must be selected";
      }

      return formErrors;
    },
    onSubmit: (formValues: SearchFormValueType) => {
      setShouldFetch(false);
      setSearchQueries(formValues.queryParams);
      setIsRandomSearch(formValues.isRandom);
      setShouldFetch(true);
    },
  });

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

  const searchButtonDisabled = formikSubmitButtonDisabled(dirty, errors);

  return (
    <Box>
      <Box marginBottom={4}>
        <Stack>
          <FormControl>
            <Input
              type="text"
              textAlign="center"
              name="queryParams.title"
              value={title}
              onChange={handleChange}
              placeholder="search API name"
              fontWeight="semibold"
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
                <Stack spacing={2}>
                  <Grid
                    templateColumns={{ sm: "1fr", md: "repeat(2,1fr)" }}
                    gap={{ sm: 0, md: 4 }}
                  >
                    <Box>
                      <FormControl textAlign="center">
                        <Checkbox
                          isChecked={searchDescription}
                          name="searchDescription"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setFieldValue(
                              "searchDescription",
                              e.target.checked
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
                    </Box>

                    <Box>
                      <FormControl textAlign="center">
                        <Checkbox
                          isChecked={selectCategory}
                          name="selectCategory"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setFieldValue("selectCategory", e.target.checked);
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
                            {categories?.map((categoryItem: string) => (
                              <Text as="option" key={categoryItem}>
                                {categoryItem}
                              </Text>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </Box>
                  </Grid>

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
          disabled={searchButtonDisabled}
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
          Reset Search Input
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
