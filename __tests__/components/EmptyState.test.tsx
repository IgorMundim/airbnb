import React from 'react';
import EmptyState from "@/app/components/EmptyState"
import { useRouter } from 'next/navigation';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  // usePathname: jest.fn().mockReturnValue('/some-route'),
}));
const mockRouter = {
  push: jest.fn()
}
describe('<EmptyState />', () => {
  it('should render default component', ()=> {
    render(<EmptyState />)
    const infoTitle = screen.getByText('No exact matches')
    const infoSubtitle = screen.getByText('Try changing or removing some of your filters')
    expect(infoTitle).toHaveTextContent('No exact matches')
    expect(infoSubtitle).toHaveTextContent('Try changing or removing some of your filters')
  })
  it('should render component with "showReset"', ()=> {

    (useRouter as jest.Mock).mockReturnValue(mockRouter)
    const tree = render(<EmptyState title="myTitle" subtitle="mySubtitle" showReset/>)  
    fireEvent.click(screen.getByText(/Remove all filters/i))
    expect(mockRouter.push).toHaveBeenCalledWith('/')
  })

})