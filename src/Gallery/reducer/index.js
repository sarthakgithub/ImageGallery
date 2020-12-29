import { combineReducers } from "redux";
import imageGalleryReducer, {
  actions as imageGalleryActions,
  selectors as imageGallerySelectors
} from "./image-gallery";

const reducer = combineReducers({
  imageGallery: imageGalleryReducer
});

export default reducer;
export { imageGalleryActions, imageGallerySelectors };
