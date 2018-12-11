import { combineReducers } from 'redux'
import activeCategory from './activeCategory'
import data from './data'

export default combineReducers({
    activeCategory,
    data
})

