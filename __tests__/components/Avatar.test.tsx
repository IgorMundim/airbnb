import Avatar from "@/app/components/Avatar"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
describe('<Avatar />', () => {
  it('should render default Avatar', ()=> {
    render(<Avatar src="/images/holder.jpg"/>)
    const avatar = screen.getByAltText("Avatar")
    expect(avatar).toHaveAttribute('src', "/_next/image?url=%2Fimages%2Fholder.jpg&w=64&q=75");
  })

  it('should render Avatar without src', ()=> {
    render(<Avatar src={undefined}/>)
    const avatar = screen.getByAltText("Avatar")
    expect(avatar).toHaveAttribute('src', "/_next/image?url=%2Fimages%2Fplaceholder.jpg&w=64&q=75");
  })
})