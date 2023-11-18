import {ReactNode, VFC, useRef, memo} from "react"
import {useInfinityScroll} from "@shared/index";
import styles from './page.module.sass'

export const Page: VFC<PageProps> = memo((props) => {
  const {children, onScrollEnd} = props
  const refRootElement = useRef<HTMLDivElement | null>()
  const refTargetElement = useRef<HTMLDivElement | null>()

  useInfinityScroll({
    callback: onScrollEnd,
    refRootElement,
    refTargetElement
  })

  return (
      <div ref={refRootElement} className={styles.wrapper}>
        {children}

        <div ref={refTargetElement}/>
      </div>
  )
})

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd: () => void
}