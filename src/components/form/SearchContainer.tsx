import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";

import { ListQuery, useAPIList } from "../../helpers/fetchHooks";

type SearchFormValueType = {
  queryParams: ListQuery;
  searchDescription: boolean;
  isRandom: boolean;
};

const INITIAL_VALUES: SearchFormValueType = {
  queryParams: {
    title: "",
    description: undefined,
    auth: undefined,
    https: undefined,
    cors: undefined,
    category: undefined,
  },
  searchDescription: false,
  isRandom: false,
};

const SearchContainer = () => {
  const {
    values: {
      queryParams: { title, description, auth, https, cors, category },
      searchDescription,
    },
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useFormik<SearchFormValueType>({
    initialValues: INITIAL_VALUES,
    onSubmit: (formValues: SearchFormValueType) => {
      console.log(formValues);
    },
  });

  const [searchQueries, setSearchQueries] = useState<ListQuery>(undefined);
  const [isRandomSearch, setIsRandomSearch] = useState<boolean>(false);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const { data } = useAPIList(shouldFetch, searchQueries, isRandomSearch);

  return (
    <Box>
      <Box marginBottom={4}>
        <Stack>
          <FormControl>
            <Input
              borderRadius={12}
              textAlign="center"
              name="queryParams.title"
              value={title}
              onChange={handleChange}
              placeholder="search API title"
              fontWeight="bold"
              size="lg"
            />
          </FormControl>

          <Box textAlign="center">
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
          </Box>
          {searchDescription && (
            <FormControl>
              <Input
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
        </Stack>
      </Box>

      <Button isFullWidth onClick={() => handleSubmit()}>
        Search
      </Button>
    </Box>
  );
};

export default SearchContainer;
