import {useCallback, VFC} from 'react'
import {setClassNames} from '@shared/libs/setClassNames'
import {Loader, useAppDispatch, useMount, useUnMount} from '@shared/index'
import {useSelector, useStore} from 'react-redux'
import {StoreWithStoreManager} from '@app/providers/StoreProvider'
import {ProfileCard} from '@entities/profileCard'
import {getUserData} from "@entities/user";
import {ProfileCardHeader} from '@entities/profileCard/ui/components/profileCardHeader/profileCardHeader'
import {profileReducer, setIsEditable, editProfile, cancelIsEditable} from '../model/slice/profileSlice'
import {Profile} from '../model/types/types'
import {fetchDataProfile} from '../model/asyncActions/fetchDataProfile'
import { getProfileData } from '../model/selectors/getProfileData'
import {getIsLoading} from '../model/selectors/getIsLoading'
import {getEditable} from '../model/selectors/getEditable'
import {getIsChangeValues} from '../model/selectors/getIsChangeValues'
import {updateProfile} from '../model/asyncActions/updateProfile'

const PageProfile: VFC<PageProfileProps> = (props) => {
    const {className} = props
    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithStoreManager

    const profile = useSelector(getProfileData)
    const isLoading = useSelector(getIsLoading)
    const isEditable = useSelector(getEditable)
    const isChangeValues = useSelector(getIsChangeValues)
    const user = useSelector(getUserData)

    useMount(() => {
        dispatch({type: 'INIT_ProfileReducer'})
        store.reducerManager.add('profile', profileReducer)
        dispatch(fetchDataProfile(user.id.toString()))
    })
    useUnMount(() => {
        dispatch({type: 'UNINIT_ProfileReducer'})
        store.reducerManager.remove('profile')
    })

    const onSaveProfile = useCallback(() => {
        dispatch(updateProfile())
    }, [dispatch])

    const onClickEditProfile = useCallback(() => {
        dispatch(setIsEditable())
    }, [dispatch, setIsEditable])

    const onClickCancelProfile = useCallback(() => {
        dispatch(cancelIsEditable())
    }, [dispatch, cancelIsEditable])

    const onChangeFormProfile = useCallback((key: keyof Profile, value: Profile[keyof Profile]) => {
        const form: Partial<Profile> = {
            [key]: value
        }
        dispatch(editProfile(form))
    }, [dispatch])

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
                onSave={onSaveProfile}
                isChangeValues={isChangeValues}
            />

            {profile && <ProfileCard
                profile={profile}
                isEditable={isEditable}
                onChangeFormProfile={onChangeFormProfile}
            />}
        </div>
    )
}

export default PageProfile

interface PageProfileProps {
    className: string
}