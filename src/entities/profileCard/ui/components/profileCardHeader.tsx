import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/libs/setClassNames";
import {Button, ButtonType} from "@shared/index";

import styles from './profileCardHeader.module.sass'

export const ProfileCardHeader: VFC<ProfileCardHeaderProps> = (props) => {
    const {className, isEditable, isFormValue, onEdit, onCancel, onSave} = props
    const {t} = useTranslation('profile')

    return (
        <div className={setClassNames(styles.profileCardHeader, {}, [className])}>
            {!isEditable && <Button
                buttonType={ButtonType.GHOST}
                onClick={onEdit}
            >
                {t('Редактировать')}
            </Button>}
            {isEditable && <>
                <Button
                    buttonType={ButtonType.PRIMARY}
                    onClick={onSave}
                    className={styles.saveBtn}
                    disabled={!isFormValue}
                >
                    {t('Сохранить')}
                </Button>

                <Button
                    buttonType={ButtonType.GHOST_CANCEL}
                    onClick={onCancel}
                >
                    {t('Отменить')}
                </Button>
            </>}
        </div>
    )
}

interface ProfileCardHeaderProps {
    isEditable: boolean
    onEdit: () => void
    onCancel: () => void
    onSave: () => void
    isFormValue?: boolean
    className?: string
}