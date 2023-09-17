import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React from 'react';
import { State } from './store/initialState';

function App() {
  const counter = useSelector((state:State)=>state.counter);
  const dark = useSelector((state:State)=>state.dark);
  const dispatch = useDispatch();
  return (<>
    <div className='flex'>
      <h1
      style={{color:dark.dark?'black':'red'}}
      onClick={()=>dispatch({type:'DARK'})}
      >{counter.counter}</h1>
      <div>
        <button onClick={()=>dispatch({type:'COUNTER_UP'})}>counter +</button>
        <button onClick={()=>dispatch({type:'COUNTER_DOWN'})}>counter -</button>
      </div>
    </div>
  </>);
}

export default App;
