import {ReactNode, VFC, useRef, memo, MouseEvent} from "react"
import {useInfinityScroll, setClassNames} from "@shared/index";
import styles from './mainContentContainer.module.sass'

export const MainContentContainer: VFC<PageProps> = memo((props) => {
  const {children, className, onScrollEnd, onClick} = props
  const refRootElement = useRef<HTMLDivElement | null>()
  const refTargetElement = useRef<HTMLDivElement | null>()

  useInfinityScroll({
    callback: onScrollEnd,
    refRootElement,
    refTargetElement
  })

  return (
      <div
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
  onScrollEnd: () => void
  onClick: (e: MouseEvent<HTMLDivElement>) => void
}