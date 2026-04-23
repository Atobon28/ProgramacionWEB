import { createSlice } from "@reduxjs/toolkit";
import type { NotesSliceType } from "../../types/NoteSliceType";

const initialState: NotesSliceType = {
  notesList: [],
};

const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notesList.push({
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    deleteNote: (state, action) => {
      state.notesList = state.notesList.filter(
        (note) => note.id !== action.payload
      );
    },
  },
});

export const { addNote, deleteNote } = NotesSlice.actions;
export default NotesSlice.reducer;