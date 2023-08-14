import {VFC} from "react"
import {setClassNames} from "@shared/libs/setClassNames";
import {useAppDispatch, useMount, useUnMount} from "@shared/index";
import {useStore} from "react-redux";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import { profileReducer } from "../model/slice/profileSlice";
import {fetchDataProfile} from "../model/asyncActions/fetchDataProfile";

const PageProfile: VFC<PageProfileProps> = (props) => {
    const {className} = props
    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithStoreManager

    useMount(() => {
        dispatch({type: 'INIT_ProfileReducer'})
        store.reducerManager.add('profile', profileReducer)
        dispatch(fetchDataProfile())
    })
    useUnMount(() => {
        dispatch({type: 'UNINIT_ProfileReducer'})
        store.reducerManager.remove('profile')
    })
    return (
        <div className={setClassNames('', {}, [className])}>
            <p>Hello world</p>
        </div>
    )
}

export default PageProfile

interface PageProfileProps {
    className: string
}