import { INCREMENT, DECREMENT } from '../actions'

//初期値
const initialState = { value: 0 }

//Reducer。第一引数はstate、初期値を代入。第二引数はaction、受け取るtype毎に処理を返す
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}