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
})