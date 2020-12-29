import { call, put, delay, takeLatest } from "redux-saga/effects";
import { types, PREFIX_IMAGE_GALLERY, actions } from "../reducer/image-gallery";
import { getList } from "../../services/index";

function* worker() {
  try {
    const params = {};
    const { data } = yield call(getList, params);
    yield put(actions.imagesSuccess({ data }));
  } catch (error) {
    yield put(actions.imagesError({ error }));
    yield delay(5000);
    yield put(actions.imagesReset());
  }
}

export function* imageGallerySaga() {
  yield takeLatest(types[PREFIX_IMAGE_GALLERY].FETCH, worker);
}
