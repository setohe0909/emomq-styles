import { breakpoints } from "./module-breakpoints";

// Function to generate and return a collection of media query lists and their corresponding breakpoint keys
export const getMatchMedias = (): Record<string, [MediaQueryList, string]> => {
  // Create an object to store media query strings, where the keys are breakpoint keys and the values are the corresponding media query strings
  const matchMedias: Record<string, string> = {
    xs: `(max-width: ${parseInt(breakpoints.sm as string, 10) - 1}px)`,
    sm: `(max-width: ${
      parseInt(breakpoints.md as string, 10) - 1
    }px) and (min-width: ${parseInt(breakpoints.sm as string, 10)}px)`,
    md: `(max-width: ${
      parseInt(breakpoints.lg as string, 10) - 1
    }px) and (min-width: ${parseInt(breakpoints.md as string, 10)}px)`,
    lg: `(min-width: ${parseInt(breakpoints.lg as string, 10)}px)`,
  };

  // Convert the matchMedias object into an array of key-value pairs (entries), then map each entry to a new structure
  // where the key is the media query string, and the value is an array containing the MediaQueryList and the corresponding breakpoint key
  return Object.fromEntries(
    Object.entries(matchMedias).map(([key, value]) => [
      value,
      [window.matchMedia(value), key], // Store a MediaQueryList object and its corresponding breakpoint key in an array
    ])
  );
};
