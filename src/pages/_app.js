import React from "react";
import NextApp from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import theme from "../theme";

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  );
};

class App extends NextApp {
  render() {
    const { Component } = this.props;
    return (
      <Page>
        <Component />
      </Page>
    );
  }
}

export default App;
