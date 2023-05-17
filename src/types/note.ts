export type NoteData = {
  _id: string;
  title: string;
  description: string;
  date: string;
  done?: boolean;
}

export type CreateNoteData = Omit<NoteData, "_id">

export type UpdateNoteData = Partial<NoteData> & { _id: string }

export type UpdateNoteDataPayload = Partial<Omit<NoteData, "_id">>