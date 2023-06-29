
export const initialProps = {
    type: 'text',
    placeholder: 'placeholder',
    externalValue: 'externalValue',
    externalErr: ['error', 'error 2']
}

export const controls = {
    type: {
        options: ['text', 'password'],
        control: { type: 'select' }
    },
    placeholder: {
        control: { type: 'text' }
    },
    className: {
        control: { type: 'text' }
    },
    externalValue: {
        control: { type: 'text' }
    },
    externalErr: {
        control: {type: 'object'}
    },
    onChange: {
        action: 'onChange'
    },
}