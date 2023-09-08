
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ListingCard from '@/app/components/listings/ListingCard'
import { useRouter } from 'next/navigation';
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  // usePathname: jest.fn().mockReturnValue('/some-route'),
}));

const mockRouter = {
  push: jest.fn()
}
const cardMock = {
  id: '64edf3a15fa61698c28da3ea',
  title: 'My home',
  description: 'Forever',
  imageSrc: 'https://res.cloudinary.com/dl0odfzow/image/upload/v1693315943/enxjpewntjlwadymjoow.jpg',
  createdAt: '2023-08-29T13:33:21.326Z',
  category: 'Windmills',
  roomCount: 3,
  bathroomCount: 1,
  guestCount: 2,
  locationValue: 'BR',
  userId: '64ecf2e094943eb6b0685c6e',
  price: 99999
}

const reservation = {
  createdAt: "2023-09-04T14:05:55.377Z",
  endDate: "2023-09-07T03:00:00.000Z",
  id: "64f5e44333635f79dd99a644",
  listing: { 
  bathroomCount: 1,
  category: "Windmills",
  createdAt: "2023-08-29T13:33:21.326Z",
  description: "Forever",
  guestCount: 2,
  id: "64edf3a15fa61698c28da3ea",
  imageSrc: "https://res.cloudinary.com/dl0odfzow/image/upload/v1693315943/enxjpewntjlwadymjoow.jpg",
  locationValue: "BR",
  price: 99999,
  roomCount: 3,
  title: "My home",
  userId: "64ecf2e094943eb6b0685c6e",
},

  listingId: "64edf3a15fa61698c28da3ea",
  startDate: "2023-09-05T03:00:00.000Z",
  totalPrice: 199998,
  userId: "64ece15521b874000e6e670d"
}


describe('<ListingCard />', () => {
  it('should render default ', ()=> {
    const onAction = jest.fn()
    const tree = render(
      <ListingCard data={cardMock} onAction={onAction} reservation={reservation} actionLabel='actionLabel'/>
    )
    fireEvent.click(screen.getByLabelText('button'))
    expect(onAction).toHaveBeenCalledTimes(1)
  })
  it('should render when disabled ', ()=> {
    (useRouter as jest.Mock).mockReturnValue(mockRouter)
    const onAction = jest.fn()
    const tree = render(
      <ListingCard data={cardMock} disabled={true} onAction={onAction} actionLabel='actionLabel'/>
    )
    fireEvent.click(screen.getByLabelText('button'))
    expect(onAction).toHaveBeenCalledTimes(0)
  })
})