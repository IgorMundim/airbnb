
import { render, screen, fireEvent } from '@testing-library/react'
import { AiFillGithub } from 'react-icons/ai'
import '@testing-library/jest-dom'
import Button from '@/app/components/Button'
describe('<Button />', () => {
  it('should render default component', ()=> {
    const handleClick = jest.fn()
    render(<Button label='Click Me' onClick={handleClick} />)
    const button = screen.getByText(/click me/i)
    expect(button).toHaveClass('relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full bg-rose-500 border-rose-500 text-white py-3 text-md font-semibold border-2')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)

  })

  it('should render component', ()=> {
    const handleClick = jest.fn()
    render(<Button label='Click Me' onClick={handleClick} icon={AiFillGithub} outline small/>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full bg-white border-black text-black py-1 text-sm font-light border-[1px]')
  })
  it('should disabled component', ()=> {
    const handleClick = jest.fn()
    render(<Button label='Click Me' onClick={handleClick} icon={AiFillGithub} outline small disabled/>)
    const button = screen.getByText(/click me/i)
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(0) 
  })
})