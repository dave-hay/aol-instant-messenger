import {configureStore} from "@reduxjs/toolkit";

import userSlicer   from './reducers/user'

export default configureStore({
  reducer:
    {
      user: userSlicer,
    }
});
