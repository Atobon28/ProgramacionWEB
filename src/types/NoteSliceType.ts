export type NoteType = {
  id: string;
  title: string;
  description: string;
};

export type NotesSliceType = {
  notesList: NoteType[];
};