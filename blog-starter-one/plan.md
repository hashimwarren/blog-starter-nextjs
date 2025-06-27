# Plan: Convert html5up-dopetrope to Next.js with shadcn

This plan outlines the steps to convert the static HTML template `html5up-dopetrope` into a Next.js application using shadcn components.

## Checklist

- [x] **1. Project Setup & Cleanup**
    - [x] Clean up the initial Next.js starter page content.
    - [x] Move static assets (images) to the `public` directory.
- [x] **2. Layout Conversion**
    - [x] Create a main `Layout` component based on the template's structure.
    - [x] Implement the header and navigation using shadcn components.
    - [x] Implement the footer.
- [x] **3. Page Conversion**
    - [x] Convert `index.html` to `src/app/page.tsx`.
    - [x] Convert `left-sidebar.html` to `src/app/left-sidebar/page.tsx`.
    - [x] Convert `right-sidebar.html` to `src/app/right-sidebar/page.tsx`.
    - [x] Convert `no-sidebar.html` to `src/app/no-sidebar/page.tsx`.
- [ ] **4. Component Creation**
    - [ ] Create a reusable `Card` component for the content sections.
    - [ ] Create a `Sidebar` component.
- [ ] **5. Styling**
    - [ ] Migrate styles from `main.css` to Tailwind CSS and `globals.css`.
- [ ] **6. Build and Verification**
    - [ ] Run `npm run build` after each major step to ensure the project builds correctly.
    - [ ] Verify that the converted pages match the original template's layout and design.
