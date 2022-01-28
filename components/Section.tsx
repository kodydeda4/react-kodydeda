import {
  Divider,
  Heading, VStack
} from "@chakra-ui/react";

export default function Section({ title, children }) {
  return (
    <VStack width="full" spacing={4} alignItems={"start"}>
      <Heading size="lg">{title}</Heading>
      <Divider />
      {children}
    </VStack>
  );
}
