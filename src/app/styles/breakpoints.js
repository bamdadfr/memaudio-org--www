const getBelow = (v) => `@media screen and (max-width: ${v - 1}px)`;
const getAbove = (v) => `@media screen and (min-width: ${v}px)`;

export const Breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  widescreen: 1216,
  fullhd: 1408,
};

export const mediaQueries = {
  below: {
    mobile: getBelow(Breakpoints.mobile),
  },
  above: {
    mobile: getAbove(Breakpoints.mobile),
    tablet: getAbove(Breakpoints.tablet),
    desktop: getAbove(Breakpoints.desktop),
    widescreen: getAbove(Breakpoints.widescreen),
    fullhd: getAbove(Breakpoints.fullhd),
  },
};
