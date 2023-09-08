import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Loading from '@/app/loading'
describe('<Loading />', () => {
  it('should render default component', ()=> {
    const tree = render(<Loading />)
    expect(tree).toMatchSnapshot()
  })
})