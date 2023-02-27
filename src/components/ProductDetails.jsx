import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import {FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {MdLocalShipping} from "react-icons/md";

import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {axiosInstance} from "../api/axios.config";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // if (isNaN(id)) {
    //   navigate("/");
    // }
    axiosInstance
      .get(`/products/${id}`)
      .then((res) => setProductDetail(res.data))
      .catch((err) => {
        if (err.response.status === 404) {
          navigate("/");
        }
      });
  }, [id]);
  console.log(id);

  // if (!productDetail) {
  //   navigate("/");
  //   return;
  // }
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: 8, md: 10}} py={{base: 18, md: 24}}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={productDetail?.thumbnail}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{base: "100%", sm: "400px", lg: "500px"}}
          />
        </Flex>
        <Stack spacing={{base: 6, md: 10}}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{base: "2xl", sm: "4xl", lg: "5xl"}}
            >
              {productDetail?.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              $ {productDetail?.price}
            </Text>
          </Box>

          <Stack
            spacing={{base: 4, sm: 6}}
            direction={"column"}
            divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}
          >
            <VStack spacing={{base: 4, sm: 6}}>
              <Text fontSize={"lg"}>{productDetail?.description}</Text>
            </VStack>

            <Box>
              <Text
                fontSize={{base: "16px", lg: "18px"}}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Category:
                  </Text>
                  {productDetail?.category}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Brand:
                  </Text>{" "}
                  {productDetail?.brand}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Rating:
                  </Text>{" "}
                  {productDetail?.rating}
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductDetails;
