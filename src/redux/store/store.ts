import { Tuple, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { useDispatch } from 'react-redux'


const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;