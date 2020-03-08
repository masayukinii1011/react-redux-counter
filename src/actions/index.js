export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//ActionCreator。Actionを返すメソッド
export const increment = () => (
  //Action。Storeのstateを変更するためのメッセージ
  {
    type: 'INCREMENT'
  }
)

export const decrement = () => (
  {
    type: 'DECREMENT'
  }
)