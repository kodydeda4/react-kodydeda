import {
  Avatar,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Link,
  Spacer,
  Tag,
  Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import AppIcon from "../components/AppIcon";
import ContactLinks from "../components/ContactLinks";
import ToggleDarkModeButton from "../components/ToggleDarkModeButton";
import resume from "../data/resume";

export default function Index() {
  return (
    <Box>
    {/* <Box bg={useColorModeValue("white", "black")}> */}
      <Container maxWidth="container.md">
        <VStack spacing={12} padding={6}>
          <Header />
          <Profile />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Footer />
        </VStack>
      </Container>
    </Box>
  );
}

const Header = () => (
  <HStack w="full">
    <ToggleDarkModeButton />
    <Spacer />
    <ContactLinks />
  </HStack>
);

const Profile = () => (
  <VStack>
    <Avatar
      src={resume.avatar}
      size={"2xl"}
      borderWidth="1px"
      borderColor={useColorModeValue("neutral.100", "neutralD.100")}
      background={useColorModeValue("gray.100", "whiteAlpha.200")}
    />
    <Heading fontSize={"3xl"}>{resume.name}</Heading>
    <Text fontSize={"lg"} color={"gray.500"} fontWeight={600}>
      {resume.title}
    </Text>
  </VStack>
);

const About = () => (
  <VStack width="full" spacing={4} alignItems={"start"}>
    <Heading size="lg">About</Heading>
    <Divider />
    <Text>{resume.description}</Text>
    <HStack>
      {resume.skills.map((skill) => (
        <Tag>{skill}</Tag>
      ))}
    </HStack>
  </VStack>
);

const Experience = () => (
  <VStack width="full" spacing={4} alignItems={"start"}>
    <Heading size="lg">Experience</Heading>
    <Divider />
    {resume.experience.map((job) => (
      <Link href={job.link} width="full">
        <HStack
          padding={4}
          spacing={4}
          rounded="lg"
          borderWidth="1px"
          background={useColorModeValue("gray.100", "whiteAlpha.100")}
        >
          <AppIcon src={job.icon} />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold" fontSize="md">
              {job.title}
            </Text>
            <Text fontSize="sm">{job.description}</Text>
            <Text
              fontSize="xs"
              color={useColorModeValue("gray.700", "whiteAlpha.700")}
            >
              {job.timeline}
            </Text>
          </VStack>
        </HStack>
      </Link>
    ))}
  </VStack>
);

const Projects = () => (
  <VStack width="full" spacing={4} alignItems={"start"}>
    <Heading size="lg">Projects</Heading>
    <Divider />
    {resume.projects.map((project) => (
      <Link width="full" href={project.link} unstyled>
        <HStack
          padding={4}
          spacing={4}
          rounded="lg"
          borderWidth="1px"
          background={useColorModeValue("gray.100", "whiteAlpha.100")}
        >
          <AppIcon src={project.icon} />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold" fontSize="md">
              {project.title}
            </Text>
            <Text fontSize="sm">{project.description}</Text>
          </VStack>
          <Spacer />
          <HStack>
            {project.tags.map((tag) => (
              <Tag bg={useColorModeValue("gray.300", "whiteAlpha.300")}>
                {tag}
              </Tag>
            ))}
          </HStack>
        </HStack>
      </Link>
    ))}
  </VStack>
);

const Education = () => (
  <VStack width="full" spacing={4} alignItems={"start"}>
    <Heading size="lg">Education</Heading>
    <Divider />
    {resume.education.map((education) => (
      <Link href={education.link} width="full">
        <HStack
          padding={4}
          spacing={4}
          rounded="lg"
          borderWidth="1px"
          background={useColorModeValue("gray.100", "whiteAlpha.100")}
        >
          <AppIcon src={education.icon} />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold" fontSize="md">
              {education.degree}
            </Text>
            <Text fontSize="sm">{education.institution}</Text>
            <Text
              fontSize="xs"
              color={useColorModeValue("gray.700", "whiteAlpha.700")}
            >
              {education.timeline}
            </Text>
          </VStack>
        </HStack>
      </Link>
    ))}
  </VStack>
);

const Footer = () => (
  <VStack w="full" spacing={6}>
    <Divider />
    <ContactLinks />
    <Text fontSize="sm">&copy; {new Date().getFullYear()} Kody Deda.</Text>
  </VStack>
);
