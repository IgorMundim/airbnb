import useFavorite from "@/app/hooks/useFavorite"
import useLoginModal from "@/app/hooks/useLoginModal"
import { act, renderHook } from "@testing-library/react"

jest.mock("next/navigation", () => ({
  useRouter() {
    return{
      push: () => jest.fn()
    }  
  }
}))


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
describe('t', ()=> {
  it('t', () => {
    const { result } = renderHook(() => useFavorite({listingId: "64edf3a15fa61698c28da3ea", currentUser: user}))
    
    act(() => {
      
    })

  })
})