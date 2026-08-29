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
    checkinAlt: string;
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
