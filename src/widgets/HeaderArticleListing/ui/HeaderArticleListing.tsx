import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/index";
import {ListingLayoutSwitcher} from "@features/ListingLayoutSwitcher";

import styles from './headerArticleListing.module.sass'

export const HeaderArticleListing: VFC<HeaderArticleListingProps> = (props) => {
  const {className} = props
  const {t} = useTranslation()
  return (
      <div className={setClassNames(styles.headerArticleListing, {}, [className])}>
          <h1 className={styles.title}>{t('Articles')}</h1>

          <ListingLayoutSwitcher />
      </div>
  )
}

interface HeaderArticleListingProps {
  className?: string
}