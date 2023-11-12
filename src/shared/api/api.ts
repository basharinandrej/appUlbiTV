import axios from 'axios'
import {LOCALSTORAGE_USER_KEY} from '@shared/constans/constans'

const authorization = localStorage.getItem(LOCALSTORAGE_USER_KEY)
console.log('>>> authorization', authorization)

export const $api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization
    }
})