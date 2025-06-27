import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('Footer', () => {
  it('renders links section', () => {
    render(<Footer />)
    
    const linksHeading = screen.getByRole('heading', { name: /links to important stuff/i })
    expect(linksHeading).toBeInTheDocument()
  })

  it('renders informative text blurb section', () => {
    render(<Footer />)
    
    const blurbHeading = screen.getByRole('heading', { name: /an informative text blurb/i })
    expect(blurbHeading).toBeInTheDocument()
    
    const findOutMoreButton = screen.getByRole('link', { name: /find out more/i })
    expect(findOutMoreButton).toBeInTheDocument()
  })

  it('renders copyright information', () => {
    render(<Footer />)
    
    expect(screen.getByText(/untitled\. all rights reserved\./i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /html5 up/i })).toBeInTheDocument()
  })
})