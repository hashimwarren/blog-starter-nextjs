# Project: Convert HTML5UP Dopetrope to Next.js with Shadcn Components

This repository converts the static **Dopetrope** template into a modern Next.js application.  Tailwind CSS and shadcn/ui provide the component library.  The reference design screenshot is available at `screenshot.png`.

## Detailed Conversion Plan
1. **Project Setup**
   - Install dependencies inside `nextjs-dopetrop`.
   - Copy images from `html5up-dopetrope/assets` to `nextjs-dopetrop/public`.
2. **Layout and Shared Components**
   - Create `src/app/layout.tsx` and global styles.
   - Build `Header`, `Banner`, `Intro` with `FeatureCard`, `Portfolio` with `PortfolioItem`, `BlogList` with `BlogPostCard`, `Sidebar`, and `Footer` components.
3. **Pages**
   - Assemble pages `page.tsx`, `left-sidebar/page.tsx`, `right-sidebar/page.tsx`, and `no-sidebar/page.tsx` using the components.
4. **Styling**
   - Recreate `main.css` styles with Tailwind classes in `globals.css`.
5. **Unit Testing**
   - Use Jest and React Testing Library to test each component under `src/__tests__`.
6. **Playwright Testing**
   - Add e2e tests that navigate to each page and compare screenshots against `screenshot.png`.
7. **Build Verification**
   - Run `npm run build` regularly and ensure pages render correctly.
8. **Final Checklist**
   - All components complete, `npm run test` and `npx playwright test` succeed, and visual comparison matches the template.

See `blog-starter-one/plan.md` for an additional checklist that tracks progress.
