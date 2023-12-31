export interface GetAllEmployerApiResponse {
    status: string
    EmployerData: EmployerDataApiResponse[]
  }
  
  export interface EmployerDataApiResponse {
    _id: string
    firstName: string
    lastName: string
    email: string
    mobile: number
    password: string
    isActive: boolean
    isVerified: boolean
    idProof_img: string
    __v: number
  }