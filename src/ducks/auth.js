import { all, takeEvery, put } from 'redux-saga/effects'
import { createSelector } from 'reselect'
import { appName } from '../config'

/**
 * Constants
 * */
export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const SIGN_IN_REQUEST = `${prefix}/SIGN_IN_REQUEST`
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`
export const SIGN_IN_ERROR = `${prefix}/SIGN_IN_ERROR`

/**
 * Action creators
 * */

export const signIn = ({ email, password }) => {
    return {
        type: SIGN_IN_REQUEST,
        payload: { email, password }
    }
}

/**
 * Reducer
 * */
export default function reducer(state = {}, action) {
    const { type, payload } = action

    switch (type) {
        case SIGN_IN_SUCCESS:
            return { ...state, ...payload }
        case SIGN_IN_ERROR:
            return { ...state, ...payload }

        default:
            return state
    }
}

/**
 * Selectors
 * */
export const authSelector = (state) => state[moduleName]
export const authorizedSelector = createSelector(authSelector, (auth) => !!auth)

/**
 * Sagas
 * */

export function* signInSaga(action) {
    const { payload } = action

    yield put({
        type: SIGN_IN_SUCCESS,
        payload
    })
}

export function* saga() {
    yield all([takeEvery(SIGN_IN_REQUEST, signInSaga)])
}
