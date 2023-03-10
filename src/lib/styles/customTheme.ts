import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    heading: "Outfit, sans-serif",
    body: "Outfit, sans-serif",
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
  config: {
    disableTransitionOnChange: false,
  },
});

export default customTheme;
