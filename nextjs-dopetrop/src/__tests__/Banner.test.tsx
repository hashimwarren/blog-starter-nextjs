import { render, screen } from '@testing-library/react'
import { Banner } from '@/components/Banner'

describe('Banner Component', () => {
  it('renders the banner heading', () => {
    render(<Banner />)
    expect(screen.getByText('Howdy. This is Dopetrope.')).toBeInTheDocument()
  })

  it('renders the banner subtitle', () => {
    render(<Banner />)
    expect(screen.getByText('A responsive template by HTML5 UP')).toBeInTheDocument()
  })
})