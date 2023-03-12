import React from 'react'
import {ErrorBoundaryProps, StateProps} from '../types/types'
import { Page404 } from '@pages/index'

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, StateProps> {
    constructor(props: ErrorBoundaryProps) {
      super(props)
      this.state = {
        hasError: false,
        error: null
      }
    }
  
    static getDerivedStateFromError() {
      return { hasError: true }
    }
  
    componentDidCatch(error: Error) {
      this.setState({ error })
    }
  
    render() {
      if (this.state.hasError) {
        return <Page404 error={this.state.error}/>
      }
  
      return this.props.children 
    }
}
