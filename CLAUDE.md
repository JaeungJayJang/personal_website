# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jaeung Jang, deployed at jang2.jaeung.com. Static site built with Next.js (App Router), Tailwind CSS, DaisyUI, and MUI. Uses Spline for 3D elements in the hero section.

## Commands

- `yarn dev` — Start dev server
- `yarn build` — Build static export (outputs to `./out`)
- `yarn lint` — Run ESLint
- No test framework is configured

## Deployment

Deployed to GitHub Pages via GitHub Actions on push to `main`. The Next.js config uses `output: 'export'` for static site generation with unoptimized images.

## Architecture

Single-page app using Next.js App Router (`app/` directory). The page is composed of sections rendered in order: HeroContainer → About → Experiences → Projects.

- **`app/page.tsx`** — Main page composing all sections
- **`app/layout.tsx`** — Root layout with Header and Footer
- **`app/components/`** — Section components (`about.tsx`, `experiences.tsx`, `projects.tsx`) and reusable UI (`general/`, `layout/`, `container/`)
- **`data/`** — JSON files (`about.json`, `experiences.json`, `projects.json`) that drive section content. Edit these to update site content rather than modifying components.

## Styling

Tailwind CSS with DaisyUI plugin. Custom color palette defined in `tailwind.config.js`:
- `primary`: #2e3f5b (with 10-90 shades)
- `secondary`: #ef8354 (with 10-90 shades)
- `tertiary`: #2d3142 (with 10-90 shades)
- `background`: #181818
