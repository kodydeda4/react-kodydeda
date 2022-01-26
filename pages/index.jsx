import {
  Button,
  Checkbox, Container, Divider, Flex, FormControl,
  FormLabel, GridItem, Heading, Input,
  Select, SimpleGrid, Text, useColorMode,
  useColorModeValue, VStack
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxWidth="container.xl" padding={0}>
      <Flex height="100vh" py={20}>
        <DetailsView />
        <CartView />
      </Flex>
    </Container>
  );
}

const DetailsView = () => {
  return (
    <VStack
      width="full"
      height="full"
      padding={10}
      spacing={10}
      alignItems={"flex-start"}
      // bgColor="red"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} width="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Johnny"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Appleseed"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="1234 Infinity Loop"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="San Francisco"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="albania">Albania</option>
              <option value="france">France</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" width="full">
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

const CartView = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
  return (
    <VStack
      width="full"
      height="full"
      padding={10}
      spacing={10}
      alignItems={"flex-start"}
      bgColor={bgColor}
    >
      <Heading size="2xl">Cart</Heading>
      <Divider/>
      <Button size="lg" width="full" onClick={()=>toggleColorMode()}>
          Toggle Dark Mode
          </Button>
    </VStack>
  );
};
