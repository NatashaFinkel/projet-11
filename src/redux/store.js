import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './authenticationSlice';
import profileReducer from './profileSlice';

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        profile: profileReducer,
    },
})

export default store;