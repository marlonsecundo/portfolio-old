// Para mais informações veja o link
// https://github.com/styled-components/styled-components/blob/master/packages/styled-components/docs/tips-and-tricks.md#media-templates

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { css } from 'styled-components';

/**
.shadow box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
.shadow-md box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
.shadow-lg box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
.shadow-xl box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
.shadow-2xl box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
.shadow-inner box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
.shadow-outline box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
 */

export const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

// iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
