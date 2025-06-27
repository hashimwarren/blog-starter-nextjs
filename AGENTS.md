# Repository Guide for Agents

This project converts the HTML5UP **Dopetrope** template into a Next.js application with Tailwind CSS and shadcn/ui components.  The reference screenshot is `screenshot.png`.

## Workflow Requirements
- Follow the detailed conversion plan in `.github/copilot-instructions.md` and `gemini.md`.
- When modifying code or documentation, run tests in `nextjs-dopetrop/`:
  - `npm run test` for Jest unit tests.
  - `npx playwright test` for end-to-end and screenshot tests.
- Ensure `npm run build` succeeds before submitting a pull request.
- Keep changes consistent with the design shown in `screenshot.png`.
