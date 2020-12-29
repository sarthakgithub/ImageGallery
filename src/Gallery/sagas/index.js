import { all } from "redux-saga/effects";
import { imageGallerySaga } from "./image-gallery";

export default function* rootSaga() {
  yield all([imageGallerySaga()]);
}
