
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AiFillGithub } from 'react-icons/ai'
import ListingCategory from '@/app/components/listings/ListingCategory'
describe('<ListingCategory />', () => {
  it('should render default ', ()=> {
    const handleOnChange = jest.fn()
    const tree = render(
      <ListingCategory description='description' icon={AiFillGithub} label='label'  />
    )
    screen.getByText(/description/i)
    screen.getByText(/label/i)

  })
})