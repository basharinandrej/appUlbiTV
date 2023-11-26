import {useCallback, VFC} from "react"
import {useTranslation} from "react-i18next"
import {Button, setClassNames} from "@shared/index";
import {useNavigate} from 'react-router-dom'
import {PREV_ROUTE} from "../constants/constants";

export const BackButton: VFC<BackButtonProps> = (props) => {
  const {className} = props
  const {t} = useTranslation()
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate(PREV_ROUTE)
  }, [])

  return (
      <div className={setClassNames('', {}, [className])}>
        <Button onClick={onClickHandler}>
          {t('Назад')}
        </Button>
      </div>
  )
}

interface BackButtonProps {
  className?: string
}