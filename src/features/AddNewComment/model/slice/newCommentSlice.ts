import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface NewCommentSchema {
  textComment: string
}

const initialState: NewCommentSchema = {
  textComment: ''
}

const newCommentSlice = createSlice({
  name: 'NewComment',
  initialState,
  reducers: {
    setTextComment: (state: NewCommentSchema, action:PayloadAction<string>) => {
      state.textComment = action.payload
    },
    clearTextComment: (state:NewCommentSchema) => {
      state.textComment = ''
    }
  }
})

export const {setTextComment, clearTextComment} = newCommentSlice.actions
export const newCommentReducer = newCommentSlice.reducer