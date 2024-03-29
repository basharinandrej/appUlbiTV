import {VFC} from 'react'
import {useTranslation} from 'react-i18next'
import {setClassNames} from '@shared/libs/setClassNames'
import {Button, ButtonType} from '@shared/index'

import styles from './profileCardHeader.module.sass'

export const ProfileCardHeader: VFC<ProfileCardHeaderProps> = (props) => {
    const {className, isEditingMode, canEditable, isChangeValues, onEdit, onCancel, onSave} = props
    const {t} = useTranslation('profile')

    if(!canEditable) {
        return null
    }
    return (
        <div className={setClassNames(styles.profileCardHeader, {}, [className])}>
            {!isEditingMode && <Button
                buttonType={ButtonType.GHOST}
                onClick={onEdit}
            >
                {t('Редактировать')}
            </Button>}
            {isEditingMode && <>
                <Button
                    buttonType={ButtonType.PRIMARY}
                    onClick={onSave}
                    className={styles.saveBtn}
                    disabled={!isChangeValues}
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
    isEditingMode: boolean
    canEditable: boolean
    onEdit: () => void
    onCancel: () => void
    onSave: () => void
    isChangeValues?: boolean
    className?: string
}