import {Flex, FormLabel, Select, Stack} from "@chakra-ui/react";

const SelectCat = () => {
  return (
    <Stack direction={["column", "row"]} alignItems="center" spacing="24px">
      <FormLabel htmlFor="country" fontSize="sm" fontWeight="md" color="gray.700">
        Brand
      </FormLabel>
      <Select placeholder="Select option" id="country" name="country">
        <option value="option1">Option 1</option>
      </Select>
    </Stack>
  );
};

export default SelectCat;
