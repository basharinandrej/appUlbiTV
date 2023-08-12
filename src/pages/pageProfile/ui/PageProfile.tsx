import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/libs/setClassNames";

const PageProfile: VFC<PageProfileProps> = (props) => {
    const {className} = props
    const {t} = useTranslation()

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