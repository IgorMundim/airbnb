import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CategoryInput from '@/app/components/inputs/CategoryInput'
import { AiFillGithub } from 'react-icons/ai'

describe('<CalendarInput />', () => {
  it('should render default', ()=> {
    const handleClick = jest.fn()
    const tree = render(
      <CategoryInput 
        icon={AiFillGithub} 
        label='label' 
        onClick={handleClick}
        selected
      />
    )
    fireEvent.click(screen.getByText(/label/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('definition')).toHaveClass('rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer border-black')
    expect(tree).toMatchSnapshot()
  })
  it('should render with class not selected', ()=> {
    const handleClick = jest.fn()
    const tree = render(
      <CategoryInput 
        icon={AiFillGithub} 
        label='label' 
        onClick={handleClick}
        selected={false}
      />
    )
    fireEvent.click(screen.getByText(/label/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('definition')).toHaveClass('rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer border-neutral-200')
    expect(tree).toMatchSnapshot()
  })
})