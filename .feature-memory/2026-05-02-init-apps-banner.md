---
pr: 1
date: 2026-05-02
build: 1.0.0
title: Initial AppsBannerCard and ProgressBar components
---

## Files changed
- components/AppsBannerCard.tsx (new)
- components/ProgressBar.tsx (new)

## Components touched
- AppsBannerCard — banner card with title, subtitle, and a "Try" CTA button
- ProgressBar — horizontal progress bar with label

## Visual elements
- AppsBannerCard: dark navy background (#1a1a2e), white title, grey subtitle, red "Try" button
- ProgressBar: grey track, red fill, 8px height

## Known bugs (intentional for demo)
- Button color is red (#ff0000) — should be white (#ffffff) with dark text
- ProgressBar fill color is red (#ff0000) — should be green (#22c55e)
- AppsBannerCard padding is too large (24px) — should be 16px

## Likely-affected screens
- Apps tab (any screen importing AppsBannerCard)
- Any screen showing progress (imports ProgressBar)
