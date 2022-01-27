import {
  HStack,
  Link,
  Image,
  Spacer,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function ProjectView({
  project
  //props: { title, description, tags, icon, link },
}) {
  return (
    <Link width="full" href={project.link} unstyled>
      <HStack
        p={4}
        rounded="lg"
        bg={useColorModeValue("gray.100", "whiteAlpha.100")}
        borderWidth="1px"
        spacing={4}
      >
        <Image src={project.icon} height={12} width={12} layout="fixed" rounded="md" />
        <DetailView title={project.title} description={project.description} />
        <Spacer />
        <TagsView tags={project.tags} />
      </HStack>
    </Link>
  );
}

const DetailView = ({ title, description }) => (
  <VStack align="start" spacing={0}>
    <Text fontWeight="bold" fontSize="md">{title}</Text>
    <Text fontSize="sm">{description}</Text>
  </VStack>
);

const TagsView = ({ tags }) => (
  <HStack>
    {tags.map((i) => (
      <Tag>{i}</Tag>
    ))}
  </HStack>
);
