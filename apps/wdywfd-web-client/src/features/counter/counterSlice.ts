// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Counter } from './Counter';


const initialState: Counter = { value: 10 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // it's a good practice to use immutable state in redux.
            // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
            // In this case it is using immer js to create a new object and assign it to the state.
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;
