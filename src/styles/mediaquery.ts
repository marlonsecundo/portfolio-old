// Para mais informações veja o link
// https://github.com/styled-components/styled-components/blob/master/packages/styled-components/docs/tips-and-tricks.md#media-templates

/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
.shadow box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
.shadow-md box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
.shadow-lg box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
.shadow-xl box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
.shadow-2xl box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
.shadow-inner box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
.shadow-outline box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
 */

const customMediaQuery = (maxWidth: number) => `@media (min-width: ${maxWidth}px)`;

export const devicesWidth = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1600,
  desktopL: 2560,
};

export default {
  custom: customMediaQuery,
  mobileS: customMediaQuery(devicesWidth.mobileS),
  mobileM: customMediaQuery(devicesWidth.mobileM),
  mobileL: customMediaQuery(devicesWidth.mobileL),
  tablet: customMediaQuery(devicesWidth.tablet),
  laptop: customMediaQuery(devicesWidth.laptop),
  laptopL: customMediaQuery(devicesWidth.laptopL),
  desktop: customMediaQuery(devicesWidth.desktop),
  desktopL: customMediaQuery(devicesWidth.desktopL),
};
