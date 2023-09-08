
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageUpload from '@/app/components/inputs/ImageUpload'

describe('<ImageUpload />', () => {
  it('should render default ', ()=> {
    const handleOnChange = jest.fn()
    const tree = render(
      <ImageUpload onChange={handleOnChange} value='/images/placeholder.jpg' />
    )
    expect(screen.getByAltText("House")).toHaveAttribute('src', "/_next/image?url=%2Fimages%2Fplaceholder.jpg&w=3840&q=75");
    
  })
})