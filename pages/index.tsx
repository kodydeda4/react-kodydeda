import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Tag,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import ExperienceCard from "../components/experience-card";
import ProjectCard from "../components/project-card";
import EducationCard from "../components/education-card";
// import HeaderCard from "../components/header-card";

const resume = {
  name: "Kody Deda",
  title: "iOS Developer",
  avatar:
    "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  description:
    "👋 Hi, I'm a professional software engineer who specializes in developing software for the Apple ecosystem. I love UI/UX design & functional programming!",
  skills: [
    "SwiftUI",
    "Combine",
    // "Composable Architecture",
    // "MVVM-CleanArchitecture",
    "Firebase",
    "Stripe",
    // "Typescript",
    "ReactJS",
    // "Functional Programming",
  ],
  experience: [
    {
      title: "iOS Developer",
      description: "Dealerware - Austin TX",
      timeline: "July 12, 2021 - Present",
      icon: "http://incitrio.com/wp-content/uploads/2015/01/Apple_gray_logo.png",
      link: "https://www.dealerware.com",
    },
  ],
  projects: [
    {
      title: "SwiftUI-FireTodos",
      description:
        "SwiftUI app that connects to Firebase authentication and Cloud Firestore. Features Apple, Email, and Anonymous sign-in.",
      tags: ["SwiftUI"],
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556054.png",
      link: "https://github.com/kodydeda4/SwiftUI-Firetodos",
    },
    {
      title: "React-FireTodos",
      description: "React-based counterpart with Stripe integration",
      tags: ["ReactJS"],
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556061.png",
      link: "https://github.com/kodydeda4/react-firetodos",
    },
    {
      title: "Sapphire",
      description:
        "SwiftUI app that allows you to customize your app-icons and make them look more like iOS.",
      tags: ["SwiftUI"],
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556077.png",
      link: "https://github.com/kodydeda4/SwiftUI-Sapphire",
    },
    {
      title: "Emerald",
      description:
        "SwiftUI app that allows you to set keyboard shortcuts for things like focusing, resizing, and rebalancing your windows.",
      tags: ["SwiftUI"],
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556077.png",
      link: "https://github.com/kodydeda4/SwiftUI-Emerald",
    },
    {
      title: "GuitarTuner",
      description: "Description",
      tags: ["SwiftUI"],
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556077.png",
      link: "https://github.com/kodydeda4/SwiftUI-GuitarTuner",
    },
    {
      title: "MusicToy",
      description: "Description",
      tags: ["SwiftUI"],
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556077.png",
      link: "https://github.com/kodydeda4/SwiftUI-MusicToy",
    },
    {
      title: "Cookable",
      description: "Description",
      tags: ["SwiftUI"],
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556077.png",
      link: "https://github.com/kodydeda4/SwiftUI-Cookable",
    },
    {
      title: "MyersBriggs",
      description: "Description",
      tags: ["SwiftUI"],
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556077.png",
      link: "https://github.com/kodydeda4/SwiftUI-MyersBriggs",
    },
    {
      title: "DemonQuest",
      description: "Description",
      tags: ["Unity", "C#"],
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556077.png",
      link: "https://github.com/kodydeda4/Unity3D-DemonQuestRPG",
    },
    {
      title: "OpenCV",
      description: "Description",
      tags: ["OpenCV", "Python"],
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556077.png",
      link: "https://github.com/kodydeda4/Python-OpenCV",
    },
  ],
  education: [
    {
      degree: "Bachelor's of Computer Science",
      institution: "University of North Carolina Wilmnington",
      timeline: "Spring 2019 - Fall 2021",
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556054.png",
      link: "https://uncw.edu",
    },
    {
      degree: "Associate's of Science",
      institution: "Cape Fear Community College",
      timeline: "Spring 2016 - Fall 2018",
      icon: "https://cdn-icons-png.flaticon.com/512/6556/6556248.png",
      link: "https://cfcc.edu",
    },
  ],
};

export default function Index() {
  return (
    <Container width="full" padding={0}>
      <ResumeView />
    </Container>
  );
}

const ResumeView = () => {
  const { toggleColorMode } = useColorMode();

  return (
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
          avatar: resume.avatar,
        }}
      />

      <AboutView
        props={{
          description: resume.description,
          skills: resume.skills,
        }}
      />

      <Button colorScheme={"blue"} size="lg" width="full" onClick={() => toggleColorMode()}>
        Toggle Dark Mode
      </Button>
      <ExperienceView props={{ experience: resume.experience }} />
      <ProjectsView props={{ projects: resume.projects }} />
      <EducationView props={{ education: resume.education }} />
    </VStack>
  );
};

const HeaderView = ({ props: { name, title, avatar } }) => {
  return (
    <Box w={"full"} textAlign={"center"}>
      <Avatar
        size={"3xl"}
        src={avatar}
        alt={"Avatar Alt"}
        mb={4}
        pos={"relative"}
        borderWidth="1px"
        borderColor={useColorModeValue("neutral.100", "neutralD.100")}
      />
      <Heading fontSize={"3xl"}>{name}</Heading>
      <Text
        width={"full"}
        textAlign={"center"}
        fontWeight={600}
        color={"gray.500"}
      >
        {title}
      </Text>
    </Box>
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

const ExperienceView = ({ props: { experience } }) => {
  return (
    <VStack width="full" spacing={3} alignItems={"flex-start"}>
      <Heading size="lg">Experience</Heading>
      <Divider />
      {experience.map((i) => (
        <ExperienceCard
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
};

const ProjectsView = ({ props: { projects } }) => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack width="full" spacing={3} alignItems={"flex-start"}>
      <Heading size="lg">Projects</Heading>
      <Divider />
      {projects.map((i) => (
        <ProjectCard
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
};

const EducationView = ({ props: { education } }) => {
  return (
    <VStack width="full" spacing={3} alignItems={"flex-start"}>
      <Heading size="lg">Education</Heading>
      <Divider />
      {education.map((i) => (
        <EducationCard
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
};
