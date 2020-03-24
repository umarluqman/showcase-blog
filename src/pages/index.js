/** @jsx jsx */
import { Flex, Text, Button, theme } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import { withTheme } from "emotion-theming";
import Link from "next/link";

const Index = () => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      w="100%"
      align="center"
      justify="center"
      bg="rgb(37, 47, 63)"
      p={4}
    >
      <Text fontSize="xl" fontWeight={600} color="white" pb={2}>
        {" "}
        Hi, Welcome to Showcase!
      </Text>

      <Text color="white" textAlign="center">
        Collection of UI made up with React & 👩🏻‍🎤 Emotion
      </Text>
      <Flex w="100%" maxWidth="50%" justify="center" mt={8} flexWrap="wrap">
        <Link href="/dashboard">
          <Button variant="ghost" variantColor="pink">
            Dashboard
          </Button>
        </Link>
        <Link href="/landing-page">
          <Button variant="ghost" variantColor="pink">
            Landing Page
          </Button>
        </Link>
        <Link href="/complex-form">
          <Button variant="ghost" variantColor="pink">
            Complex Form
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default withTheme(Index);
