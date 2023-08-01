import createNoopStorage from '@/redux/createNoopStorage/createNoopStorage'

describe('@/redux/getStorage/getStorage', () => {
  it('should exec getItem ', () => {
    expect(createNoopStorage().getItem('xpto')).toBeTruthy()
  })
  it('should exec setItem ', () => {
    expect(createNoopStorage().setItem('xpto', 'xpto')).toBeTruthy()
  })

  it('should exec removeItem ', () => {
    expect(createNoopStorage().removeItem('xpto')).toBeTruthy()
  })
})
