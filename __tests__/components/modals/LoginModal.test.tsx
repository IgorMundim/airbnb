
import React from 'react'
import { render, screen, fireEvent, renderHook, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginModal from '@/app/components/modals/LoginModal'
import useLoginModal from '@/app/hooks/useLoginModal'


jest.mock("next-auth/react", () =>({
  signOut: jest.fn(),
  signIn: jest.fn(),
}));

const originalState = useLoginModal.getState();

beforeEach(() => {
  useLoginModal.setState({...originalState, isOpen: true});
});

jest.mock("next/navigation", ()=> ({
  useRouter: jest.fn(),
}))

describe('<LoginModal />', () => {
  it('should render default ', async ()=> {
    
    render(<LoginModal  />) 

    const continueWithGoogleButton = screen.getByText(/Continue with Google/i)
    fireEvent.click(continueWithGoogleButton)
    
    const continueWithGithubButton = screen.getByText(/Continue with Github/i)
    fireEvent.click(continueWithGithubButton)

  })
  it('should close loginModal ', async ()=> {   
    render(<LoginModal  />)
    const createAccountButton = screen.getByText(/Create an account/i)
    fireEvent.click(createAccountButton)
  })

})