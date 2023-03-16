import { configureStore } from '@reduxjs/toolkit';
import cart from '../Reduser/CartReducer';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();