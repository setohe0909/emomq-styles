"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeResponsive = void 0;
const react_1 = require("@emotion/react");
const lodash_1 = require("lodash");
const module_css_rules_1 = require("./module-css-rules");
// The main function that generates responsive CSS rules based on breakpoints and responsiveBlock
const makeResponsive = (responsiveBlock) => {
    // Omit the xsm breakpoint from the mq object (media query rules)
    const reducedMq = (0, lodash_1.omit)(module_css_rules_1.mq, "xsm");
    // Calculate deltas for each item in the responsiveBlock
    // Delta represents the difference between max and min divided by 3
    const deltas = responsiveBlock.map((item) => (Object.assign(Object.assign({}, item), { delta: (item.max - item.min) / 3, first: `${item.property}: ${item.min}${item.unit || ""};` })));
    // Construct the responsive CSS rules
    return (0, react_1.css) `
    ${Object.keys(reducedMq).reduce((acc, breakpoint, idx) => (0, react_1.css) `
        ${acc} ${reducedMq[breakpoint]((0, react_1.css) `
          ${deltas.reduce((group, delta) => (0, react_1.css) `
              ${group}
              ${delta.property}: ${delta.min +
        delta.delta * (idx + 1)}${delta.unit || ""};
            `, (0, react_1.css) ``)};
        `)}
      `, (0, react_1.css) ``)}

    ${deltas.reduce((firsts, delta) => (0, react_1.css) `
        ${firsts} ${delta.first};
      `, (0, react_1.css) ``)}
  `;
};
exports.makeResponsive = makeResponsive;
