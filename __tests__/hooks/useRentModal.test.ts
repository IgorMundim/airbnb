import useRentModal from "@/app/hooks/useRentModal";
import { renderHook, act } from "@testing-library/react";

describe('useRentModal', () => {
  it(' should start closed', () => {
    const { result } = renderHook(() => useRentModal())
    act(() => {})
    expect(result.current.isOpen).toBe(false)
  })
  it(' should open', () => {
    const { result } = renderHook(() => useRentModal())
    act(() => {
      result.current.onOpen();
    })
    expect(result.current.isOpen).toBe(true)
  })

  it(' should close', () => {
    const { result } = renderHook(() => useRentModal())
    act(() => {
      result.current.onClose();
    })
    expect(result.current.isOpen).toBe(false)
  })
})