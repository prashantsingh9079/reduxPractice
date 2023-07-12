import { createStore } from "redux";


function counterReducer(state={count:0},action)
{
    if(action.type==='increment5')
    {
        return {
            count:state.count+5
        }
    }
    else if(action.type==='decrement5')
    {
        return {
            count:state.count-5
        }
    }
    return state;
}


const store = createStore(counterReducer);

export default store;