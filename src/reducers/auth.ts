import { RootState } from '@/store';
import { PROFILE_STORAGE } from '@/tokens/storage';
import { AuthResponseData } from '@/types/auth-entities';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: AuthResponseData = {
  token: '',
  result: {
    _id: '',
    name: '',
    email: ''
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    auth: (state, action: PayloadAction<AuthResponseData>) => {
      localStorage.setItem(PROFILE_STORAGE, JSON.stringify({...action?.payload}));
      state = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem(PROFILE_STORAGE);
      state = initialState;
    }
  }
})

export const { auth, logout } = authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
