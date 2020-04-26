/** @jsx jsx */
import { Flex, Text, Button, Box, theme } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import { Square, Triangle, Circle } from "react-feather";
import dynamic from "next/dynamic";
import { useState } from "react";

const Dashboard = dynamic(() => import("../modules/Dashboard"));
const LandingPage = dynamic(() => import("../modules/LandingPage"));
const ComplexForm = dynamic(() => import("../modules/ComplexForm"));

const Index = () => {
  const [page, setPage] = useState("");

  const onNav = (page) => () => {
    setPage(page);
  };
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      w="100%"
      align="center"
      bg="rgb(37, 47, 63)"
      p={4}
      pt={10}
    >
      <Box maxWidth={700} mb={12}>
        <Box w="full" px={4}>
          <Text fontSize="3xl" fontWeight={600} color="white" pb={2}>
            {" "}
            Showcase
          </Text>

          <Text color="white" lineHeight={1.8}>
            Collection of user interfaces made up with ReactJS & 👩🏻‍🎤 Emotion (CSS
            in JS). Most of design elements are inspired by the{" "}
            <Button
              variant="link"
              href="https://refactoringui.com/book/"
              isExternal
              rightIcon="external-link"
              verticalAlign="unset"
              color="#16bdca"
            >
              Refactoring UI book
            </Button>
          </Text>
          <Box h={4}></Box>
          <Text color="white">
            All source codes are available on{" "}
            <Button
              variant="link"
              href="https://refactoringui.com/book/"
              isExternal
              verticalAlign="unset"
              color={theme.colors.gray[200]}
              rightIcon="external-link"
            >
              GitHub
            </Button>
          </Text>
        </Box>
        <Flex>
          <Flex
            maxWidth={500}
            justify={{ base: "space-betweeen", sm: "space-around" }}
            mt={8}
            flexWrap="wrap"
            css={{
              svg: {
                color: "#16bdca",
              },
            }}
          >
            <Button
              variant="ghost"
              color={theme.colors.gray[200]}
              _hover={{
                backgroundColor: theme.colors.gray[600],
              }}
              fontWeight={400}
              leftIcon={Square}
              onClick={onNav("dashboard")}
              css={{
                svg: {
                  fill: page === "dashboard" && "#16bdca",
                },
              }}
              // w={{ base: "100%", sm: "unset" }}
            >
              Dashboard
            </Button>

            <Button
              variant="ghost"
              color={theme.colors.gray[200]}
              _hover={{
                backgroundColor: theme.colors.gray[600],
              }}
              fontWeight={400}
              leftIcon={Circle}
              onClick={onNav("landingPage")}
              css={{
                svg: {
                  fill: page === "landingPage" && "#16bdca",
                },
              }}
              // w={{ base: "100%", sm: "unset" }}
            >
              Landing Page
            </Button>

            <Button
              variant="ghost"
              color={theme.colors.gray[200]}
              _hover={{
                backgroundColor: theme.colors.gray[600],
              }}
              fontWeight={400}
              leftIcon={Triangle}
              onClick={onNav("complexForm")}
              css={{
                svg: {
                  fill: page === "complexForm" && "#16bdca",
                },
              }}
              // w={{ base: "100%", sm: "unset" }}
            >
              Complex Form
            </Button>
          </Flex>
        </Flex>
      </Box>
      {page === "complexForm" ? (
        <ComplexForm></ComplexForm>
      ) : page === "landingPage" ? (
        <LandingPage></LandingPage>
      ) : page === "dashboard" ? (
        <Dashboard></Dashboard>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default Index;
