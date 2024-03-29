import {useCallback, useMemo, VFC} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux";
import {OrderSort, Select, SelectOption, setClassNames, useAppDispatch, useDynamicLoaderReducers} from "@shared/index";
import {filterArticlesReducer, actionFiltersArticle} from "../../model/slice/filterForArticlesListingSlice";
import {TypeSort} from "../../model/types/types";
import {getTypeSort, getOrderSort} from "../../model/selectors/selectors";
import {fetchArticles} from "@features/ArticlesListing/model/asyncActions/fetchArticles";
import {actionsArticleListing} from "@features/ArticlesListing/model/slice/articlesSlice";

import styles from './sort.module.sass'

const reducers = {
  'filterArticles': filterArticlesReducer
}

export const Sort: VFC<SortingByViewsProps> = (props) => {
  const {className} = props

  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  useDynamicLoaderReducers(reducers)

  const typeSort = useSelector(getTypeSort)
  const orderSort = useSelector(getOrderSort)

  const optionsTypeSort = useMemo<Array<SelectOption<TypeSort>>>(() => (
      [
        {
          value: TypeSort.VIEW,
          text: t('кол-ву просмотров')
        },
        {
          value: TypeSort.CREATED_AT,
          text: t('дате создания')
        }
      ]
  ), [t])
  const optionsOrderSort = useMemo<Array<SelectOption<OrderSort>>>(() => (
    [
      {
        value: 'desc',
        text: t('по убыванию')
      },
      {
        value: 'asc',
        text: t('по возрастанию')
      }
    ]
  ), [t])

  const fetchArticleListing = () => {
    dispatch(fetchArticles())
  }

  const onChangeTypeSortHandler = useCallback((newTypeSort: TypeSort) => {
    dispatch(actionFiltersArticle.setTypeSort(newTypeSort))
    dispatch(actionsArticleListing.resetCurrentPage())
    fetchArticleListing()
  }, [dispatch])

  const onChangeOrderSortHandler = useCallback((newOrderSort: OrderSort) => {
    dispatch(actionFiltersArticle.setOrderSort(newOrderSort))
    dispatch(actionsArticleListing.resetCurrentPage())
    fetchArticleListing()
  },[dispatch])

  return (
      <div className={setClassNames(styles.sort, {}, [className])}>
        <p className={styles.label}>{t('сортировать по')}</p>
        <Select<TypeSort>
            options={optionsTypeSort}
            onChange={onChangeTypeSortHandler}
            externalValue={typeSort}
        />

        &nbsp;
        <p className={styles.label}>{t('по')}</p>
        <Select<OrderSort>
            options={optionsOrderSort}
            onChange={onChangeOrderSortHandler}
            externalValue={orderSort}
        />
      </div>
  )
}

interface SortingByViewsProps {
  className?: string
}