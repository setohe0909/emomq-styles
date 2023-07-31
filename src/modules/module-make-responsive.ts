import { css } from "@emotion/react";
import { omit } from "lodash";
import { mq } from "./module-css-rules";

// Define the type for each item in the responsiveBlock array
interface ResponsiveBlock {
  property: string; // The CSS property to be responsive
  min: number; // The minimum value for the property
  max: number; // The maximum value for the property
  unit?: string; // Optional CSS unit (e.g., px, em) for the property value
}

// The main function that generates responsive CSS rules based on breakpoints and responsiveBlock
export const makeResponsive = (
  responsiveBlock: ResponsiveBlock[]
): ReturnType<typeof css> => {
  // Omit the xsm breakpoint from the mq object (media query rules)
  const reducedMq = omit(mq, "xsm");

  // Calculate deltas for each item in the responsiveBlock
  // Delta represents the difference between max and min divided by 3
  const deltas = responsiveBlock.map((item) => ({
    ...item,
    delta: (item.max - item.min) / 3,
    first: `${item.property}: ${item.min}${item.unit || ""};`,
  }));

  // Construct the responsive CSS rules
  return css`
    ${Object.keys(reducedMq).reduce(
      (acc, breakpoint, idx) => css`
        ${acc} ${reducedMq[breakpoint](css`
          ${deltas.reduce(
            (group, delta) => css`
              ${group}
              ${delta.property}: ${delta.min +
              delta.delta * (idx + 1)}${delta.unit || ""};
            `,
            css``
          )};
        `)}
      `,
      css``
    )}

    ${deltas.reduce(
      (firsts, delta) => css`
        ${firsts} ${delta.first};
      `,
      css``
    )}
  `;
};
