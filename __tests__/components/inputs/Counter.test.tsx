
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '@/app/components/inputs/Counter'
describe('<Counter />', () => {
  it('should render default ', ()=> {
    const handleClick = jest.fn()
    const tree = render(
    <Counter 
      onChange={handleClick} 
      subtitle='mySubtitle'
      title='myTitle'
      value={10}
      />)
    expect(screen.getByText(/mySubtitle/i))
    expect(screen.getByText(/myTitle/i))
    expect(screen.getByText(/10/i))  
  })

  it('should render click ', ()=> {
    const handleOnChange = jest.fn()
    render(
      <Counter 
        onChange={handleOnChange} 
        subtitle='mySubtitle'
        title='myTitle'
        value={10}
        />
    )
    
    const decrease = screen.getByPlaceholderText('decrease')
    const increase = screen.getByPlaceholderText('increase')
    fireEvent.click(decrease)
    fireEvent.click(increase)
    expect(handleOnChange).toHaveBeenCalledTimes(2)
    expect(screen.getByText(/10/i)) 
  })
  it('should not render decrease with value 1 ', ()=> {
    const handleOnChange = jest.fn()
    render(
      <Counter 
        onChange={handleOnChange} 
        subtitle='mySubtitle'
        title='myTitle'
        value={1}
        />
    )
    const decrease = screen.getByPlaceholderText('decrease')
    fireEvent.click(decrease)
    expect(handleOnChange).toHaveBeenCalledTimes(0)
    
  })
})