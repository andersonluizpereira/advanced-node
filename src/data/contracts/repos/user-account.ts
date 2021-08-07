export interface LoadUserAccountRepository {
  load: (params: LoadUserAccountRepository.params) => Promise<LoadUserAccountRepository.Result>
}

export namespace LoadUserAccountRepository {
  export type params = {
    email: string
  }
  export type Result = undefined | {
    id: string
    name?: string
  }
}

export interface SaveFacebookAccountRepository {
  saveWithFacebook: (params: SaveFacebookAccountRepository.params) => Promise<SaveFacebookAccountRepository.Result>
}

export namespace SaveFacebookAccountRepository {
  export type params = {
    id?: string
    email: string
    name: string
    facebookId: string
  }
  export type Result = {
    id: string
  }
}
