import {VFC, Fragment} from 'react'
import {ArticleListing} from '@features/ArticlesListing'
import {Sort, Search} from "@features/FiltersForArticlesListing";

import {HeaderArticleListing} from "@widgets/HeaderArticleListing";

const PageArticles: VFC<pageArticlesProps> = () => {

  return (
      <Fragment>
        <HeaderArticleListing />
        <Sort />
        <Search />
        <ArticleListing />
      </Fragment>
  )
}

export default PageArticles

interface pageArticlesProps {
  className?: string
}