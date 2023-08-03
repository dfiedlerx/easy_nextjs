export const pushMock = jest.fn()

const useRouterMock = {
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  push: pushMock,
}


export default useRouterMock
