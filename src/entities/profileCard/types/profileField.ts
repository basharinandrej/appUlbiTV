import {Profile} from "@pages/index";

export interface ProfileField {
    label: string,
    key: keyof Profile,
    externalValue: Profile[keyof Profile]
}