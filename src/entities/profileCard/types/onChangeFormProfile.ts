import {Profile} from "@pages/index";


export type onChangeFormProfile = (key: keyof Profile, value: Profile[keyof Profile]) => void