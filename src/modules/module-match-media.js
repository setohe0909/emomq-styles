"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchMedias = void 0;
const module_breakpoints_1 = require("./module-breakpoints");
// Function to generate and return a collection of media query lists and their corresponding breakpoint keys
const getMatchMedias = () => {
    // Create an object to store media query strings, where the keys are breakpoint keys and the values are the corresponding media query strings
    const matchMedias = {
        xs: `(max-width: ${parseInt(module_breakpoints_1.breakpoints.sm, 10) - 1}px)`,
        sm: `(max-width: ${parseInt(module_breakpoints_1.breakpoints.md, 10) - 1}px) and (min-width: ${parseInt(module_breakpoints_1.breakpoints.sm, 10)}px)`,
        md: `(max-width: ${parseInt(module_breakpoints_1.breakpoints.lg, 10) - 1}px) and (min-width: ${parseInt(module_breakpoints_1.breakpoints.md, 10)}px)`,
        lg: `(min-width: ${parseInt(module_breakpoints_1.breakpoints.lg, 10)}px)`,
    };
    // Convert the matchMedias object into an array of key-value pairs (entries), then map each entry to a new structure
    // where the key is the media query string, and the value is an array containing the MediaQueryList and the corresponding breakpoint key
    return Object.fromEntries(Object.entries(matchMedias).map(([key, value]) => [
        value,
        [window.matchMedia(value), key], // Store a MediaQueryList object and its corresponding breakpoint key in an array
    ]));
};
exports.getMatchMedias = getMatchMedias;
