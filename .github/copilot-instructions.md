# Project: Convert HTML5UP Dopetrope to Next.js with Shadcn Components

This is a conversion project to take a static HTML template and convert it into a Next.js application using shadcn components. The project will involve setting up the Next.js environment, creating a layout, converting HTML pages to React components, and ensuring the design is consistent with the original template.

**Design reference screenshot:** `screenshot.png`

## Conversion Plan

### Work using a todo list

You MUST manage your progress using a Todo List.

Follow these steps:

1. Start a new markdown code block with a checklist.
2. Create a Todo List with specific, actionable items using standard Markdown checklist syntax.
3. **After each step in the todo list is completed, you MUST re-render and update the todo list to reflect the current progress.**. Only re-render the todo list if a step has been **fully** and **successfully** completed.

Todo Lists must be displayed as a **Markdown code block** using standard checklist syntax:

- `[ ]` = Not started
- `[x]` = Completed
- `[-]` = Removed or no longer relevant

### Example:

```markdown
[ ] Search for the `ChatInput` component
[ ] Read the file if it's under 2000 lines
[ ] Fix undefined variable error
[ ] Verify Problems tab is clear
```

### 1. Layout and Shared Components

#### Layout Component (`src/app/layout.tsx`)

- Wrap all pages with a consistent layout (header, footer, global styles)
- Import global Tailwind styles via `globals.css`

#### Header/Navigation (`components/Header.tsx`)

- Convert `<section id="header">` from HTML
- Use shadcn's NavigationMenu components for dropdowns
- Include site logo and links to Home, Left Sidebar, Right Sidebar, No Sidebar pages

#### Banner (`components/Banner.tsx`)

- Represents `<section id="banner">` with the heading "Howdy. This is Dopetrope."
- Include styled callouts or CTAs if present in the original

#### Intro Section (`components/Intro.tsx` + `components/FeatureCard.tsx`)

- Build feature cards for the three icons under `<section id="intro">`
  - Ipsum consequat
  - Magna etiam dolor
  - Tempus adipiscing
- Each card uses shadcn Card and Badge components

#### Portfolio Grid (`components/Portfolio.tsx` + `components/PortfolioItem.tsx`)

- Convert the portfolio gallery from `<section>` inside `#main`
- Use a responsive grid layout with Image components

#### Blog Preview (`components/BlogList.tsx` + `components/BlogPostCard.tsx`)

- Convert the "The Blog" section that lists blog posts with images and "Continue Reading" buttons

#### Footer (`components/Footer.tsx`)

- Recreate the large footer from `<section id="footer">`
- Include dates, social links, and contact information

#### Sidebar (`components/Sidebar.tsx`)

- Used by left-sidebar and right-sidebar pages
- Contains "Feugiat consequat" lists and image boxes

### 2. Pages

#### Home Page (`src/app/page.tsx`)

- Assemble Banner, Intro, Portfolio, BlogList, and Footer inside the main Layout

#### Left Sidebar Page (`src/app/left-sidebar/page.tsx`)

- Layout with Sidebar component on the left and main article content on the right

#### Right Sidebar Page (`src/app/right-sidebar/page.tsx`)

- Similar to Left Sidebar but with the sidebar on the right

#### No Sidebar Page (`src/app/no-sidebar/page.tsx`)

- Full-width article content using Layout without the Sidebar component

### 3. Styling

- Use Tailwind CSS classes to match the original `assets/css/main.css`
- Global styles and any custom fonts go in `src/app/globals.css`

### 4. Unit Testing (Jest)

#### Component Tests

- Write Jest tests under `src/__tests__/` for each component
- Examples:
  - `Header.test.tsx` - verifies that navigation links render
  - `Banner.test.tsx` - checks heading text
  - etc.

#### Render Checks

- Use React Testing Library to ensure components mount and accept props correctly

#### Snapshot Tests (optional)

- Capture React snapshots to guard against accidental markup changes

### 5. Playwright End-to-End and Screenshot Tests

#### Basic Navigation Tests

- Under `tests/`, add Playwright tests that load each page (home, left-sidebar, etc.) and verify key headings

#### Screenshot Comparison

- Store the design reference `screenshot.png` at the repository root (already present)
- In a Playwright test, navigate to the Home page, capture a screenshot, and compare with the stored reference:

```javascript
test("home page matches design", async ({ page }) => {
  await page.goto("/");
  expect(await page.screenshot()).toMatchSnapshot("screenshot.png");
});
```

- Repeat for other pages if necessary

### 6. Build & Verification

- Run `npm run build` periodically to ensure pages compile
- Confirm the rendered pages visually match the screenshot reference and the HTML template

### 7. Final Checklist

- [ ] All components created and styled
- [ ] Jest tests passing (`npm run test`)
- [ ] Playwright screenshot tests passing (`npx playwright test`)
- [ ] Design closely matches `screenshot.png`

## Project Structure

```
nextjs-dopetrop/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── left-sidebar/
│   │   │   └── page.tsx
│   │   ├── right-sidebar/
│   │   │   └── page.tsx
│   │   └── no-sidebar/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Banner.tsx
│   │   ├── Intro.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── Portfolio.tsx
│   │   ├── PortfolioItem.tsx
│   │   ├── BlogList.tsx
│   │   ├── BlogPostCard.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   └── __tests__/
│       ├── Header.test.tsx
│       ├── Banner.test.tsx
│       └── ...
├── tests/
│   └── e2e/
│       └── navigation.spec.ts
└── screenshot.png
```
