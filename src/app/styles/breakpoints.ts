const getBelow = (v) => `@media screen and (max-width: ${v - 1}px)`;
const getAbove = (v) => `@media screen and (min-width: ${v}px)`;

const breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  widescreen: 1216,
  fullhd: 1408,
};

export const mediaQueries = {
  below: {
    mobile: getBelow(breakpoints.mobile),
  },
  above: {
    mobile: getAbove(breakpoints.mobile),
    tablet: getAbove(breakpoints.tablet),
    desktop: getAbove(breakpoints.desktop),
    widescreen: getAbove(breakpoints.widescreen),
    fullhd: getAbove(breakpoints.fullhd),
  },
};
