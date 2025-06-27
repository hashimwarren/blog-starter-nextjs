import { render, screen } from '@testing-library/react'
import { FeatureCard } from '@/components/FeatureCard'

describe('FeatureCard Component', () => {
  const defaultProps = {
    icon: 'fa-cog',
    title: 'Test Feature',
    description: 'This is a test feature description'
  }

  it('renders the feature title', () => {
    render(<FeatureCard {...defaultProps} />)
    expect(screen.getByText('Test Feature')).toBeInTheDocument()
  })

  it('renders the feature description', () => {
    render(<FeatureCard {...defaultProps} />)
    expect(screen.getByText('This is a test feature description')).toBeInTheDocument()
  })

  it('applies correct variant styling', () => {
    const { container } = render(<FeatureCard {...defaultProps} variant="middle" />)
    const iconElement = container.querySelector('.bg-gray-800')
    expect(iconElement).toBeInTheDocument()
  })
})