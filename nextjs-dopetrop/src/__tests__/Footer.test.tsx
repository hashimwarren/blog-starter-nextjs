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

  it('has proper footer structure', () => {
    render(<Footer />)
    
    // Check for footer section by ID
    const footerSection = document.getElementById('footer')
    expect(footerSection).toBeInTheDocument()
  })

  it('renders all link lists with correct links', () => {
    render(<Footer />)
    
    // Check that multiple instances of each link exist (4 columns)
    const nequeLinks = screen.getAllByText(/neque amet dapibus/i)
    expect(nequeLinks).toHaveLength(4)
    
    const sedLinks = screen.getAllByText(/sed mattis quis rutrum/i)
    expect(sedLinks).toHaveLength(4)
    
    const accumsanLinks = screen.getAllByText(/accumsan suspendisse/i)
    expect(accumsanLinks).toHaveLength(4)
    
    const euLinks = screen.getAllByText(/eu varius vitae magna/i)
    expect(euLinks).toHaveLength(4)
  })

  it('renders descriptive text content', () => {
    render(<Footer />)
    
    const descriptiveText = screen.getByText(/duis neque nisi, dapibus sed mattis quis/i)
    expect(descriptiveText).toBeInTheDocument()
  })

  it('has correct link href for HTML5 UP', () => {
    render(<Footer />)
    
    const html5Link = screen.getByRole('link', { name: /html5 up/i })
    expect(html5Link).toHaveAttribute('href', 'http://html5up.net')
  })

  it('has proper container and grid structure', () => {
    render(<Footer />)
    
    // Check for container elements
    const containers = screen.getAllByText(/duis neque nisi/i)[0].closest('.container')
    expect(containers).toBeInTheDocument()
  })
})