import useLoginModal from "@/app/hooks/useLoginModal";
import { renderHook, act } from "@testing-library/react";

describe('useLoginModal', () => {
  it(' should start closed', () => {
    const { result } = renderHook(() => useLoginModal())
    act(() => {})
    expect(result.current.isOpen).toBe(false)
  })
  it(' should open', () => {
    const { result } = renderHook(() => useLoginModal())
    act(() => {
      result.current.onOpen();
    })
    expect(result.current.isOpen).toBe(true)
  })

  it(' should close', () => {
    const { result } = renderHook(() => useLoginModal())
    act(() => {
      result.current.onClose();
    })
    expect(result.current.isOpen).toBe(false)
  })
})