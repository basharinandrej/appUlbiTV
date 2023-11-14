import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkApiConfig} from '@app/providers/StoreProvider'
import {IComment} from '@entities/comment'
import {getProfileData} from "@pages/index";
import {fetchCommentsByArticleId} from "../asyncAction/fetchCommentsByArticleId"
import {getArticleDetailsData} from "../selectors/selectors";

export const sendNewCommentForArticle = createAsyncThunk<IComment, void, ThunkApiConfig<string>>(
    'article/sentNewCommentForArticle',
    async (_, thunkAPI ) => {
      const {extra, rejectWithValue, getState, dispatch} = thunkAPI
      const state = getState()

      const {newComment} = state
      const {id:articleId} = getArticleDetailsData(state)
      const user = getProfileData(state)

      try {
        const response = await extra.api.post<IComment>('/comments/', {
          userId: user?.id.toString(),
          name: user?.name,
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