import {
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import ExperienceCard from "../components/experience-card";

export default function IndexView() {
  const resume = {
    name: "Kody Deda",
    title: "iOS Developer",
    description:
      "👋 Hi, I'm a professional software engineer who specializes in developing software for the Apple ecosystem. I love UI/UX design & functional programming!",
    skills: ["SwiftUI", "Combine", "React"],
  };

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
          <HeaderView
            props={{
              name: resume.name,
              title: resume.title,
            }}
          />
          <AboutView
            props={{
              description: resume.description,
              skills: resume.skills,
            }}
          />
          <ExperienceView />
        </VStack>
      </Flex>
    </Container>
  );
}

const HeaderView = ({ props: { name, title } }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <VStack spacing={3} alignItems="flex-start">
      <Heading size="xl">{name}</Heading>
      <Text>{title}</Text>
      <Button size="lg" width="full" onClick={() => toggleColorMode()}>
        Toggle Dark Mode
      </Button>
    </VStack>
  );
};

const AboutView = ({ props: { description, skills } }) => {
  return (
    <VStack spacing={3} alignItems="flex-start">
      <Heading size="lg">About</Heading>
      <Divider />
      <Text>{description}</Text>
      <HStack>
        {skills.map((skill) => (
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
        title: "iOS Developer",
        description: "Dealerware - Austin TX",
        timeline: "July 12, 2021 - Present",
        icon: "http://incitrio.com/wp-content/uploads/2015/01/Apple_gray_logo.png",
        link: "https://www.dealerware.com",
      },
    ],
  };

  return (
    <VStack width="full" spacing={3} alignItems={"flex-start"}>
      <Heading size="lg">Experience</Heading>
      <Divider />
      {props.experiences.map((experience) => (
        <ExperienceCard
          props={{
            title: experience.title,
            description: experience.description,
            timeline: experience.timeline,
            icon: experience.icon,
            link: experience.link,
          }}
        />
      ))}
    </VStack>
  );
};
