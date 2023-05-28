import {createSelector} from '@reduxjs/toolkit'
import {getCounter} from '@entities/counter/model/selectors/getCounter'

export const getCounterValue = createSelector(getCounter,
    counter => counter.value
)