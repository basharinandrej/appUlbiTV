import PageAbout from './pageAbout/ui/PageAbout.async'
import PageHome from './pageHome/ui/PageHome.async'
import PageProfile from './pageProfile/ui/pageProfile.async'
import {fetchDataProfile} from './pageProfile/model/asyncActions/fetchDataProfile'
import {profileReducer} from './pageProfile/model/slice/profileSlice'
import {ProfileSchema} from './pageProfile/model/types/types'

import Page404 from './404/ui/404'


export {PageAbout, PageHome, Page404, PageProfile, profileReducer, ProfileSchema, fetchDataProfile}