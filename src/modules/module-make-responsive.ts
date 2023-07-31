import { css } from '@emotion/react';
import { omit } from 'lodash';
import { mq } from './module-css-rules';

interface ResponsiveBlock {
  property: string;
  min: number;
  max: number;
  unit?: string;
}

export const makeResponsive = (
  responsiveBlock: ResponsiveBlock[]
): ReturnType<typeof css> => {
  const reducedMq = omit(mq, 'xsm');
  const deltas = responsiveBlock.map((item) => ({
    ...item,
    delta: (item.max - item.min) / 3,
    first: `${item.property}: ${item.min}${item.unit || ''};`,
  }));

  const responsiveStyles: string[] = [];
  let idx = 0;

  Object.keys(reducedMq).forEach((breakpoint) => {
    const breakpointStyles = deltas.map(
      (delta) =>
        `${delta.property}: ${delta.min + delta.delta * (idx + 1)}${
          delta.unit || ''
        };`
    );
    responsiveStyles.push(`
      @media ${reducedMq[breakpoint]} {
        ${breakpointStyles.join('')}
      }
    `);
    idx += 1;
  });

  const firstStyles = deltas.map((delta) => delta.first);

  return css`
    ${responsiveStyles.join('')}
    ${firstStyles.join('')}
  `;
};
