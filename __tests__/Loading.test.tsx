import Loading from "@/app/loading"
import { fireEvent, render, screen } from "@testing-library/react"


jest.mock("next/navigation", () => ({
  useRouter() {
    return{
      push: () => jest.fn()
    }  
  }
}))

describe('<Loading />', () => {
  it('should render default', () =>{
    render(<Loading />)
    
  })
})