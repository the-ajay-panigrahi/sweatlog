# UI refresh

15 November 2026. Baseline: `1c73d363d8cd62f2b80f02ea48cc458a0fed966d`.

Adapted from the accompanying OpenDesignMD reference. Existing project stack, copy, data, routing, authentication and business logic are preserved. Application changes are a presentation stylesheet and its import only. No new runtime dependency. Existing dark themes and reduced-motion preferences are retained. Original reference assets/fonts/logos are not copied.

Verified: `npm run build` passed after the final stylesheet revision. Desktop/mobile Chromium checks passed for page rendering, responsive width, Day 01 availability, Day 02 locking, workout detail opening and theme switching. Business source hashes match the baseline after removing the single CSS import. No workout data or progression logic changed.

The user authorized commit/push; deployment status is tracked in Portfolio V3 context/ui-refresh-status.md.
