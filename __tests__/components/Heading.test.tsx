import Heading from "@/app/components/Heading"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
describe('<Heading />', () => {
  it('should render default component', ()=> {
    const tree = render(<Heading title="myTitle" subtitle="mySubtitle" center={true}/>)
    const infoTitle = screen.getByText('myTitle')
    const infoSubtitle = screen.getByText('mySubtitle')
    const definition = screen.getByRole('definition')
    expect(infoTitle).toHaveTextContent('myTitle')
    expect(infoSubtitle).toHaveTextContent('mySubtitle')
    expect(definition).toHaveClass('text-center')
  })
  it('should render component with the class "text-start"', ()=> {
    render(<Heading title="myTitle" subtitle="mySubtitle" center={false}/>)
    const heading = screen.getByRole('definition')
    expect(heading).toHaveClass('text-start')

  })
})