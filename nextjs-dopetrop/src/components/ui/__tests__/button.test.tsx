import { render, screen } from '@testing-library/react';
import { Button } from '../button'; // Adjust the import path as needed

describe('Button component', () => {
  test('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies variant classes correctly', () => {
    render(<Button variant="destructive">Delete</Button>);
    const buttonElement = screen.getByRole('button', { name: /delete/i });
    expect(buttonElement).toHaveClass('bg-destructive');
  });

  test('applies size classes correctly', () => {
    render(<Button size="lg">Large Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /large button/i });
    expect(buttonElement).toHaveClass('h-10'); // Adjusted class based on button.tsx
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const buttonElement = screen.getByRole('button', { name: /disabled/i });
    expect(buttonElement).toBeDisabled();
  });

  test('renders with an icon', () => {
    const Icon = () => <svg data-testid="icon" />;
    render(<Button><Icon /><span>With Icon</span></Button>);
    const buttonElement = screen.getByRole('button', { name: /with icon/i });
    const iconElement = screen.getByTestId('icon');
    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
