import useSearchModal from "@/app/hooks/useSearchModal";
import { renderHook, act } from "@testing-library/react";

describe('useSearchModal', () => {
  it(' should start closed', () => {
    const { result } = renderHook(() => useSearchModal())
    act(() => {})
    expect(result.current.isOpen).toBe(false)
  })
  it(' should open', () => {
    const { result } = renderHook(() => useSearchModal())
    act(() => {
      result.current.onOpen();
    })
    expect(result.current.isOpen).toBe(true)
  })

  it(' should close', () => {
    const { result } = renderHook(() => useSearchModal())
    act(() => {
      result.current.onClose();
    })
    expect(result.current.isOpen).toBe(false)
  })
})