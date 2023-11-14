export interface UserSchema {
    id: string | null
    username: string
    userWasInit: boolean
    avatar?: string
}