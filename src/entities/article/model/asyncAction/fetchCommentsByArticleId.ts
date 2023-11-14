import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkApiConfig} from "@app/providers/StoreProvider";
import {IComment} from "@entities/comment";
import {getUserData, Roles} from "@entities/user";


export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string, ThunkApiConfig<string>>(
    'comments/fetchComments',
    async (articleId, thunkAPI ) => {
      const {extra, rejectWithValue, getState} = thunkAPI

      const user = getUserData(getState())
      try {
        const response = await extra.api.get<IComment[]>('/comments', {
          params: {
            articleId,
            _sort: 'id',
            _order: 'desc',
            _expand: 'user'
          }
        })

        const comments: IComment[] = response.data.map((comment) => {
          const isAdmin = user.roles.find((role) => role === Roles.ADMIN)
          const isItMe = comment.userId.toString() === user.id

          if(isItMe || isAdmin) {
            return {
              ...comment,
              canDelete: true
            }
          } else {
            return {
              ...comment,
              canDelete: false
            }
          }
        })

        return comments
      } catch (err) {
        return rejectWithValue({msg: err.response?.data?.message})
      }
    }
)