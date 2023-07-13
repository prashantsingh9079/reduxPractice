
import { createSlice,configureStore } from "@reduxjs/toolkit";

const initialCounterState = {count:0,show:true}


const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment5(state)
        {
            state.count+=5;
        },

        decrement5(state)
        {
            state.count-=5;
        },
        increment(state,action)
        {
            state.count=state.count +action.payload
        },
        toggle(state)
        {
            state.show=!state.show
        }

    }
})

const initialAuthState = {isAuthenticated:false};

const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login(state)
        {
            state.isAuthenticated=true
        },
        logout(state)
        {
            state.isAuthenticated=false
        }
    }
})


const store = configureStore({
    reducer:{counter:counterSlice.reducer, auth:authSlice.reducer}
})

export const counterAction = counterSlice.actions
export const authAction = authSlice.actions

export default store;