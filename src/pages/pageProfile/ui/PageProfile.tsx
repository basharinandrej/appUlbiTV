import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/libs/setClassNames";
import {useAppDispatch, useMount} from "@shared/index";
import {fetchDataProfile} from "@pages/index";

const PageProfile: VFC<PageProfileProps> = (props) => {
    const {className} = props
    const {t} = useTranslation()
    const dispatch = useAppDispatch()

    useMount(() => dispatch(fetchDataProfile()))
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