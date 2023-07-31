import { expect, test } from "@jest/globals";

import { css } from "@emotion/react";
import { makeResponsive } from "../src/modules/module-make-responsive";

test("makeResponsive should generate valid responsive CSS rules", () => {
  const responsiveBlock = [
    { property: "font-size", min: 14, max: 20, unit: "px" },
    { property: "padding", min: 10, max: 20, unit: "px" },
  ];

  const responsiveStyles = makeResponsive(responsiveBlock);

  // Test that the responsiveStyles is a valid CSS object
  expect(typeof responsiveStyles).toBe("object");
  expect(responsiveStyles.styles).toBeDefined();
  expect(typeof responsiveStyles.styles).toBe("string");
});
