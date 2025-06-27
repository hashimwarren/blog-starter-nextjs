import { render, screen } from '@testing-library/react'
import { Header } from '@/components/Header'

describe('Header', () => {
  it('renders the Dopetrope logo', () => {
    render(<Header />)
    
    const logo = screen.getByRole('link', { name: /dopetrope/i })
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '/')
  })

  it('renders navigation links', () => {
    render(<Header />)
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /left sidebar/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /right sidebar/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /no sidebar/i })).toBeInTheDocument()
  })

  it('renders dropdown menu trigger', () => {
    render(<Header />)
    
    const dropdownTrigger = screen.getByRole('button', { name: /dropdown/i })
    expect(dropdownTrigger).toBeInTheDocument()
  })

  it('has proper navigation structure', () => {
    render(<Header />)
    
    // Check for header section by ID
    const headerSection = document.getElementById('header')
    expect(headerSection).toBeInTheDocument()
    
    // Check for main navigation
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()
  })

  it('has correct link hrefs', () => {
    render(<Header />)
    
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /left sidebar/i })).toHaveAttribute('href', '/left-sidebar')
    expect(screen.getByRole('link', { name: /right sidebar/i })).toHaveAttribute('href', '/right-sidebar')
    expect(screen.getByRole('link', { name: /no sidebar/i })).toHaveAttribute('href', '/no-sidebar')
  })
})