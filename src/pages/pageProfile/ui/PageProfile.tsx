import {useCallback, VFC} from "react"
import {setClassNames} from "@shared/libs/setClassNames";
import {Loader, useAppDispatch, useMount, useUnMount} from "@shared/index";
import {useSelector, useStore} from "react-redux";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {ProfileCard} from "@entities/profileCard";
import {ProfileCardHeader} from "@entities/profileCard/ui/components/profileCardHeader";
import {profileReducer, setIsEditable, cancelIsEditable} from "../model/slice/profileSlice";
import {fetchDataProfile} from "../model/asyncActions/fetchDataProfile";
import { getProfileData } from "../model/selectors/getProfileData";
import {getIsLoading} from "../model/selectors/getIsLoading";
import {getEditable} from "../model/selectors/getEditable";

const PageProfile: VFC<PageProfileProps> = (props) => {
    const {className} = props
    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithStoreManager

    const profile = useSelector(getProfileData)
    const isLoading = useSelector(getIsLoading)
    const isEditable = useSelector(getEditable)

    useMount(() => {
        dispatch({type: 'INIT_ProfileReducer'})
        store.reducerManager.add('profile', profileReducer)
        dispatch(fetchDataProfile())
    })
    useUnMount(() => {
        dispatch({type: 'UNINIT_ProfileReducer'})
        store.reducerManager.remove('profile')
    })

    const onClickEditProfile = useCallback(() => {
        dispatch(setIsEditable())
    }, [dispatch, setIsEditable])

    const onClickCancelProfile = useCallback(() => {
        dispatch(cancelIsEditable())
    }, [dispatch, cancelIsEditable])

    if(isLoading) {
        return (
            <div className={setClassNames('', {}, [className])}>
                <Loader />
            </div>
        )
    }

    return (
        <div className={setClassNames('', {}, [className])}>
            <ProfileCardHeader
                isEditable={isEditable}
                onEdit={onClickEditProfile}
                onCancel={onClickCancelProfile}
            />

            <ProfileCard profile={profile} isEditable={isEditable}/>
        </div>
    )
}

export default PageProfile

interface PageProfileProps {
    className: string
}