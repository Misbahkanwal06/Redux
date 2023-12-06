

import {incrementAction, decrementAction} from './assets/redux/actions/action';
import { useSelector, useDispatch } from 'react-redux';
 function App() {
  const states = useSelector((state)=>{
  return state.actionshandler;

  // return state.states;;
})
  const dispatch = useDispatch();
  console.log(states);
  return (
    <div>
      <button onClick={() => dispatch(incrementAction())}>INC</button>
        <h1>{states}</h1>
        <button onClick={ () => dispatch (decrementAction())}>DEC</button>
    </div>
    
  )
}
export default App;

