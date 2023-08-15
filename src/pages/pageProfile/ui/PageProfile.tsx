import {VFC} from "react"
import {setClassNames} from "@shared/libs/setClassNames";
import {Loader, useAppDispatch, useMount, useUnMount} from "@shared/index";
import {useSelector, useStore} from "react-redux";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {ProfileCard} from "@entities/profileCard";
import { profileReducer } from "../model/slice/profileSlice";
import {fetchDataProfile} from "../model/asyncActions/fetchDataProfile";
import { getProfileData } from "../model/selectors/getProfileData";
import {getIsLoading} from "../model/selectors/getIsLoading";

const PageProfile: VFC<PageProfileProps> = (props) => {
    const {className} = props
    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithStoreManager

    const profile = useSelector(getProfileData)
    const isLoading = useSelector(getIsLoading)

    useMount(() => {
        dispatch({type: 'INIT_ProfileReducer'})
        store.reducerManager.add('profile', profileReducer)
        dispatch(fetchDataProfile())
    })
    useUnMount(() => {
        dispatch({type: 'UNINIT_ProfileReducer'})
        store.reducerManager.remove('profile')
    })

    if(isLoading) {
        return (
            <div className={setClassNames('', {}, [className])}>
                <Loader />
            </div>
        )
    }

    return (
        <div className={setClassNames('', {}, [className])}>
            <ProfileCard profile={profile}/>
        </div>
    )
}

export default PageProfile

interface PageProfileProps {
    className: string
}