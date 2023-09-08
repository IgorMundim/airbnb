import ErrorState from "@/app/error"

import { fireEvent, render, screen } from "@testing-library/react"


jest.mock("next/navigation", () => ({
  useRouter() {
    return{
      push: () => jest.fn()
    }  
  }
}))

describe('<ErrorState />', () => {
  it('should render default', () =>{
    render(<ErrorState error={new Error()}/>)
    
  })
})