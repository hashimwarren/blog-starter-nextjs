import { render, screen } from '@testing-library/react'
import Layout from '@/app/layout'
import Home from '@/app/page'

// Mock Next.js metadata
jest.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      fontFamily: 'Inter',
    },
  }),
}))

describe('Integration Tests', () => {
  it('renders header and footer in layout', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    )
    
    // Header should be present
    expect(screen.getByRole('link', { name: /dopetrope/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    
    // Footer should be present
    expect(screen.getByRole('heading', { name: /links to important stuff/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /an informative text blurb/i })).toBeInTheDocument()
    expect(screen.getByText(/untitled\. all rights reserved\./i)).toBeInTheDocument()
    
    // Content should be present
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders complete home page with header and footer', () => {
    render(
      <Layout>
        <Home />
      </Layout>
    )
    
    // Header navigation
    expect(screen.getByRole('link', { name: /dopetrope/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /dropdown/i })).toBeInTheDocument()
    
    // Home page content
    expect(screen.getByRole('heading', { name: /howdy\. this is dopetrope\./i })).toBeInTheDocument()
    expect(screen.getByText(/a responsive template by html5 up/i)).toBeInTheDocument()
    
    // Intro sections
    expect(screen.getByRole('heading', { name: /ipsum consequat/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /magna etiam dolor/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /tempus adipiscing/i })).toBeInTheDocument()
    
    // Portfolio section
    expect(screen.getByRole('heading', { name: /my portfolio/i })).toBeInTheDocument()
    
    // Blog section  
    expect(screen.getByRole('heading', { name: /the blog/i })).toBeInTheDocument()
    
    // Footer content
    expect(screen.getByRole('heading', { name: /links to important stuff/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /find out more/i })).toHaveLength(4) // Multiple "Find out more" buttons
    expect(screen.getByRole('link', { name: /html5 up/i })).toBeInTheDocument()
  })

  it('has proper page structure with header, main, and footer', () => {
    render(
      <Layout>
        <Home />
      </Layout>
    )
    
    // Check that key structural elements exist
    const headerElement = document.getElementById('header')
    expect(headerElement).toBeInTheDocument()
    
    const footerElement = document.getElementById('footer')
    expect(footerElement).toBeInTheDocument()
    
    // Check that main content sections exist
    const bannerElement = document.getElementById('banner')
    expect(bannerElement).toBeInTheDocument()
    
    const introElement = document.getElementById('intro')
    expect(introElement).toBeInTheDocument()
    
    const mainElement = document.getElementById('main')
    expect(mainElement).toBeInTheDocument()
  })

  it('has navigation links with correct hrefs', () => {
    render(
      <Layout>
        <Home />
      </Layout>
    )
    
    // Test navigation links
    expect(screen.getByRole('link', { name: /^home$/i })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /left sidebar/i })).toHaveAttribute('href', '/left-sidebar')
    expect(screen.getByRole('link', { name: /right sidebar/i })).toHaveAttribute('href', '/right-sidebar')
    expect(screen.getByRole('link', { name: /no sidebar/i })).toHaveAttribute('href', '/no-sidebar')
    
    // Test logo link
    expect(screen.getByRole('link', { name: /dopetrope/i })).toHaveAttribute('href', '/')
    
    // Test footer link
    expect(screen.getByRole('link', { name: /html5 up/i })).toHaveAttribute('href', 'http://html5up.net')
  })
})