"use client";

import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  
  useColorModeValue,
} from "@chakra-ui/react";


import { Visualize } from "./visualize";





export default function Features() {
  return (
    <Container maxW={"5xl"} py={16}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading>From Exam Stress to Success</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Born from late-night study sessions and pre-exam panic, our platform
            is the solution we wished we had.
            <br />
            <br />
            As DIT students, we've been there - frantically searching for past
            papers, hoping to glimpse what our exams might hold. We knew there
            had to be a better way. So we created one.
            <br />
            <br />
            This isn't just another study tool. It's a lifeline{" "}
            <b> created by DIT students, for DIT students</b>. We understand
            your challenges because they're our challenges too.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Visualize />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
