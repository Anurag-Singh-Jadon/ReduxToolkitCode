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

import {configureStore} from '@reduxjs/toolkit';  //We can use createReducer or createSlice to initialize value      

import counterReducer from './counter';
import authReducer from './auth';



const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer},
});


export default store;