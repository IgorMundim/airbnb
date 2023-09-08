
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CountrySelect from '@/app/components/inputs/CountrySelect'
const countrySelectValue = {
  flag: 'br',
  label: 'Brazil',
  latlng: [10],
  region: 'n/a',
  value: 'n/a'
}
describe('<CountrySelect />', () => {
  it('should render default ', ()=> {
    const handleOnChange = jest.fn()
    render(
      <CountrySelect onChange={handleOnChange} value={countrySelectValue}  />
    )
    screen.getByText(/Brazil/i)

  })
})