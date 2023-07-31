# Emomq - Media Queries Library

![npm version](https://img.shields.io/npm/v/emomq-styles)
![license](https://img.shields.io/npm/l/emomq-styles)
![GitHub stars](https://img.shields.io/github/stars/setohe0909/emomq?style=social)

> A powerful and easy-to-use CSS media queries library for responsive web design.

## Installation

```bash
npm i emomq-styles
``````

## Usage

```js
import { css } from "@emotion/react";
import { mq, rd } from "emomq-styles";

const responsiveStyles = css`
  font-size: 16px;
  line-height: 1.5;

  ${mq.sm`
    font-size: 18px;
  `}

  ${rd.md`
    font-size: 14px;
  `}
`;
```
The mq and rd functions are used to generate media queries based on the provided breakpoints. In the above example, we define a set of responsive styles using the css function from @emotion/react, and then we use the mq function to apply additional styles for screens with a minimum width of 768px and the rd function to apply styles for screens with a maximum width of 1024px.

## Features

- Provides a collection of commonly used breakpoints for different screen sizes.
- Easily generate media queries using a simple and intuitive syntax.
- Supports both min-width and max-width media queries.
- Convenient and powerful utility for handling responsive design.

## Documentation

Coming soon 🧑🏻‍💻

## License
This project is licensed under the MIT License.
