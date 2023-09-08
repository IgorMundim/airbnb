import Container from "@/app/components/Container"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
describe('<Container />', () => {
  it('should render default component', ()=> {
    const tree = render(<Container>
      <h1>myText</h1>
    </Container>)
    const container = screen.getByRole('heading')
    expect(container).toHaveTextContent('myText')
  })
})