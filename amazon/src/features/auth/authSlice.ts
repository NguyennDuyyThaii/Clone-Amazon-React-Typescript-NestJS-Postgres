import {createSlice} from '@reduxjs/toolkit'

interface AsyncState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

interface AuthSlice extends AsyncState {
    
}

const initialState = {

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})