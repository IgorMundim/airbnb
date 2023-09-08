import CategoryBox from "@/app/components/navbar/CategoryBox"
import { fireEvent, render, screen } from "@testing-library/react"
import { useRouter } from "next/navigation";
import { GiBarn } from 'react-icons/gi';

jest.mock('query-string' , () => ({
parse :jest.fn(),
stringify: jest.fn(),
stringifyUrl: jest.fn()
}));

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
      replace: () => jest.fn(),
    };
  },
  usePathname: jest.fn().mockReturnValue('/category/1234'),
  useSearchParams() {
    return{
    get: () => 'GiBarn',
    }
  }
  
}))

describe('<CategoryBox />', () => {
  it('should render default', ()=> { 
    render(<CategoryBox icon={GiBarn} label="GiBarn" selected/>)
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
  })
})