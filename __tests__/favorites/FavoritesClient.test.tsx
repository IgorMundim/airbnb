import FavoritesClient from "@/app/favorites/FavoritesClient"
import { fireEvent, render, screen } from "@testing-library/react"

jest.mock("next/navigation", () => ({
  useRouter() {
    return{
      push: () => jest.fn()
    }  
  }
}))
const listings = [
  {
    id: '64edf3a15fa61698c28da3ea',
    title: 'My home',
    description: 'Forever',
    imageSrc: 'https://res.cloudinary.com/dl0odfzow/image/upload/v1693315943/enxjpewntjlwadymjoow.jpg',
    createdAt: 'Tue Aug 29 2023 10:33:21 GMT-0300 (Brasilia Standard Time)',
    category: 'Windmills',
    roomCount: 3,
    bathroomCount: 1,
    guestCount: 2,
    locationValue: 'BR',
    userId: '64ecf2e094943eb6b0685c6e',
    price: 99999
  }
]
describe('<FavoritesClient />', () => {
  it('should render default', () =>{
    render(<FavoritesClient listings={listings} />)
    const favoritesContent = screen.getByText(/99999/i)
  })
})