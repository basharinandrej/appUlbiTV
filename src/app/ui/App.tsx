import {Suspense} from 'react'
import {useTheme} from '@app/providers/ThemeProvider'
import {Navbar} from '@widgets/index'

import {MainLayout} from '@widgets/MainLayout'
import {AppRoutes} from '@app/providers/AppRoutes'
import {PageLoader} from '@widgets/PageLoader/ui/PageLoader'
import {PageLoaderType} from '@widgets/PageLoader/types/enums/page-loader-type'


function App() {
    const {theme} = useTheme()

    return (
        <Suspense fallback={<PageLoader type={PageLoaderType.SECONDARY}/>}>
            <div className={`app ${theme}`}>
                <MainLayout>
                    <Navbar />
                    <AppRoutes />
                </MainLayout>
            </div>
        </Suspense>
    )
}

export default App