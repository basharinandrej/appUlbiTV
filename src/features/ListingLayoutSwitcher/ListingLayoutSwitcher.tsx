import {useCallback, VFC} from "react"
import {Button, useAppDispatch} from "@shared/index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faTableCellsLarge} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {getViewListing, toggleViewListing} from "@features/ArticlesListing";
import {ViewListing} from '@features/ArticlesListing'

export const ListingLayoutSwitcher: VFC<ListingLayoutSwitcherProps> = () => {
  const dispatch = useAppDispatch()
  const viewListing = useSelector(getViewListing)

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