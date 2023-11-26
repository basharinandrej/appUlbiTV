import {StateSchemaKey, StoreWithStoreManager} from "@app/providers/StoreProvider";
import {Reducer} from "@reduxjs/toolkit";
import {useAppDispatch} from "@shared/libs/hooks/appDispatch";
import {useEffect} from "react";
import {useStore} from "react-redux";

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]


export const useDynamicLoaderReducers = (reducers: ReducersList, removeAfterUnmount = true) => {
  const dispatch = useAppDispatch()
  const store = useStore() as StoreWithStoreManager

  Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
    useEffect(() => {
      const hasReducer = store.reducerManager.has(key)

      if(!hasReducer) {
        dispatch({type: `@INIT_${key}`})
        store.reducerManager.add(key, reducer)
      }

      return () => {
        if(removeAfterUnmount) {
          dispatch({type: `@UNINIT_${key}`})
          store.reducerManager.remove(key)
        }
      }
    }, [])
  })

}