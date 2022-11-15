import { createStore, applyMiddleware, compose } from 'redux';//para compartir el estado global
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

//Store componente principal de react donde nuclea los rootreducer