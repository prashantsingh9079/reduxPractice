import classes from './Counter.module.css';
import {  useSelector, useDispatch } from 'react-redux';
import { counterAction } from '../store';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state =>state.counter.count)
  const show = useSelector(state => state.counter.show)

  function ib5(e)
  {
    dispatch(counterAction.increment5())
  }

  function db5()
  {
    dispatch(counterAction.decrement5())
  }

  function increment()
  {
    dispatch(counterAction.increment(2))
  }

  
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      
      {show && <div className={classes.value}>{counter}</div>}
      <div >
        <button onClick={ib5} style={{margin:'1rem'}}>Increment by 5 </button>
        <button onClick={increment} style={{margin:'1rem'}}>Increment by 2 </button>
        <button onClick={db5} style={{margin:'1rem'}}>Decrement by 5 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
