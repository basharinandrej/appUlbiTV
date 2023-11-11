import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkApiConfig} from "@app/providers/StoreProvider";
import {IComment} from "@entities/comment";


export const sendNewComment = createAsyncThunk<unknown, void, ThunkApiConfig<string>>(
    'comment/sentNewComment',
    async (_, thunkAPI ) => {
      const {extra, rejectWithValue, getState} = thunkAPI
      const {user, newComment, articleDetails} = getState()

      try {
        const response = await extra.api.post<IComment>('/comments/', {
          userId: user.id,
          name: user.username,
          textComment: newComment.textComment,
          articleId: articleDetails.data.id
        })

        return response.data
      } catch (err) {
        return rejectWithValue({msg: err.response?.data?.message})
      }
    }
)