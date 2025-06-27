# Conversion Plan for Dopetrope

This file summarizes the component-by-component plan for converting the HTML5UP Dopetrope template into a Next.js application with shadcn/ui.

1. **Project Setup**
   - Install dependencies in `nextjs-dopetrop` and copy assets to `public/`.
2. **Layout and Components**
   - Implement `Layout`, `Header`, `Banner`, `Intro`/`FeatureCard`, `Portfolio`/`PortfolioItem`, `BlogList`/`BlogPostCard`, `Sidebar`, and `Footer`.
3. **Pages**
   - Create home, left-sidebar, right-sidebar, and no-sidebar pages that compose these components.
4. **Styling**
   - Translate the original CSS to Tailwind classes.
5. **Unit Testing**
   - Add Jest tests for all components.
6. **Playwright Testing**
   - Write e2e tests that load each page and compare screenshots with `screenshot.png`.
7. **Build & Verification**
   - Ensure `npm run build` works and that the output matches the original design.
