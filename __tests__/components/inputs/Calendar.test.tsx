import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Calendar } from "react-date-range"

describe('<Calendar />', () => {
  it('should render default', ()=> {
    render(
      <Calendar />
    )
  })
})