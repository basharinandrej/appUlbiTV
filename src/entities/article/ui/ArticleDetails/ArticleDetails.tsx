import {Fragment, useCallback, VFC} from "react"
import {Loader, setClassNames, useAppDispatch, useMount, useUnMount} from "@shared/index";
import {useSelector, useStore} from "react-redux";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {useParams} from "react-router-dom";
import {articleDetailsReducer} from "../../model/slice/articleDetailsSlice";
import {fetchArticleDetailsById} from "../../model/asyncAction/fetchArticleDetailsById";
import {getArticleDetailsData, getArticleDetailsIsLoading} from "../../model/selectors/selectors";
import {AvatarArticleDetails} from "./components/AvatarArticleDetails/AvatarArticleDetails";
import {ArticleBlockTextComponent} from "../ArticleBlockTextComponent/ArticleBlockTextComponent";
import {ArticleBlockImageComponent} from "../ArticleBlockImageComponent/ArticleBlockImageComponent";
import {ArticleBlockCodeComponent} from "../ArticleBlockCodeComponent/ArticleBlockCodeComponent";
import {ArticleBlock, ArticleBlockType} from "../../model/types/article";
import {Comment} from "@entities/comment";


import styles from './ArticleDetails.module.sass'

const avatarSrc = 'https://cdn4.iconfinder.com/data/icons/profession-and-occupation-3/512/IT_specialist-occupation-avatar-job-character-profession-512.png'


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

    const renderBlocks = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.TEXT:
                return <ArticleBlockTextComponent key={block.id} title={block.title} paragraphs={block.paragraphs} />
            case ArticleBlockType.IMAGE:
                return <ArticleBlockImageComponent key={block.id} src={block.src} title={block.title} />
            case ArticleBlockType.CODE:
                return <ArticleBlockCodeComponent key={block.id} code={block.code}/>
            default:
                return ''
        }
    }, [])

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


                    {articleDetails?.blocks?.map(renderBlocks)}


                    {/*widget comment*/}
                    <h3 className={styles.subtitle}>Комментарий</h3>
                    <Comment
                        avatarSrc={avatarSrc}
                        name={'name'}
                        textComment={'textComment'}
                    />
                    <br/>
                    <Comment
                        avatarSrc={avatarSrc}
                        name={'name'}
                        textComment={'textComment'}
                    />
                </Fragment>
            }
        </div>
    )
}

interface ArticleDetailsProps {
    className?: string
}