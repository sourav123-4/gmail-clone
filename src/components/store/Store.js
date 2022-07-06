import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/index';

export default configureStore({
  reducer: {
    rootReducer
  },
  devTools:  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});