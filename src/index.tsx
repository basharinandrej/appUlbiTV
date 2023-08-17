import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ContextThemeProvider } from '@app/providers/ThemeProvider'
import { ErrorBoundary } from '@app/providers/ErrorBoundary'
import { StoreProvider } from '@app/providers/StoreProvider'
import {App} from '@app/index'

import '../styles/index.sass'


render(
    <StoreProvider>
        <BrowserRouter>
            <ContextThemeProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ContextThemeProvider>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
)