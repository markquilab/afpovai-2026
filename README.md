# AFPOVAI Election Announcement

A static, responsive announcement page for the AFPOVAI 2026 Board of Directors
election and Annual General Assembly. The featured notice is stored in
`src/data/announcement.ts` so future announcements can be added without a
backend.

## Page structure

`src/App.tsx` composes the page from focused components:

- `src/components/layout/Navbar.tsx` — site navigation
- `src/components/sections/HeroSection.tsx` — event details and countdown
- `src/components/sections/CandidateSection.tsx` — ballot cards
- `src/components/sections/ElectionActivitiesSection.tsx` — election timeline
- `src/components/layout/Footer.tsx` — association footer

Section components use Tailwind utility classes directly, with shared design
tokens and global base styles in `src/index.css`. There is no page-level CSS file.

## Local development

```sh
npm ci
npm run dev
```

## Build and lint

```sh
npm run build
npm run lint
```
