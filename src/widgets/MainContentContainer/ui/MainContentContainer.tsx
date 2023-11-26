import {ReactNode, VFC, useRef, memo, UIEvent, MouseEvent, useCallback} from "react"
import {useInfinityScroll, setClassNames, useAppDispatch, useDynamicLoaderReducers, useThrottle} from "@shared/index";
import styles from './mainContentContainer.module.sass'
import {keepScrollPosition, keepScrollPositionReducer, PayloadKeepScroll} from "@features/KeepScrollPosition";
import {useLocation} from "react-router-dom";

const reducers = {
  'keepScrollPosition': keepScrollPositionReducer,
}

export const MainContentContainer: VFC<PageProps> = memo((props) => {
  const {children, className, onScrollEnd, onClick} = props
  const refRootElement = useRef<HTMLDivElement | null>()
  const refTargetElement = useRef<HTMLDivElement | null>()

  const location = useLocation()
  const dispatch = useAppDispatch()
  useDynamicLoaderReducers(reducers, false)

  useInfinityScroll({
    callback: onScrollEnd,
    refRootElement,
    refTargetElement
  })

  const keepPositionScrollHandler = useCallback((...args) => dispatch(keepScrollPosition.setPosition(...args)), [])
  const throttledKeepScrollPosition = useThrottle(keepPositionScrollHandler)

  const onScrollHandler = (e: UIEvent<HTMLElement>) => {
    const value = e.currentTarget.scrollTop

    const payload: PayloadKeepScroll = {
      route: location.pathname,
      position: value
    }

    throttledKeepScrollPosition(payload)
  }

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