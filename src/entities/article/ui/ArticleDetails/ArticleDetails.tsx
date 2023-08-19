import {Fragment, VFC} from "react"
import {Loader, setClassNames, useAppDispatch, useMount, useUnMount} from "@shared/index";
import {useSelector, useStore} from "react-redux";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {useParams} from "react-router-dom";
import {articleDetailsReducer} from "../../model/slice/articleDetailsSlice";
import {fetchArticleDetailsById} from "../../model/asyncAction/fetchArticleDetailsById";
import {getArticleDetailsData, getArticleDetailsIsLoading} from "../../model/selectors/selectors";
import {AvatarArticleDetails} from "../components/AvatarArticleDetails/AvatarArticleDetails";

import styles from './ArticleDetails.module.sass'


export const ArticleDetails: VFC<ArticleDetailsProps> = (props) => {
    const {className} = props
    const {id} = useParams()

    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithStoreManager

    const articleDetails = useSelector(getArticleDetailsData)
    const isLoading = useSelector(getArticleDetailsIsLoading)

    useMount(() => {
        dispatch({type: 'INIT_ArticleDetails'})
        store.reducerManager.add('articleDetails', articleDetailsReducer)
        id && dispatch(fetchArticleDetailsById(id))
    })

    useUnMount(() => {
        dispatch({type: 'UNINIT_ArticleDetails'})
        store.reducerManager.remove('articleDetails')
    })

    return (
        <div className={setClassNames(styles.articleDetails, {}, [className])}>
            {isLoading
                ? <Loader />
                : <Fragment>

                    <AvatarArticleDetails
                        className={styles.avatar}
                        src={articleDetails?.img}
                    />
                    <h1 className={styles.title}>{articleDetails?.title}</h1>
                    <h3 className={styles.subtitle}>{articleDetails?.subtitle}</h3>

                    {JSON.stringify(articleDetails)}

                </Fragment>
            }
        </div>
    )
}

interface ArticleDetailsProps {
    className?: string
}