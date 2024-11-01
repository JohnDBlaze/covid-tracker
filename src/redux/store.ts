import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import covidReducer from './covidSlice';

export const store = configureStore({
    reducer: {
        covid: covidReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
