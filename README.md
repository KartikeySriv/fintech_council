# FCC Website — Fintech Convergence Council

Pixel-faithful rebuild of the [Claude artifact](https://claude.ai/artifact/M1SiKiFpx47RPEhj4Mcqn6) using **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (brand tokens in `@theme`)
- Original FCC design-system CSS ported for exact visual match (`src/app/fcc.css`)
- Fonts: Plus Jakarta Sans + JetBrains Mono

## Run

```bash
cd fcc-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Source |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/annual-report` | Annual Reports |
| `/committees` | Committees overview |
| `/committees/digital-lending` | Digital Lending |
| `/committees/regtech` | RegTech |
| `/committees/wealthtech` | WealthTech |
| `/committees/insurtech` | InsurTech |
| `/committees/credit-bureau` | Credit Bureau |
| `/members` | Member directory |
| `/membership-benefits` | Membership benefits |
| `/apply-membership` | Apply for membership |
| `/partners` | Partners |
| `/partnership-benefits` | Partnership benefits |
| `/apply-partnership` | Apply for partnership |
| `/policy` | Policy |
| `/research` | Research |
| `/live-events` | Live events |
| `/virtual-events` | Virtual events |
| `/contact` | Contact |

## Structure

- `src/components/PageShell.tsx` — shared chrome (header, footer, interactions)
- `src/components/SiteHeader.tsx` — sticky brand row + mega-menu nav
- `src/components/SiteFooter.tsx` — footer + newsletter
- `src/components/SiteInteractions.tsx` — filters, charts, members directory, form previews
- `src/components/pages/*Page.tsx` — real React JSX page content (no `dangerouslySetInnerHTML`)
- `src/app/*/page.tsx` — thin route wrappers (metadata + `PageShell`)
- `src/app/fcc.css` — full FCC design system from the artifact
- `src/app/globals.css` — Tailwind + theme tokens
- `src/data/members.ts` — member directory data
