import {Nullable} from "@shared/index";


export const setClassNames = (className: string, mods: Record<string, boolean> = {}, addClassNames: Array<Nullable<string>> = []): string => {

    return [
        className,
        ...addClassNames,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([key, _]) => key)
    ].join(' ')
}
