import Categories, { categories } from "@/app/components/navbar/Categories"
import { render, screen } from "@testing-library/react"
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

const mockUsePathname = jest.fn();

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
      }
    },
    usePathname(){ 
     return mockUsePathname()
    },
    useSearchParams: jest.fn()
    
  }))


describe('<Categories />', () => {
  it('should render default', ()=> {
    mockUsePathname.mockImplementation(() => '/');
    render(<Categories />)
    screen.getByText(/Modern/i)
  })

  it('should render with path "/something"', ()=> {
    mockUsePathname.mockImplementation(() => '/SOMETHING');
    render(<Categories />)
  })
  it('should get categories values', ()=> {
    expect(categories).toEqual([
      {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!',
      },
      {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property is has windmills!',
      },
      {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
      },
      {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
      },
      {
        label: 'Pools',
        icon: TbPool,
        description: 'This is property has a beautiful pool!'
      },
      {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island!'
      },
      {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is near a lake!'
      },
      {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activies!'
      },
      {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is an ancient castle!'
      },
      {
        label: 'Caves',
        icon: GiCaveEntrance,
        description: 'This property is in a spooky cave!'
      },
      {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property offers camping activities!'
      },
      {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is in arctic environment!'
      },
      {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in the desert!'
      },
      {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in a barn!'
      },
      {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is brand new and luxurious!'
      }
    ])
  })
})