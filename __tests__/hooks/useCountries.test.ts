import useCountries from "@/app/hooks/useCountries";


describe('useCountries', () => {
  it('should getAll countries', () => {
    const { getAll } = useCountries();
    expect(getAll()).toEqual(expect.any(Array))
  })
  it('should getByValue countries', () => {
    const { getByValue } = useCountries();
    expect(getByValue('HN')).toEqual(
      expect.objectContaining({"label": "Honduras"})
    )
  })
})