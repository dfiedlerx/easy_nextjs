import { api } from "@/redux/api/api"
import { setupApiStore } from "@/utils/test-utils"

const apiMock = setupApiStore(api)

export default apiMock
