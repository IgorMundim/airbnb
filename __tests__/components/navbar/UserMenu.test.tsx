
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserMenu from '@/app/components/navbar/UserMenu';


const user = {
  createdAt: "Mon Aug 28 2023 16:17:52 GMT-0300 (Brasilia Standard Time)",
  email: "igor.g.mundim@gmail.com",
  emailVerified: null,
  favoriteIds: Array(1),
  0: "64edf3a15fa61698c28da3ea",
  length: 1,
  hashedPassword: null,
  id: "64ecf2e094943eb6b0685c6e",
  image: "http://lh3.googleusercontent.com/a/AAcHTtfPlTQ6pMTW7qV36EgMr_IKsjZ6Lcl0pbiLPss4a_B3swA=s96-c",
  name: "Igor Mundim",
  updatedAt: "Tue Aug 29 2023 12:38:47 GMT-0300",
}
const mockUsePathname = jest.fn();

jest.mock('query-string' , () => ({
  parse :jest.fn(),
  stringify: jest.fn(),
  stringifyUrl: jest.fn()
  }));

  jest.mock("next-auth/react", () =>({
    signOut: jest.fn()
  }));

  jest.mock("next/navigation", () => ({
    useRouter() {
      return {
        push: () => jest.fn(),
        replace: () => jest.fn(),
      }
    },
    usePathname(){ 
     return mockUsePathname()
    },
    useSearchParams: jest.fn()
    
  }))

describe('<UserMenu />', () => {
  it('should render default ', ()=> {
    render(<UserMenu currentUser={user}/>)
    const handleOpen  = screen.getByRole('menubar')
    fireEvent.click(handleOpen)

    const myTripsButton = screen.getByText(/My trips/i)
    fireEvent.click(myTripsButton)

    const myFavoritesButton = screen.getByText(/My favorites/i)
    fireEvent.click(myFavoritesButton)

    const myReservationsButton = screen.getByText(/My reservations/i)
    fireEvent.click(myReservationsButton)

    const myPropertiesButton = screen.getByText(/My properties/i)
    fireEvent.click(myPropertiesButton)

    const myLoginButton = screen.getByText(/Logout/i)
    fireEvent.click(myLoginButton)

    const myRentButton = screen.getByRole('button')
    fireEvent.click(myRentButton)
    
  })
  it('should open login modal ', ()=> {
    render(<UserMenu />)
    const myRentButton = screen.getByRole('button')
    fireEvent.click(myRentButton)
  })

})