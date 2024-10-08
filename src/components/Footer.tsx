"use client";

import {
  Box,
  chakra,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";
import WordRotate from "./ui/word-rotate";

const Footer = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      minHeight="9.7vh" // Ensure the footer reaches the bottom
      display="flex" // Use flexbox to align items
      flexDirection="column" // Stack children vertically
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        flex="1" // Allow the container to grow and fill space
      >
        <HStack>
          <Text>Made for </Text>
          <WordRotate
            className=" font-bold text-dark dark:text-white"
            words={[
              "students.",
              "Top performers.",
              "Achievers.",
              "Me.",
              "You.",
            ]}
          />
        </HStack>
        <Stack direction={"row"} spacing={6}>
          <Footer label={"WhatsApp"} href={"https://wa.me/+255714530292"}>
            <FaWhatsapp />
          </Footer>
          <Footer label={"Github"} href={"https://github.com/Aden-Ahadi"}>
            <FaGithub />
          </Footer>
          <Footer
            label={"Instagram"}
            href={"https://www.instagram.com/iam_aden/"}
          >
            <FaInstagram />
          </Footer>
        </Stack>
      </Container>
    </Box>
  );
}
