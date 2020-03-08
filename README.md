Reactの基礎とReduxを理解するためにカウンターアプリを作成してみました。  
見た目は同じですが、内部の処理的には上側がReduxを使用していないカウンター、下側がReduxを使用したカウンターです。
### Reduxを使用していないカウンター
#### コンポーネントの構造
親 > 子
src/index.js > src/components/counter.js > src/components/button.js
#### 処理の流れ
1. counter.jsにカウント状態(state)の初期値、incrementメソッド、decrementメソッドを定義します。
2. counter.jsからbutton.jsのpropsに値やメソッドを渡します。
3. button.js内でcounter.jsから渡ってきたpropsを取り出しセットします。
4. button.jsのボタンをクリックするとcounter.js内のincrementメソッドやdecrementメソッドが実行され、カウント状態(state)が更新されます。
#### state
コンポーネント内で使用できる値です。
値が変更されるとrenderが走ります。
コンストラクタで初期値を割り当て、setStateメソッドで更新します。
#### props
親コンポーネントから渡して、子コンポーネントで取り出して使用できる値です。
### Reduxを使用したカウンター
#### コンポーネントの構造
親 > 子
src/index.js > src/components/redux-counter.js > src/components/button.js
#### 処理の流れ
1. src/actions/index.jsにActionを用意します。
2. src/reducers/index.js及びsrc/reducers/count.jsにReducerを用意します。Actionのtype毎に処理を実行します。
3. src/index.jsでcreateStoreメソッドを使用し、Storeを作成します。
4. src/index.jsでProviderを使用し、Storeをコンポーネントに渡します。
5. mapStateToPropsメソッドを使用し、redux-counter.jsのpropsにStoreのstateを渡します。
6. mapDispatchToPropsメソッドを使用し、redux-counter.jsのpropsにActionを紐付けます。
7. connectメソッドを使用し、redux-counter.jsでReduxとReactコンポーネントを紐付けます。
8. ボタンを押すとActionが発生し、ReducerでStoreが更新され、コンポーネントへ反映されます。
#### Action
Storeのstateを変更するためのメッセージです。
#### Reducer
Actionから値を受け取ってStoreのstateを変換(Reduce)します。
#### State
各コンポーネントで使用するデータはここに集約します。
