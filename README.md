# KING NARMAR SOFTWARE SOLUTIONS Website

A 3D interactive portfolio website for **KING NARMAR SOFTWARE SOLUTIONS**.

The goal is to build a premium, interactive website that presents software services, real projects, automation tools, and future 3D experiences under the theme:

> The Kingdom of Code

## Live Website

Production website: <https://kingnarmar.com>

## Tech Stack

- Vite
- React
- TypeScript
- CSS
- Three.js / React Three Fiber

## Current Status

The first MVP is deployed on Cloudflare Pages and connected to the custom domain.

Completed MVP sections:

- Hero section with temporary 3D pyramid
- Services section
- Projects section
- Contact section with real links
- Custom domain and SSL enabled
- Dedicated M.I.N.A System product landing page
- Mina System privacy and account deletion pages
- Mina System auth confirmation and reset password pages
- H.O.R.U.S System auth confirmation and reset password pages

## Product Pages

M.I.N.A System routes:

- `/mina-system`
- `/mina-system/privacy-policy`
- `/mina-system/account-deletion`

The product page displays the current platform availability accurately. Microsoft Store, Google Play, and Apple App Store buttons remain disabled until an official public listing URL is available.

## Auth Link Pages

Mina System routes:

- `/confirm-email`
- `/reset-password`

H.O.R.U.S System routes:

- `/horus/confirm`
- `/horus/confirm-email`
- `/horus/reset-password`

## Environment Variables

Mina System Supabase auth pages use:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

H.O.R.U.S System Supabase auth pages use:

```bash
VITE_HORUS_SUPABASE_URL=
VITE_HORUS_SUPABASE_ANON_KEY=
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```
