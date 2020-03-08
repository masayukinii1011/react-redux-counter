import { combineReducers } from 'redux'
import count from './count'

//複数のreducerモジュール(があった場合)を結合
export default combineReducers({ count })