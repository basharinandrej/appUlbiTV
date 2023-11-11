import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nullable} from "@shared/types/types";

export interface NewCommentSchema {
  textComment: Nullable<string>
}

const initialState: NewCommentSchema = {
  textComment: null
}

const newCommentSlice = createSlice({
  name: 'NewComment',
  initialState,
  reducers: {
    setTextComment: (state: NewCommentSchema, action:PayloadAction<string>) => {
      state.textComment = action.payload
    }
  }
})

export const {setTextComment} = newCommentSlice.actions
export const newCommentReducer = newCommentSlice.reducer