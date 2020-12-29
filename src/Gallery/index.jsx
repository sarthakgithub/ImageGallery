import React from "react";
import createSagaMiddleware from "redux-saga";
import { Provider, connect } from "react-redux";
import {
  createStore,
  compose,
  bindActionCreators,
  applyMiddleware
} from "redux";
import reducer, {
  imageGalleryActions,
  imageGallerySelectors
} from "./reducer/index";

import rootSaga from "./sagas/index";
import Gallery from "./components/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const mapStateToProps = (state) => {
  return {
    imageGallery: imageGallerySelectors.getState(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    imageGalleryActions: bindActionCreators(imageGalleryActions, dispatch)
  };
};

const ImageGalleryConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

const ImageGalleryWrapper = (props) => {
  return (
    <Provider store={store}>
      <ImageGalleryConnect {...props} />
    </Provider>
  );
};

export default ImageGalleryWrapper;
