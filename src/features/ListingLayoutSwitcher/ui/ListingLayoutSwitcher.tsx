import {useCallback, VFC} from "react"
import {Button, ReducersList, useDynamicLoaderReducers, useAppDispatch} from "@shared/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faTableCellsLarge} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {getViewListing} from "../model/selectors/getViewListing";
import {ViewListing} from '../model/enums/enums'
import {listingLayoutSwitcherReducer, toggleViewListing} from '../model/slice/listingLayoutSwitcherSlice'

const reducers: ReducersList = {
  'listingLayoutSwitcher': listingLayoutSwitcherReducer,
}

export const ListingLayoutSwitcher: VFC<ListingLayoutSwitcherProps> = () => {
  const dispatch = useAppDispatch()
  const viewListing = useSelector(getViewListing)
  useDynamicLoaderReducers(reducers)

  const toggleTypeListingHandler = useCallback(() => {
    dispatch(toggleViewListing())
  }, [dispatch, toggleViewListing])

  const isGrid = viewListing === ViewListing.GRID
  const isRow = !isGrid

  return (
    <Button onClick={toggleTypeListingHandler}>
      {isGrid && <FontAwesomeIcon icon={faList}/>}
      {isRow && <FontAwesomeIcon icon={faTableCellsLarge}/>}
    </Button>
  )
}

interface ListingLayoutSwitcherProps {
  className?: string
}