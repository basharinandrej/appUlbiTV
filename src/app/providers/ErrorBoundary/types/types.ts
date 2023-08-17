import { ReactNode } from 'react'
import {Nullable} from "@shared/index";

export interface ErrorBoundaryProps {
    children: ReactNode
}

export interface StateProps {
    hasError: boolean
    error:  Nullable<Error>
}