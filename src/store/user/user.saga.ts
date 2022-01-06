import { put, takeEvery, all, call } from 'redux-saga/effects'
import {userActions} from "./user.slice";
import sessionService from "../../services/session/session.service";
import {AccessTokenStorageKey, UserAction} from "./user.types";
import {PostSessionNew} from "../../services/user/user.types";

export function* login(props: UserAction) {
    try {
        yield put(userActions.setSettings({ isLoading: true }))
        const { email, password } = props.payload
        // @ts-ignore
        const { data: { user, accessToken } }: PostSessionNew = yield call(sessionService().postSessionNew, { email, password })
        localStorage.setItem(AccessTokenStorageKey, accessToken)

        yield put(userActions.setData({ ...user }))
    } catch (error) {
        // @ts-ignore
        yield put(userActions.setError(error.response.data.message))
    } finally {
        yield put(userActions.setSettings({ isLoading: false }))
    }
}

function* watchLogin() {
    yield takeEvery('user/login', login)
}

export default function* userSaga() {
    yield all([
        watchLogin(),
    ])
}
