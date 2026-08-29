export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  appStore: {
    downloadOn: string;
    appStore: string;
  };
  hero: {
    headline: string;
    subhead: string;
    screenshotSrc: string;
    screenshotAlt: string;
  };
  problem: {
    heading: string;
    lede: string;
    bullets: string[];
  };
  affinity: {
    heading: string;
    body: string[];
  };
  solution: {
    heading: string;
    stepLabel: string;
    steps: { title: string; detail: string }[];
    features: { title: string; detail: string }[];
    checkinSrc: string;
    checkinAlt: string;
    progressSrc: string;
    progressAlt: string;
  };
  offer: {
    heading: string;
    bullets: string[];
  };
  narrowing: {
    forHeading: string;
    forBody: string;
    notForHeading: string;
    notForBody: string;
  };
  finalCta: {
    heading: string;
    sub: string;
  };
  logoAlt: string;
};
