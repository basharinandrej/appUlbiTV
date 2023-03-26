import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ContextThemeProvider } from '@app/providers/ThemeProvider'
import { ErrorBoundary } from '@app/providers/ErrorBoundary'
import {App} from '@app/index'


import '../styles/index.sass'


render(
    <BrowserRouter>
        <ContextThemeProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ContextThemeProvider>
    </BrowserRouter>, 
    document.getElementById('root')
)