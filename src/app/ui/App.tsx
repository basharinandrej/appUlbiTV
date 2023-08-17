import {Suspense} from 'react'
import {useTheme} from '@app/providers/ThemeProvider'

import {MainLayout} from '@widgets/MainLayout'
import {AppRoutes} from '@app/providers/AppRoutes'
import {PageLoader} from '@widgets/PageLoader/ui/PageLoader'
import {PageLoaderType} from '@widgets/PageLoader/types/enums/page-loader-type'
import {useMount} from '@shared/index'
import {useDispatch} from 'react-redux'
import {initUser} from '@entities/user'


function App() {
    const {theme} = useTheme()
    const dispatch = useDispatch()

    useMount(() => {
        dispatch(initUser())
    })

    return (
        <Suspense fallback={<PageLoader type={PageLoaderType.SECONDARY}/>}>
            <div className={`app ${theme}`}>
                <MainLayout>
                    <AppRoutes />
                </MainLayout>
            </div>
        </Suspense>
    )
}

export default App