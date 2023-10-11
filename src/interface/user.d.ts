export interface IUserPayload {
  email: string;
  password: string;
  name?: string;
}

interface IRegisterPayload extends IUserPayload {
  repeatPassword: string;
}

interface ILoginPayload {
  email: string;
  password: string;
}

interface IUserData {
  email: string
  name: string
  createdAt: string
  updatedAt: string
  id: string
}
interface IUserSuccessResponse {
  success: boolean
  message: string
  data:IUserData
  token: string
}

interface IFetchUsers {
  success: boolean
  message: string
  data: IUserData[]
  token: string
}

