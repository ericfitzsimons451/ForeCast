import {dispatch} from 'redux'
import { hasError } from '../Actions'

export const allPurposeFetch = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json()
        return data
    } catch (error) {
    }
}

export default allPurposeFetch