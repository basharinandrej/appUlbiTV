import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/libs/setClassNames";
import {Button, ButtonType} from "@shared/index";

import styles from './profileCardHeader.module.sass'

export const ProfileCardHeader: VFC<ProfileCardHeaderProps> = (props) => {
    const {className, isEditable, onEdit, onCancel} = props
    const {t} = useTranslation()
    return (
        <div className={setClassNames(styles.profileCardHeader, {}, [className])}>
            {!isEditable && <Button
                buttonType={ButtonType.GHOST}
                onClick={onEdit}
            >
                {t('Редактировать')}
            </Button>}
            {isEditable && <Button
                buttonType={ButtonType.GHOST_CANCEL}
                onClick={onCancel}
            >
                {t('Отменить')}
            </Button>}
        </div>
    )
}

interface ProfileCardHeaderProps {
    className?: string
    isEditable: boolean
    onEdit: () => void
    onCancel: () => void
}