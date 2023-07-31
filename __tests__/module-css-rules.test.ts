import { expect, test } from "@jest/globals";
import { css } from "@emotion/react";
import { mq, rd } from "../src/modules/module-css-rules";

test("mq and rd should generate valid media queries", () => {
  const cls = css`
    color: red;
  `;

  // Test mq (min-width)
  expect(typeof mq.sm).toBe("function");
  const mqResult = (mq.sm as any)(cls).styles;
  expect(mqResult.toString()).toContain("@media (min-width: 768px)");
  expect(mqResult.toString()).toContain("color: red;");

  // Test rd (max-width)
  expect(typeof rd.md).toBe("function");
  const rdResult = (rd.md as any)(cls).styles;
  expect(rdResult.toString()).toContain("@media (max-width: 1024px)");
  expect(rdResult.toString()).toContain("color: red;");
});
