import {Country} from "@shared/index";
import {Currency} from "@shared/index";

export interface Profile {
    name?: string,
    avatar?: string,
    surname?: string,
    age?: number,
    country?: Country,
    currency?: Currency,
    city?: string
}

export interface ProfileSchema {
    data: Profile
    form?: Profile
    isLoading: boolean
    isEditable: boolean
    error: string
}

