import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };
const theme = {
  ...chakraTheme,
  fonts
};

export default theme;
