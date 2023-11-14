import {Fragment, useCallback, VFC} from 'react'
import {Loader, setClassNames, useAppDispatch, useMount, useUnMount} from '@shared/index'
import {useSelector, useStore} from 'react-redux'
import {StoreWithStoreManager} from '@app/providers/StoreProvider'
import {useParams} from 'react-router-dom'
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice'
import {fetchArticleDetailsById} from '../../model/asyncAction/fetchArticleDetailsById'
import {getArticleDetailsData, getArticleDetailsIsLoading} from '../../model/selectors/selectors'
import {AvatarArticleDetails} from './components/AvatarArticleDetails/AvatarArticleDetails'
import {ArticleBlockTextComponent} from '../ArticleBlockTextComponent/ArticleBlockTextComponent'
import {ArticleBlockImageComponent} from '../ArticleBlockImageComponent/ArticleBlockImageComponent'
import {ArticleBlockCodeComponent} from '../ArticleBlockCodeComponent/ArticleBlockCodeComponent'
import {ArticleBlock, ArticleBlockType} from '../../model/types/article'
import {sendNewCommentForArticle} from "../../model/asyncAction/sendNewCommentForArticle";
import {fetchCommentsByArticleId} from "../../model/asyncAction/fetchCommentsByArticleId";
import {deleteCommentForArticle} from "../../model/asyncAction/deleteCommentForArticle";
import { Comments } from '@widgets/Comments'
import {getCommentsForArticle} from "@features/CommentsListing";


import styles from './ArticleDetails.module.sass'


export const ArticleDetails: VFC<ArticleDetailsProps> = (props) => {
    const {className} = props
    const {id} = useParams()

    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithStoreManager

    const articleDetails = useSelector(getArticleDetailsData)
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const comments = useSelector(getCommentsForArticle)

    const sendNewComment = useCallback(() => {
        dispatch(sendNewCommentForArticle())
    },[dispatch])

    const fetchComments = useCallback(() => {
        id && dispatch(fetchCommentsByArticleId(id))
    },[dispatch, id])

    const onDeleteCommentHandler = useCallback((commentId: string) => {
        dispatch(deleteCommentForArticle(commentId))
    },[dispatch, deleteCommentForArticle])

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

                    <Comments
                        sendNewComment={sendNewComment}
                        fetchComments={fetchComments}
                        deleteComment={onDeleteCommentHandler}
                        comments={comments}
                    />

                    {articleDetails?.blocks?.map(renderBlocks)}
                </Fragment>
            }
        </div>
    )
}

interface ArticleDetailsProps {
    className?: string
}