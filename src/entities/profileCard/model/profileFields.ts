import {ProfileField } from "../types/profileField";
import {Profile} from "@pages/index";

export const getProfileFields = (profile: Profile ): Array<ProfileField> => {
    return [
        {
            label: 'Имя',
            key: 'name',
            externalValue: profile?.name,
        },
        {
            label: 'Фамилия',
            key: 'surname',
            externalValue: profile?.surname,
        },
        {
            label: 'Возраст',
            key: 'age',
            externalValue: profile?.age,
        }
    ]
}