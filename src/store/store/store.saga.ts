import userSaga from "../user/user.saga";
import {all} from "redux-saga/effects";

export default function* storeSaga() {
    yield all([userSaga()])
}
