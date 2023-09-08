import useRegisterModal from "@/app/hooks/useRegisterModal";
import { renderHook, act } from "@testing-library/react";

describe('useRegisterModal', () => {
  it(' should start closed', () => {
    const { result } = renderHook(() => useRegisterModal())
    act(() => {})
    expect(result.current.isOpen).toBe(false)
  })
  it(' should open', () => {
    const { result } = renderHook(() => useRegisterModal())
    act(() => {
      result.current.onOpen();
    })
    expect(result.current.isOpen).toBe(true)
  })

  it(' should close', () => {
    const { result } = renderHook(() => useRegisterModal())
    act(() => {
      result.current.onClose();
    })
    expect(result.current.isOpen).toBe(false)
  })
})