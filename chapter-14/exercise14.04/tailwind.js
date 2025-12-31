import tailwindcssSpinner from "tailwindcss-spinner";

export const theme = {
  extend: {},
  spinner: (theme) => ({
    default: {
      color: theme("colors.gray.400"),
      size: theme("spacing.4"),
      border: theme("borderWidth.2"),
      speed: theme("transitionDuration.500"),
    },
  }),
};
export const variants = {
  spinner: ["responsive"],
};
export const plugins = [tailwindcssSpinner()];
