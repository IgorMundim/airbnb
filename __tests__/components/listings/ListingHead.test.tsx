
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ListingHead from '@/app/components/listings/ListingHead'

jest.mock('next/navigation', ()=> ({
  useRouter: jest.fn()
}))

describe('<ListingHead />', () => {
  it('should render default ', ()=> {
    const tree = render(
      <ListingHead 
        id='#123' 
        imageSrc='https://res.cloudinary.com/dl0odfzow/image/upload/v1693315943/enxjpewntjlwadymjoow.jpg'  
        locationValue='BR'
        title='Brazil'

      />
    )
    screen.getByText(/Americas, Brazil/i)
  })
})