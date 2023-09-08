
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ListingReservation from '@/app/components/listings/ListingReservation'
import { Range } from 'react-date-range'

const dateRange:Range = {
  startDate: new Date('2023-09-04T15:13:24.123Z'),
  endDate: new Date('2023-09-04T15:13:24.123Z'),

  key: 'selection'
} 
const disabledDates:Date[] = [
  new Date('2023-09-05T03:00:00.000Z'),
  new Date('2023-09-06T03:00:00.000Z'),
  new Date('2023-09-07T03:00:00.000Z'),
]
describe('<ListingReservation />', () => {
  it('should render default ', ()=> {
    const handleOnChange = jest.fn()
    const handleOnSubmit = jest.fn()
    const  {rerender} = render(
      <ListingReservation
        dateRange={dateRange}
        disabledDates={disabledDates}
        onChangeDate={handleOnChange}
        onSubmit={handleOnSubmit}
        price={10}
        totalPrice={30}


      />
    )
    screen.getByLabelText('year-aria')
  })
})