import {useCallback, VFC} from "react"
import {useTranslation} from "react-i18next"
import {Input, setClassNames, useAppDispatch} from "@shared/index";
import {useSelector} from "react-redux";
import {getSearch} from "../../model/selectors/selectors";
import {actionFiltersArticle} from "../../model/slice/filterForArticlesListingSlice";

import styles from './search.module.sass'

//todo добавить инициалтзацию стора, но нужна проверка, что этого стора небыло раньше


export const Search: VFC<searchProps> = () => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch()

  const search = useSelector(getSearch)

  const onChangeHandler = useCallback((value) => {
    dispatch(actionFiltersArticle.setSearch(value))
  }, [])

  return (
      <div className={setClassNames(styles.search, {}, [])}>
        {t('Поиск')}
        <Input externalValue={search} onChange={onChangeHandler} placeholder={'Введите запрос'} />
      </div>
  )
}

interface searchProps {
  className?: string
}