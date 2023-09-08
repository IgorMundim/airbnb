import Logo from "@/app/components/navbar/Logo"
import { fireEvent, render, screen } from "@testing-library/react"

jest.mock("next/navigation", () => ({
  useRouter() {
    return{
      push: () => jest.fn()
    }  
  }
}))

describe('<Logo />', () => {
  it('should render default', () =>{
    render(<Logo />)
    const logoLink = screen.getByAltText(/Logo/i)
    fireEvent.click(logoLink)
  })
})