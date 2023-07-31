import { css } from "@emotion/react";
import { breakpoints } from "./module-breakpoints";

// Define a type for the CSSRule function
type CSSRule = (cls: string) => ReturnType<typeof css>;

// Create the mq object for "responsive up" styles
export const mq: Record<string, CSSRule> = Object.fromEntries(
  // Iterate over the entries of the breakpoints object
  Object.entries(breakpoints).map(([label, value]) => {
    // Determine the prefix based on the type of breakpoint value (string or numeric)
    const prefix = typeof value === "string" ? "" : "min-width:";
    // Determine the suffix based on the type of breakpoint value (string or numeric)
    const suffix = typeof value === "string" ? "" : "px";
    return [
      // Use the label as the key in the object
      label,
      // Define the media query CSS rule function
      (cls: string) => css`
        @media (${prefix + value + suffix}) {
          ${cls};
        }
      `,
    ];
  })
);

// Create the rd object for "responsive down" styles
export const rd: Record<string, CSSRule> = Object.fromEntries(
  // Iterate over the entries of the breakpoints object
  Object.entries(breakpoints).map(([label, value]) => {
    // Determine the prefix based on the type of breakpoint value (string or numeric)
    const prefix = typeof value === "string" ? "" : "max-width:";
    // Determine the suffix based on the type of breakpoint value (string or numeric)
    const suffix = typeof value === "string" ? "" : "px";
    return [
      // Use the label as the key in the object
      label,
      // Define the media query CSS rule function
      (cls: string) => css`
        @media (${prefix + value + suffix}) {
          ${cls};
        }
      `,
    ];
  })
);
