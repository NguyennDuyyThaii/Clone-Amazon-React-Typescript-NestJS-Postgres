import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { DisplayUser } from './models/DisplayUser.interface';
import { Jwt } from './models/jwt';
import { Newuser } from './models/NewUser';
import authService from './service/auth.service';

interface AsyncState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

interface AuthSlice extends AsyncState {
    user?: DisplayUser | null;
    jwt?: Jwt;
    isAuthenticated?: boolean;
}

const initialState:AuthSlice = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    user: null,
    jwt: null,
    isAuthenticated: false
}

export const register = createAsyncThunk(
    'auth/register',
    async (user: Newuser, thunkAAPI) => {
        try {
            return authService.register(user)
        } catch (error) {
            return thunkAAPI.rejectWithValue('Unable to register!')
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload
        }),
        builder.addCase(register.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.user = null;
        })
    }
})

export default authSlice.reducer