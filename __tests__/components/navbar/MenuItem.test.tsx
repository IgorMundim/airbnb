import MenuItem from "@/app/components/navbar/MenuItem"
import { fireEvent, render, screen } from "@testing-library/react"

jest.mock("next/navigation", () => ({
  useRouter() {
    return{
      push: () => jest.fn()
    }  
  }
}))

describe('<MenuItem />', () => {
  it('should render default', () =>{
    const handleOnClick = jest.fn()
    render(<MenuItem label="menuItemLabel" onClick={handleOnClick} />)
    const menuItem = screen.getByText(/menuItemLabel/i)
    fireEvent.click(menuItem)
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })
})