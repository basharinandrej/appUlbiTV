import {ReactNode, VFC, useRef, memo, UIEvent, MouseEvent} from "react"
import {
  useInfinityScroll,
  setClassNames,
  useAppDispatch,
  useDynamicLoaderReducers,
  useThrottle,
} from "@shared/index";
import styles from './mainContentContainer.module.sass'
import {keepScrollPosition, keepScrollPositionReducer, PayloadKeepScroll} from "@features/KeepScrollPosition";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {StateSchema} from "@app/providers/StoreProvider";
import {getScrollPositionByPathname} from "@features/KeepScrollPosition/model/selectors/selectors";

const reducers = {
  'keepScrollPosition': keepScrollPositionReducer,
}

export const MainContentContainer: VFC<PageProps> = memo((props) => {
  const {children, className, onScrollEnd, onClick} = props
  const refRootElement = useRef<HTMLDivElement | null>()
  const refTargetElement = useRef<HTMLDivElement | null>()

  const {pathname} = useLocation()
  const dispatch = useAppDispatch()
  useDynamicLoaderReducers(reducers, false)
  const scrollPosition = useSelector((state: StateSchema) => getScrollPositionByPathname(state, pathname))

  useInfinityScroll({
    callback: onScrollEnd,
    refRootElement,
    refTargetElement
  })

  const onScrollHandler = useThrottle((e: UIEvent<HTMLElement>) => {
    const value = e.currentTarget.scrollTop

    const payload: PayloadKeepScroll = {
      route: pathname,
      position: value
    }

    dispatch(keepScrollPosition.setPosition(payload))
  }, 500)

  return (
      <div
          onScroll={onScrollHandler}
          onClick={onClick}
          ref={refRootElement}
          className={setClassNames(styles.wrapper, {}, [className])}
      >
        {children}

        <div ref={refTargetElement}/>
      </div>
  )
})

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}
