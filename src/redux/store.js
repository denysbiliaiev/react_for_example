import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import createSagaMidleware from 'redux-saga'
import history from '../history'
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import rootSaga from './saga'

const sagaMiddleware = createSagaMidleware()

const enhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history), logger)

const store = createStore(reducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
