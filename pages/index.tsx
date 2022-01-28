import {
  Avatar,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import EducationView from "../components/EducationView";
import ExperienceView from "../components/ExperienceView";
import FooterView from "../components/FooterView";
import NavbarView from "../components/NavbarView";
import ProjectView from "../components/ProjectView";
import useResume from "../hooks/useResume";

export default function Index() {
  const resume = useResume();

  return (
    <Box bg={useColorModeValue("white", "black")}>
      <Container maxWidth="750" padding={10}>
        <VStack spacing={12}>
          <NavbarView />
          <HeaderView
            props={{
              name: resume.name,
              title: resume.title,
              avatar: resume.avatar,
            }}
          />
          <AboutView
            props={{
              description: resume.description,
              skills: resume.skills,
            }}
          />
          {/* <Button colorScheme={"blue"} size="lg" width="full">Contact Me</Button> */}
          <ExperienceListView props={resume.experience} />
          <ProjectListView props={resume.projects} />
          <EducationListView props={resume.education} />
        </VStack>
        <FooterView />
      </Container>
    </Box>
  );
}

const HeaderView = ({ props }) => (
  <Box w={"full"} textAlign={"center"}>
    <Avatar
      size={"2xl"}
      src={props.avatar}
      alt={"Avatar Alt"}
      mb={4}
      borderWidth="2px"
      bg={useColorModeValue("gray.100", "whiteAlpha.200")}
      borderColor={useColorModeValue("neutral.100", "neutralD.100")}
    />
    <Heading fontSize={"3xl"}>{props.name}</Heading>
    <Text fontSize={"lg"} color={"gray.500"} fontWeight={600}>
      {props.title}
    </Text>
  </Box>
);

const AboutView = ({ props }) => (
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

const ExperienceListView = ({ props }) => (
  <VStack width="full" spacing={3} alignItems={"flex-start"}>
    <Heading size="lg">Experience</Heading>
    <Divider />
    {props.map((i) => (
      <ExperienceView experience={i} />
    ))}
  </VStack>
);

const ProjectListView = ({ props }) => (
  <VStack width="full" spacing={3} alignItems={"flex-start"}>
    <Heading size="lg">Projects</Heading>
    <Divider />
    {props.map((i) => (
      <ProjectView project={i} />
    ))}
  </VStack>
);

const EducationListView = ({ props }) => (
  <VStack width="full" spacing={3} alignItems={"flex-start"}>
    <Heading size="lg">Education</Heading>
    <Divider />
    {props.map((i) => (
      <EducationView education={i} />
    ))}
  </VStack>
);
