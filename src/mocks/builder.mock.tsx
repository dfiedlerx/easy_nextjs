import { Builder } from "@/types/redux/builder.type"

const builderMock: Builder = {
  query: (): any => { return jest.fn() },
  mutation: (): any => { return jest.fn() }
}

export default builderMock
