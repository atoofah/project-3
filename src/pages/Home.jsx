import {Box, Container, Flex, Grid, SkeletonCircle, SkeletonText, Spacer} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {axiosInstance} from "../api/axios.config";

import ProductItem from "../components/ProductItem";
import ProductsFilterBy from "../components/ProductsFilterBy";
import SelectCat from "../components/SelectCat";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [queryParam, setQueryParam] = useState({
    all: null,
    brand: null,
    category: null,
    discountPercentage: null,
  });
  const setCheckedItems = (e) => {
    console.log(e.target.checked);
  };
  useEffect(() => {
    axiosInstance
      .get(`/products?limit=30&select=title,price,thumbnail,brand,category,discountPercentage`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <Container maxW="1500px" my={20}>
        <Grid gridTemplateColumns={"repeat(auto-fill, minmax(280px, 1fr))"} gap={5}>
          {Array(15)
            .fill(1)
            .map((_, idx) => (
              <Box
                padding="6"
                boxShadow="lg"
                bg="none"
                border={"1px solid #a8b5c8"}
                rounded={"10"}
                key={idx}
              >
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
              </Box>
            ))}
        </Grid>
      </Container>
    );

  const renderProductCards = products.map((product) => (
    <ProductItem key={product.id} {...product} />
  ));
  return (
    <Container maxW="1500px" my={20}>
      <Flex>
        <Box>
          <ProductsFilterBy onChange={setCheckedItems} />
        </Box>
        <Spacer />
        <Box>
          <SelectCat />
        </Box>
      </Flex>
      <Grid gridTemplateColumns={"repeat(auto-fill, minmax(280px, 1fr))"} gap={5}>
        {renderProductCards}
      </Grid>
    </Container>
  );
};

export default HomePage;
