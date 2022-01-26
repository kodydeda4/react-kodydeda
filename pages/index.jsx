import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
  useBreakpointValue,
  Tag,
  HStack,
} from "@chakra-ui/react";

export default function IndexView() {
  return (
    <Container maxWidth="container.xl" padding={0}>
      <Flex width={"50vh"} direction={{ base: "column", md: "row" }}>
        <VStack
          width="full"
          height="full"
          padding={10}
          spacing={10}
          alignItems={"flex-start"}
        >
          <HeaderView />

          <AboutView />
          <ExperienceView />
        </VStack>
      </Flex>
    </Container>
  );
}

const HeaderView = () => {
  const props = {
    name: "Kody Deda",
    title: "iOS Developer",
  };

  return (
    <VStack spacing={3} alignItems="flex-start">
      <Heading size="xl">{props.name}</Heading>
      <Text>{props.title}</Text>
    </VStack>
  );
};

const AboutView = () => {
  const props = {
    description:
      "👋 Hi, I'm a professional software engineer who specializes in developing software for the Apple ecosystem. I love UI/UX design & functional programming!",
    skills: ["SwiftUI", "Combine", "React"],
  };

  return (
    <VStack spacing={3} alignItems="flex-start">
      <Heading size="lg">About</Heading>
      <Divider />
      <Text>{props.description}</Text>
      <HStack>
        {props.skills.map((skill) => (
          <Tag>{skill}</Tag>
        ))}
      </HStack>
    </VStack>
  );
};

const ExperienceView = () => {
  const props = {
    experiences: [
      {
        name: "Dealerware",
      },
    ],
  };

  return (
    <VStack spacing={3} alignItems="flex-start">
      <Heading size="lg">Experience</Heading>
      <Divider />

      {props.experiences.map((experience) => (
        <HStack>
          <Box>

          </Box>
          <Text>{experience.name}</Text>
        </HStack>
      ))}
    </VStack>
  );
};
