import { render, screen } from '@testing-library/react'
import { Header } from '@/components/Header'

describe('Header Component', () => {
  it('renders the site title', () => {
    render(<Header />)
    expect(screen.getByRole('heading', { name: /dopetrope/i })).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Left Sidebar')).toBeInTheDocument()
    expect(screen.getByText('Right Sidebar')).toBeInTheDocument()
    expect(screen.getByText('No Sidebar')).toBeInTheDocument()
  })

  it('renders dropdown trigger', () => {
    render(<Header />)
    expect(screen.getByText('Dropdown')).toBeInTheDocument()
  })
})