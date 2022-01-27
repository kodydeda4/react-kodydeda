import {
  Avatar,
  Box, Container,
  Divider,
  Heading,
  HStack,
  Tag,
  Text, useColorModeValue,
  VStack
} from "@chakra-ui/react";
import EducationView from "../components/EducationView";
import ExperienceView from "../components/ExperienceView";
import Footer from "../components/FooterView";
import Navbar from "../components/NavbarView";
import ProjectView from "../components/ProjectView";
import useResume from "../hooks/useResume";

export default function Index() {
  const resume = useResume();

  return (
    <Box bg={useColorModeValue("white", "black")}>
      <Container maxWidth="750" padding={0}>
        <Navbar />
        <VStack
          width="full"
          height="full"
          padding={10}
          spacing={12}
          alignItems={"flex-start"}
        >
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
          <ExperienceListView props={{ experience: resume.experience }} />
          <ProjectListView props={{ projects: resume.projects }} />
          <EducationListView props={{ education: resume.education }} />
        </VStack>
        <Footer />
      </Container>
    </Box>
  );
}

const HeaderView = ({ props: { name, title, avatar } }) => (
  <Box w={"full"} textAlign={"center"}>
    <Avatar
      size={"2xl"}
      src={avatar}
      alt={"Avatar Alt"}
      mb={4}
      pos={"relative"}
      borderWidth="1px"
      borderColor={useColorModeValue("neutral.100", "neutralD.100")}
    />
    <Heading fontSize={"3xl"}>{name}</Heading>
    <Text fontSize={"lg"} color={"gray.500"} fontWeight={600}>
      {title}
    </Text>
  </Box>
);

const AboutView = ({ props: { description, skills } }) => (
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

const ExperienceListView = ({ props: { experience } }) => (
  <VStack width="full" spacing={3} alignItems={"flex-start"}>
    <Heading size="lg">Experience</Heading>
    <Divider />
    {experience.map((i) => (
      <ExperienceView
        props={{
          title: i.title,
          description: i.description,
          timeline: i.timeline,
          icon: i.icon,
          link: i.link,
        }}
      />
    ))}
  </VStack>
);

const ProjectListView = ({ props: { projects } }) => (
  <VStack width="full" spacing={3} alignItems={"flex-start"}>
    <Heading size="lg">Projects</Heading>
    <Divider />
    {projects.map((i) => (
      <ProjectView
        props={{
          title: i.title,
          description: i.description,
          tags: i.tags,
          icon: i.icon,
          link: i.link,
        }}
      />
    ))}
  </VStack>
);

const EducationListView = ({ props: { education } }) => (
  <VStack width="full" spacing={3} alignItems={"flex-start"}>
    <Heading size="lg">Education</Heading>
    <Divider />
    {education.map((i) => (
      <EducationView
        props={{
          degree: i.degree,
          institution: i.institution,
          timeline: i.timeline,
          icon: i.icon,
          link: i.link,
        }}
      />
    ))}
  </VStack>
);