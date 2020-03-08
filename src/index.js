import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';
import Counter from './components/counter';
import ReduxCounter from './components/redux-counter';
import * as serviceWorker from './serviceWorker';

//reducerを元にStoreを作成。全てのstateはここに集約
const store = createStore(reducer);

ReactDOM.render(
  <React.Fragment>
    <Counter />
    {/* 作成したStoreをコンポーネントに渡す。どのコンポーネントからも参照可能 */}
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
