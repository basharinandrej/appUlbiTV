export interface UserSchema {
    id: string | null
    username: string
    userWasInit: boolean
    avatar?: string
    roles: Roles[]
}

export enum Roles {
    USER='USER',
    ADMIN='ADMIN'
}