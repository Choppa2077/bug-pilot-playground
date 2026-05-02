# CODEBASE.md — bug-pilot-playground

This file is a navigation guide for AI agents. It maps features and visual areas to the files responsible for them. Read this when feature memory manifests don't explain the bug. Use it to find targeted files — do not scan beyond what is listed here unless tracing a specific import.

---

## Architecture

```
app/              Next.js App Router pages
components/       Shared UI components (reusable across pages)
.feature-memory/  Auto-generated manifests per merged PR
```

---

## Feature → File Map

### AppsBannerCard (banner with CTA button)
- **Primary:** `components/AppsBannerCard.tsx`
- **Used in:** `app/page.tsx`
- **Visual elements:** dark navy background, white title, grey subtitle, "Try" CTA button
- **Known style props:** backgroundColor, borderRadius, padding, button color

### ProgressBar (horizontal progress indicator)
- **Primary:** `components/ProgressBar.tsx`
- **Used in:** `app/page.tsx`
- **Visual elements:** grey track, colored fill, optional label above
- **Known style props:** backgroundColor (fill), height, borderRadius

### App layout / global styles
- **Primary:** `app/layout.tsx`
- **Affects:** all pages — body background, font, global reset

### Home page (main screen)
- **Primary:** `app/page.tsx`
- **Imports:** AppsBannerCard, ProgressBar
- **Affects:** overall layout, component order, spacing between sections

---

## Common bug patterns in this repo

| Symptom | Where to look first |
|---|---|
| Wrong button color | `components/AppsBannerCard.tsx` → button `backgroundColor` |
| Wrong progress fill color | `components/ProgressBar.tsx` → fill div `backgroundColor` |
| Too much spacing / padding | `components/AppsBannerCard.tsx` → container `padding` |
| Page background wrong color | `app/layout.tsx` → body style |
| Component missing on screen | `app/page.tsx` → check if component is imported and rendered |

---

## Intentional bugs (for demo — these are the targets)
- `AppsBannerCard` button is red `#ff0000` → should be white `#ffffff` with dark text
- `ProgressBar` fill is red `#ff0000` → should be green `#22c55e`
- `AppsBannerCard` padding is `24px` → should be `16px`

---

## What this repo is NOT
- No backend, no API routes, no database — all bugs are purely frontend/visual
- No authentication
- No React Native — this is a web Next.js app
