import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState : {counter : 0},
    reducers:{
        increament(state,action){
            state.counter +=1;
        },
        decreament(state,action){
            state.counter -=1;
        },
        addby(state,action){
            state.counter +=Number.parseInt(action.payload);
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

export const actions = counterSlice.actions;
export default store;