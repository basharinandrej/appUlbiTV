import {Button, ButtonType} from '@shared/index'
import {FC} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment} from '../model/slices/counterSlice'
import {getCounterValue} from '../model/selectors/getCounterValue'

import styles from './counter.module.sass'

export const Counter: FC = () => {
    const dispatch = useDispatch()
    const count = useSelector(getCounterValue)

    return (
        <div className={styles.counter}>
            <b className={styles.cnt}>{count}</b>
            <div className={styles.boxBtn}>
                <Button onClick={() => dispatch(increment())} buttonType={ButtonType.GHOST}>+1</Button>
                <Button onClick={() => dispatch(decrement())} buttonType={ButtonType.GHOST}>-1</Button>
            </div>
        </div>
    )
}