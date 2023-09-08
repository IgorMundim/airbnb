
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from '@/app/components/modals/Modal'

describe('<Modal />', () => {
  it('should render default ', async ()=> {
    const handleOnClose = jest.fn()
    const handleOnSubmit = jest.fn()
    const handleSecondaryAction = jest.fn()
    const tree = render(
      <Modal  
        actionLabel='LabelX1' 
        onClose={handleOnClose} 
        onSubmit={handleOnSubmit}
        title='myTitle'
        body={<div>body</div>}
        disabled={false}
        footer={<footer></footer>}
        isOpen={true}
        secondaryActionLabel='secondaryActionLabel'
        secondaryAction={handleSecondaryAction}

      />
    )
    screen.getByText(/mytitle/i)
    fireEvent.click(screen.getByLabelText(/Close/i))
    fireEvent.click(screen.getByText(/secondaryActionLabel/i))
    fireEvent.click(screen.getByText(/LabelX1/i))

    await waitFor(() => expect(handleOnClose).toHaveBeenCalledTimes(1))
    expect(handleSecondaryAction).toHaveBeenCalledTimes(1)
    expect(handleOnSubmit).toHaveBeenCalledTimes(1)
  })

  it('should render when is disabled ', async ()=> {
    const handleOnClose = jest.fn()
    const handleOnSubmit = jest.fn() 
    const tree = render(
      <Modal  
        actionLabel='LabelX1' 
        onClose={handleOnClose} 
        onSubmit={handleOnSubmit}
        title='myTitle'
        body={<div>body</div>}
        disabled={true}
        footer={<footer></footer>}
        isOpen={true}
      />
    )
    fireEvent.click(screen.getByLabelText(/Close/i))
    fireEvent.click(screen.getByText(/LabelX1/i))

    expect(handleOnClose).toHaveBeenCalledTimes(0)
    expect(handleOnSubmit).toHaveBeenCalledTimes(0)
  })

  it('should render when is not open', async ()=> {
    const handleOnClose = jest.fn()
    const handleOnSubmit = jest.fn()
    const handleSecondaryAction = jest.fn()
    const tree = render(
      <Modal  
        actionLabel='LabelX1' 
        onClose={handleOnClose} 
        onSubmit={handleOnSubmit}
        title='myTitle'
        body={<div>body</div>}
        disabled={true}
        footer={<footer></footer>}
        isOpen={false}
      />
    )
  })
})