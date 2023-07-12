import classes from './Counter.module.css';
import {  useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch();

  function ib5(e)
  {
    dispatch({type:'increment5'})
  }

  function db5()
  {
    dispatch({type:'decrement5'})
  }

  const counter = useSelector(state =>state.count)
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      
      <div className={classes.value}>{counter}</div>
      <div >
        <button onClick={ib5} style={{margin:'1rem'}}>Increment by 5 </button>
        <button onClick={db5} style={{margin:'1rem'}}>Decrement by 5 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
