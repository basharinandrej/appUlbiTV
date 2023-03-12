import { Routes, Route } from 'react-router-dom'
import { mapRoutes } from '@app/providers/AppRoutes'
import {PageLoader} from "@widgets/PageLoader/ui/PageLoader";
import { Suspense } from 'react'

export const AppRoutes = () => {

  return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(mapRoutes).map(({element, path}, idx) => {
            return <Route key={path+idx} path={path} element={element} />
          })}
        </Routes>
      </Suspense>
  )
}