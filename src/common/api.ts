import axios from "axios";
import { PROFILE_STORAGE } from "@/tokens/storage";
import { UserLoginData, UserSignupData } from "@/types/auth-entities";
import { CreateNoteData, NoteData, UpdateNoteDataPayload } from "@/types/note";
import envConfig from "@/config/envConfig";

const API = axios.create({ baseURL: envConfig.API_URL + envConfig.API_PREFIX });

API.interceptors.request.use((req) => {
  let token = localStorage.getItem(PROFILE_STORAGE);
  if (token) {
    req.headers.authorization = `Bearer ${
      JSON.parse(token).token
    }`;
  }
  return req;
});

// for authentication

export const signIn = (userData: UserLoginData) => API.post("/users/signin", userData);
export const signUP = (userData: UserSignupData) => API.post("/users/signup", userData);

// for CRUD features

export const fetchNotes = () => API.get("/notes");
export const createNote = (newNote: CreateNoteData) => API.post("/notes", newNote);
export const updateNote = (id: string, updatedNote: UpdateNoteDataPayload) =>
  API.patch(`/notes/${id}`, updatedNote);
export const deleteNote = (id: string) => API.delete(`/notes/${id}`);
export const updateNoteChecked = (id: string) => API.get(`/notes/${id}`);

// for novu implementation
export const sendSms = (note: NoteData) => API.post("/notes/send-sms", note);
export const sendEmail = (note: NoteData) => API.post("/notes/send-email", note);
export const deleteInApp = (note: NoteData) => API.post("/notes/delete", note);
