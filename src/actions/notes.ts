import { Dispatch } from "react";
import * as api from "../common/api";
import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { CreateNoteData, NoteData, UpdateNoteData } from "@/types/note";

export const getNotes = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data } = await api.fetchNotes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error: any) {
    console.log("getNotes error", error);
  }
};

export const createNote = (note: CreateNoteData) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data } = await api.createNote(note);
    dispatch({ type: "CREATE", payload: data });
    toast.success("note added!!");
  } catch (error: any) {
    console.log("createNote error", error);
  }
};

export const updateNote = (id: string, note: UpdateNoteData) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data } = await api.updateNote(id, note);
    dispatch({ type: "UPDATE", payload: data });
    toast.success("note updated!!");
  } catch (error: any) {
    console.log("updatedNote error", error);
  }
};

export const deleteNote = (id: string) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    await api.deleteNote(id);
    dispatch({ type: "DELETE", payload: id });
    toast.warning("note deleted!!");
  } catch (error: any) {
    console.log("deleteNote error", error);
  }
};

export const sendSmsNotification = (note: NoteData) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const response = await api.sendSms(note);
    console.log("sms notification", response);
  } catch (error: any) {
    console.log("sendSms error", error);
    toast.error(error.response.data.message);
  }
};

export const sendEmailNotification = (note: NoteData) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const response = await api.sendEmail(note);
    console.log("email notification", response);
  } catch (error: any) {
    console.log("sendEmail error", error);
    toast.error(error.response.data.message);
  }
};

export const deleteTodoInApp = (note: NoteData) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const response = await api.deleteInApp(note);
    console.log("deleteInApp response", response);
  } catch (error: any) {
    console.log("deleteTodoInApp error", error);
  }
};

export const toggleTodo = (id: string) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const res = await api.updateNoteChecked(id);

    dispatch({ type: "TOGGLE_DONE", payload: res.data });
  } catch (error: any) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};

