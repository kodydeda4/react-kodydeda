import {
  Avatar,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  Tag,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import Card from "../components/Card";
import Icon from "../components/Icon";
import Section from "../components/Section";
import ToggleDarkModeButton from "../components/ToggleDarkModeButton";
import resume from "../data/resume";

export default function Index() {
  return (
    <Box>
      <Container maxWidth="container.md">
        <VStack spacing={12} padding={6}>
          <Header />
          <Profile />
          <About />
          <Section title="Experience">
            {resume.experience.map((experience) => (
              <Experience key={experience.title} props={experience} />
            ))}
          </Section>
          <Section title="Projects">
            {resume.projects.map((project) => (
              <Project key={project.title} props={project} />
            ))}
          </Section>
          <Section title="Education">
            {resume.education.map((education) => (
              <Education key={education.link} props={education} />
            ))}
          </Section>
          <Footer />
        </VStack>
      </Container>
    </Box>
  );
}

const ContactLinks = () => (
  <HStack>
    <Link href={resume.urls.github}>
      <IconButton aria-label="Github" icon={<FaGithub />} />
    </Link>
    <Link href={resume.urls.linkedin}>
      <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} />
    </Link>
    <Link href={`mailto:${resume.urls.email}`}>
      <IconButton aria-label="Email" icon={<FaTelegramPlane />} />
    </Link>
  </HStack>
);

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
      ignoreFallback={true}
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
  <Section title="About">
    <Text>{resume.description}</Text>
    <Wrap>
      {resume.skills.map((skill) => (
        <WrapItem key={skill}>
          <Tag>{skill}</Tag>
        </WrapItem>
      ))}
    </Wrap>
  </Section>
);

const Experience = ({ props }) => (
  <Link href={props.link} width="full">
    <Card>
      <Icon src={props.icon} />
      <VStack align="start" spacing={0}>
        <Text fontWeight="bold" fontSize="md">
          {props.title}
        </Text>
        <Text fontSize="sm">{props.description}</Text>
        <Text
          fontSize="xs"
          color={useColorModeValue("gray.700", "whiteAlpha.700")}
        >
          {props.timeline}
        </Text>
      </VStack>
    </Card>
  </Link>
);

const Project = ({ props }) => {
  const background = useColorModeValue("gray.300", "whiteAlpha.300");
  return (
    <Link href={props.link} width="full">
      <Card>
        <Icon src={props.icon} />
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold" fontSize="md">
            {props.title}
          </Text>
          <Text fontSize="sm">{props.description}</Text>
        </VStack>
        <Spacer />
        <Wrap justify={"flex-end"}>
          {props.tags.map((tag) => (
            <WrapItem key={tag}>
              <Tag key={tag} bg={background}>
                {tag}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Card>
    </Link>
  );
};
const Education = ({ props }) => (
  <Link href={props.link} width="full">
    <Card>
      <Icon src={props.icon} />
      <VStack align="start" spacing={0}>
        <Text fontWeight="bold" fontSize="md">
          {props.degree}
        </Text>
        <Text fontSize="sm">{props.institution}</Text>
        <Text
          fontSize="xs"
          color={useColorModeValue("gray.700", "whiteAlpha.700")}
        >
          {props.timeline}
        </Text>
      </VStack>
    </Card>
  </Link>
);

const Footer = () => (
  <VStack w="full" spacing={6}>
    <Divider />
    <ContactLinks />
    <Link href={"https://github.com/kodydeda4/react-kodydeda"}>
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Kody Deda.</Text>
    </Link>
  </VStack>
);
