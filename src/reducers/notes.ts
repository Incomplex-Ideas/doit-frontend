import { NoteData, UpdateNoteData } from '@/types/note';
import { PayloadAction, createSlice, createAction } from '@reduxjs/toolkit'

const initialState: NoteData = {
  _id: '',
  title: '',
  description: '',
  date: '',
  done: false
}

export const updateNote = createAction<UpdateNoteData>('UPDATE');

const noteSlice = createSlice({
  name: 'notes',
  initialState: [
    initialState
  ],
  reducers: {
    create: (state, action: PayloadAction<NoteData>) => {
      state = [...state, action.payload];
    },
    delete: (state, action: PayloadAction<string>) => {
      return state.filter((note) => note._id !== action.payload);
    },
    toggleDone: (state, action: PayloadAction<any>) => {
      return state.map((note) =>
        note._id === action.payload._id ? { ...note, done: !note.done } : note
      );
    },
  },
  extraReducers(builder) {
      builder.addCase(updateNote, (state, action) => {
        let note = state.find((note) => note._id === action.payload._id);
        if (note) {
          note = { ...note, ...action.payload };
          state = [...state, note];
        }
      })
  },
})


export const { create, delete: deleteNote, toggleDone } = noteSlice.actions
export default noteSlice.reducer

// const noteReducer = (state = [], action: PayloadAction<any>) => {
//   switch (action.type) {
//     case "FETCH_ALL":
//       return action.payload;
//     case "CREATE":
//       return [...state, action.payload];
//     case "UPDATE":
//       return state.map((note) =>
//         note._id === action.payload._id ? action.payload : note
//       );
//     case "TOGGLE_DONE":
//       return state.map((note) =>
//         note._id === action.payload._id ? { ...note, done: !note.done } : note
//       );
//     case "DELETE":
//       return state.filter((note) => note._id !== action.payload);
//     default:
//       return state;
//   }
// };
