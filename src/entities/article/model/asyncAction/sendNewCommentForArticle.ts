import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkApiConfig} from '@app/providers/StoreProvider'
import {IComment} from '@entities/comment'
import {fetchCommentsByArticleId} from "../asyncAction/fetchCommentsByArticleId"
import {getArticleDetailsData} from "../selectors/selectors";
import {getUserData} from "@entities/user";

export const sendNewCommentForArticle = createAsyncThunk<IComment, void, ThunkApiConfig<string>>(
    'article/sentNewCommentForArticle',
    async (_, thunkAPI ) => {
      const {extra, rejectWithValue, getState, dispatch} = thunkAPI
      const state = getState()

      const {newComment} = state
      const { id:articleId } = getArticleDetailsData(state)
      const user = getUserData(state)

      try {
        const response = await extra.api.post<IComment>('/comments/', {
          userId: user?.id?.toString(),
          name: user?.username,
          textComment: newComment.textComment,
          articleId
        })

        dispatch(fetchCommentsByArticleId(articleId))
        return response.data
      } catch (err) {
        return rejectWithValue({msg: err.response?.data?.message})
      }
    }
)