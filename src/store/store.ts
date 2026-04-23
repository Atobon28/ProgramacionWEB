import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./slices/NotesSlice";

export const storeRedux = configureStore({
  reducer: {
    notesReducer: NotesReducer,
  },
});