import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkApiConfig} from "@app/providers/StoreProvider";
import {IComment} from "@entities/comment";


export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string, ThunkApiConfig<string>>(
    'comments/fetchComments',
    async (articleId, thunkAPI ) => {
      const {extra, rejectWithValue} = thunkAPI

      try {
        const response = await extra.api.get<IComment[]>('/comments', {
          params: {
            articleId,
            _sort: 'id',
            _order: 'desc',
            _expand: 'user'
          }
        })

        return response.data
      } catch (err) {
        return rejectWithValue({msg: err.response?.data?.message})
      }
    }
)