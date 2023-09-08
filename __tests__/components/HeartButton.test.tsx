
import { act, fireEvent, render, screen,waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import HeartButton from '@/app/components/HeartButton'

jest.mock("next/navigation", () => ({
  useRouter(){
    refresh: jest.fn()
  },
  // usePathname: jest.fn().mockReturnValue('/some-route'),
}));
const user = {
  createdAt: "Mon Aug 28 2023 16:17:52 GMT-0300 (Brasilia Standard Time)",
  email: "igor.g.mundim@gmail.com",
  emailVerified: null,
  favoriteIds:[
    "64edf3a15fa61698c28da3ea",
  ],
  length: 1,
  hashedPassword: null,
  id: "64ecf2e094943eb6b0685c6e",
  image: "http://lh3.googleusercontent.com/a/AAcHTtfPlTQ6pMTW7qV36EgMr_IKsjZ6Lcl0pbiLPss4a_B3swA=s96-c",
  name: "Igor Mundim",
  updatedAt: "Tue Aug 29 2023 12:38:47 GMT-0300",
}
describe('<HeartButton />', () => {
  it('should render default component without user', ()=> {
    render(<HeartButton listingId='1'  />)
    const toggle = screen.getByRole('definition')
    fireEvent.click(toggle)
  })
  it('should render component with user', () => {
    render(<HeartButton listingId='1' currentUser={user} />)
    const toggle = screen.getByRole('definition')
    fireEvent.click(toggle)
  })

  it('should render component with user favorited', async () => {
    render(<HeartButton listingId='64edf3a15fa61698c28da3ea' currentUser={user} />)
    const toggle = screen.getByRole('definition')
    await act(async () => {
      fireEvent.click(toggle)
    })
    
  })
})