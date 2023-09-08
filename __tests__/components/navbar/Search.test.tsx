
import Search from "@/app/components/navbar/Search"
import { fireEvent, render, screen } from "@testing-library/react"

jest.mock("next/navigation", () => ({
  useSearchParams(value: string) {
    return{
      get: (value: string) => {
        switch(value){
          case 'locationValue':
            return 'locationValue'
          case 'startDate':
            return '2000-10-10'
          case 'endDate':
            return '2000-10-10'
          case 'guestCount':
            return 'guest'
          default:
            return 'guest'
        }
      }
    }

  }
}))

describe('<Search />', () => {
  it('should render default', () =>{
    render(<Search />)
    const searchEvent = screen.getByRole('contentinfo')
    fireEvent.click(searchEvent)
  })
})