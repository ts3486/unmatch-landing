export const APP_STORE_URL =
  "https://apps.apple.com/jp/app/unmatch-pause-from-dating/id6759603257";

export const APP_STORE_ID = "6759603257";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.get-unmatch.com";

// Defaults to noindex until explicitly flipped on (real domain + final copy).
// Set NEXT_PUBLIC_ALLOW_INDEXING=true in Vercel when ready to launch.
export const IS_INDEXABLE = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

console.log("[env-check] NEXT_PUBLIC_SITE_URL raw:", process.env.NEXT_PUBLIC_SITE_URL);
console.log("[env-check] SITE_URL resolved:", SITE_URL);
console.log("[env-check] NEXT_PUBLIC_ALLOW_INDEXING raw:", process.env.NEXT_PUBLIC_ALLOW_INDEXING);
console.log("[env-check] IS_INDEXABLE resolved:", IS_INDEXABLE);
