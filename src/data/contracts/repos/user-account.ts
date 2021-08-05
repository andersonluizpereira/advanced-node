export interface LoadUserAccountRespository {
  load: (params: LoadUserAccountRespository.params) => Promise<void>
}

export namespace LoadUserAccountRespository {
  export type params = {
    email: string
  }
}
