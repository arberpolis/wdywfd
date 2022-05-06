import { configureStore } from '@reduxjs/toolkit';
import { counterSliceReducer } from './features/counter';
import { weatherSlice } from './features/weather';


export const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        [weatherSlice.reducerPath]: weatherSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
