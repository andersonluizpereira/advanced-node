export interface LoadUserAccountRepository {
  load: (params: LoadUserAccountRepository.params) => Promise<LoadUserAccountRepository.Result>
}

export namespace LoadUserAccountRepository {
  export type params = {
    email: string
  }
  export type Result = undefined
}

export interface CreateFacebookAccountRepository {
  createFromFacebook: (params: CreateFacebookAccountRepository.params) => Promise<void>
}

export namespace CreateFacebookAccountRepository {
  export type params = {
    email: string
    name: string
    facebookId: string
  }
}
