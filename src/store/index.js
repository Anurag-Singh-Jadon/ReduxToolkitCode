// import { createStore } from 'redux'




// const counterReducer = (state = {counter: 0},action) =>{
//  if(action.type === 'increment'){
//     return{
//         counter: state.counter + 1
//     };
//  }

//  if(action.type === 'increase'){
//     return{
//         counter: state.counter + action.amount
//     }
//  }
//  if(action.type === 'decrement'){
//     return{
//         counter: state.counter - 1
//     };
//  }

//  return state;
// };

// const store = createStore(counterReducer);

// export default store;


// This Hiding Code means I am showing Toggle functionality in down and If we want normal functionality we can use upper code

import {createSlice,configureStore} from '@reduxjs/toolkit';  //We can use createReducer or createSlice to initialize value      
const initialCounterState = {counter: 0, showCounter: true}
const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState =  {
    isAuthenticated: false
};
const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
});



const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;