import { ReactNode } from 'react'

export interface ErrorBoundaryProps {
    children: ReactNode
}

export interface StateProps {
    hasError: boolean
    error?: Error
}