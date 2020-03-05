import React from "react";
import { Flex, useColorMode } from "@chakra-ui/core";

export const Container = props => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "white", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      minHeight="100vh"
      {...props}
    />
  );
};
