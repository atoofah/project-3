import {useState} from "react";
import {Checkbox, Flex, Text, useBreakpointValue} from "@chakra-ui/react";

export default function ProductsFilterBy() {
  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      my={useBreakpointValue({base: 5, lg: 5})}
    >
      <Flex>
        <Text fontSize={"lg"} display={useBreakpointValue({md: "block"})} mr={5}>
          Filter By:{" "}
        </Text>
        <Checkbox
          colorScheme={"purple"}
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, e.target.checked])}
          mr={4}
        >
          All
        </Checkbox>
        <Checkbox
          colorScheme={"purple"}
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], checkedItems[2]])}
          mr={4}
        >
          Discount
        </Checkbox>
        <Checkbox
          colorScheme={"purple"}
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, checkedItems[2]])}
          mr={4}
        >
          Category
        </Checkbox>
        <Checkbox
          colorScheme={"purple"}
          isChecked={checkedItems[2]}
          onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], e.target.checked])}
        >
          Brand
        </Checkbox>
      </Flex>
    </Flex>
  );
}
