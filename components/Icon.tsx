import { Image } from "@chakra-ui/react";

export default function Icon({ src }) {
  return (
    <Image
      src={src}
      height={12}
      width={12}
      layout="fixed"
      rounded="xl"
      shadow={"md"}
    />
  );
}
