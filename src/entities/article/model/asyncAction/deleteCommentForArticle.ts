import {createAsyncThunk} from "@reduxjs/toolkit";
import {IComment} from "@entities/comment";
import {ThunkApiConfig} from "@app/providers/StoreProvider";
import {fetchCommentsByArticleId} from "./fetchCommentsByArticleId";
import {getArticleDetailsData} from "../selectors/selectors";

export const deleteCommentForArticle = createAsyncThunk<IComment, string, ThunkApiConfig<string>>(
    'article/deleteCommentForArticle',
    async (commentId, thunkAPI ) => {
      const {extra, rejectWithValue, dispatch, getState} = thunkAPI

      const article = getArticleDetailsData(getState())

      try {
        const response = await extra.api.delete<IComment>(`comments/${commentId}`)

        dispatch(fetchCommentsByArticleId(article.id))
        return response.data
      } catch (err) {
        return rejectWithValue({msg: err.response?.data?.message})
      }
    }
)