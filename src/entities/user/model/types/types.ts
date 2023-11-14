export interface UserSchema {
    id: number | null
    username: string
    userWasInit: boolean
    avatar?: string
}