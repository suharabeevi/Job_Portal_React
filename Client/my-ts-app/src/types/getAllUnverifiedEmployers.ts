export interface GetAllUnverifiedEmployersApiResponse {
    _id: any
    email: any
    idProof_img: string | undefined
    status: string
    result: UnverifiedEmployersApiResponse[]
  }
  
  export interface UnverifiedEmployersApiResponse {
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