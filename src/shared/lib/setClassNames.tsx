


export const setClassNames = (className: string, mods: Record<string, boolean> = {}, addClassNames: string[] = []): string => {

    return [
        className,
        ...addClassNames,
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
    ].join(' ')
}
