import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    heading: "Jost, sans-serif",
    body: "Jost, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 24,
      },
    },
    Input: {
      sizes: {
        lg: {
          field: {
            borderRadius: 24,
          },
        },
      },
    },
  },
});

export default customTheme;
