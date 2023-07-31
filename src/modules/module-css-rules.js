"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rd = exports.mq = void 0;
const react_1 = require("@emotion/react");
const module_breakpoints_1 = require("./module-breakpoints");
// Create the mq object for "responsive up" styles
exports.mq = Object.fromEntries(
// Iterate over the entries of the breakpoints object
Object.entries(module_breakpoints_1.breakpoints).map(([label, value]) => {
    // Determine the prefix based on the type of breakpoint value (string or numeric)
    const prefix = typeof value === "string" ? "" : "min-width:";
    // Determine the suffix based on the type of breakpoint value (string or numeric)
    const suffix = typeof value === "string" ? "" : "px";
    return [
        // Use the label as the key in the object
        label,
        // Define the media query CSS rule function
        (cls) => (0, react_1.css) `
        @media (${prefix + value + suffix}) {
          ${cls};
        }
      `,
    ];
}));
// Create the rd object for "responsive down" styles
exports.rd = Object.fromEntries(
// Iterate over the entries of the breakpoints object
Object.entries(module_breakpoints_1.breakpoints).map(([label, value]) => {
    // Determine the prefix based on the type of breakpoint value (string or numeric)
    const prefix = typeof value === "string" ? "" : "max-width:";
    // Determine the suffix based on the type of breakpoint value (string or numeric)
    const suffix = typeof value === "string" ? "" : "px";
    return [
        // Use the label as the key in the object
        label,
        // Define the media query CSS rule function
        (cls) => (0, react_1.css) `
        @media (${prefix + value + suffix}) {
          ${cls};
        }
      `,
    ];
}));
