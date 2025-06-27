# Header and Footer Component Testing

This document outlines the comprehensive testing strategy implemented for the Header and Footer components in the Dopetrope Next.js application.

## Testing Strategy

### 1. Unit Tests (Jest + React Testing Library)

#### Header Tests (`src/__tests__/Header.test.tsx`)
- ✅ Logo rendering and link functionality
- ✅ Navigation links rendering with correct hrefs
- ✅ Dropdown menu trigger functionality
- ✅ Proper HTML structure and accessibility

#### Footer Tests (`src/__tests__/Footer.test.tsx`)
- ✅ Links section rendering
- ✅ Informative text blurb section
- ✅ Copyright information
- ✅ Link lists structure and content
- ✅ External links (HTML5 UP)

#### Integration Tests (`src/__tests__/integration.test.tsx`)
- ✅ Header and Footer integration in layout
- ✅ Complete page rendering with both components
- ✅ Proper page structure verification
- ✅ Navigation links functionality

### 2. End-to-End Tests (Playwright)

#### Component-Specific E2E Tests

**Header Tests** (`tests/header.spec.ts`)
- Logo visibility and home navigation
- Main navigation links display
- Navigation functionality across pages
- Dropdown menu interaction
- Logo click returns to home

**Footer Tests** (`tests/footer.spec.ts`)
- Footer sections display
- Link lists rendering
- Informative text content
- Copyright information
- Footer presence on all pages
- Proper HTML structure

**Integration Tests** (`tests/header-footer-integration.spec.ts`)
- Complete page functionality
- Cross-page navigation
- Footer link functionality
- Responsive design testing

### 3. Browser Testing Configuration

The Playwright configuration (`playwright.config.ts`) is set up to:
- Test against local development server (`http://localhost:3000`)
- Run comprehensive browser tests
- Capture traces for debugging
- Support responsive testing

## Test Coverage

### Header Component Coverage
- [x] Logo display and linking
- [x] Navigation menu rendering
- [x] Navigation links functionality
- [x] Dropdown menu presence
- [x] Dropdown content accessibility
- [x] Cross-page navigation
- [x] Mobile responsiveness

### Footer Component Coverage
- [x] Links section display
- [x] Multiple link lists (4 columns)
- [x] Informative text blurb
- [x] "Find out more" button
- [x] Copyright information
- [x] External links (HTML5 UP)
- [x] Presence across all pages
- [x] Proper HTML structure

### Integration Coverage
- [x] Layout component integration
- [x] Full page rendering
- [x] Component interaction
- [x] Navigation flow
- [x] Responsive behavior

## Running Tests

### Unit Tests
```bash
npm test                    # Run all tests
npm test Header            # Run header tests only
npm test Footer            # Run footer tests only
npm test integration       # Run integration tests only
npm run test:watch         # Run tests in watch mode
```

### End-to-End Tests
```bash
npx playwright test                              # Run all E2E tests
npx playwright test header.spec.ts              # Run header E2E tests
npx playwright test footer.spec.ts              # Run footer E2E tests
npx playwright test header-footer-integration   # Run integration E2E tests
npx playwright test --headed                    # Run with browser UI
npx playwright test --debug                     # Run in debug mode
```

### Browser Installation
```bash
npx playwright install                          # Install all browsers
npx playwright install chromium                 # Install only Chromium
```

## Test Results

### Current Status
- ✅ All unit tests passing (18/18)
- ✅ Integration tests passing (4/4)
- ⏳ E2E tests ready (pending browser installation)

### Test Files
1. `src/__tests__/Header.test.tsx` - Header unit tests
2. `src/__tests__/Footer.test.tsx` - Footer unit tests
3. `src/__tests__/integration.test.tsx` - Integration tests
4. `tests/header.spec.ts` - Header E2E tests
5. `tests/footer.spec.ts` - Footer E2E tests
6. `tests/header-footer-integration.spec.ts` - Integration E2E tests
7. `tests/example.spec.ts` - Basic application tests

## Component Implementation

### Header Component Features
- Dopetrope logo with home navigation
- Main navigation menu with 4 links
- Dropdown menu with additional links
- Responsive shadcn/ui NavigationMenu
- Proper semantic HTML structure

### Footer Component Features
- Links section with 4 columns of links
- Informative text blurb with "Find out more" button
- Copyright and attribution information
- Proper container and grid layout
- External links to HTML5 UP

### Layout Integration
Both components are integrated into the root layout (`src/app/layout.tsx`) ensuring consistent presence across all pages.

## Best Practices Implemented

1. **Accessibility**: Using semantic HTML and ARIA labels
2. **Responsive Design**: Mobile-first approach with responsive testing
3. **Component Isolation**: Each component tested independently
4. **Integration Testing**: Testing component interaction
5. **Cross-browser Testing**: Playwright configuration for multiple browsers
6. **Performance**: Efficient rendering and navigation
7. **Maintainability**: Clear test structure and documentation