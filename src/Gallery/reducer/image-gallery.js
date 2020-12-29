import { apiTypeCreator, actionCreator } from "../utils/common";

export const PREFIX_IMAGE_GALLERY = "IMAGE_GALLERY";

const types = {
  ...apiTypeCreator(PREFIX_IMAGE_GALLERY)
};

const imagesFetch = actionCreator(types[PREFIX_IMAGE_GALLERY].FETCH);
const imagesSuccess = actionCreator(types[PREFIX_IMAGE_GALLERY].SUCCESS);
const imagesError = actionCreator(types[PREFIX_IMAGE_GALLERY].ERROR);
const imagesReset = actionCreator(types[PREFIX_IMAGE_GALLERY].RESET);

const actions = {
  imagesFetch,
  imagesSuccess,
  imagesError,
  imagesReset
};

const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null
};

export const imageGalleryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case types[PREFIX_IMAGE_GALLERY].FETCH: {
      return {
        ...state,
        loading: true
      };
    }

    case types[PREFIX_IMAGE_GALLERY].SUCCESS: {
      const { data } = payload;
      return {
        ...state,
        data,
        loading: false
      };
    }

    case types[PREFIX_IMAGE_GALLERY].ERROR: {
      const { error } = payload;
      return {
        ...state,
        error
      };
    }

    case types[PREFIX_IMAGE_GALLERY].RESET: {
      return {
        ...INITIAL_STATE
      };
    }

    default:
      return state;
  }
};

const selectors = {
  getState: (state) => state.imageGallery
};

export default imageGalleryReducer;
export { selectors, actions, types };
