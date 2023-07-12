import { createStore } from "redux";


function counterReducer(state={count:0},action)
{
    if(action.type==='increment2')
    {
        return {
            count:state.count+2
        }
    }
    else if(action.type==='decrement2')
    {
        return {
            count:state.count-2
        }
    }
    return state;
}


const store = createStore(counterReducer);

export default store;