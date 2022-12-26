import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;



/*
 Understandin useReducer() - ALWAYS return an array with exactly two values so we can use array destructuring to pull
                              out these values and store them in separate constants. The two values that you are getting are: 
                              - the latest state snapshot used in the component re-render/reevaluation cycle.
                              - function that can be used to dispatch a new action(i.e. trigger an update of the state). 

                              The state updating function will work differently: 
                              INSTEAD OF JUST SETTING A NEW STATE VALUE YOU WILL DISPATCH AN ACTION AND THAT ACTION WILL BE
                              CONSUMED BY THE FIRST ARGUMENT YOU PASSED TO useReducer FUNCTION. A SO-CALLED 'REDUCER FUNCION'.

                              SO, 'reducerFn' - is a function that get the latest state snapshot automatically because this function will be called
                              by React and it gets the action it was dispatched.

                              (prevState, aciton) => newState
                              A function that is triggered automatically once an action is dispatched (via dispatchFn() - 
                              is received that latest state spapshot and should return the new, updated state.) So that is a bit like 
                              the function form of the useState hook, but an extended version of that, because of that action think you 
                              will see in action.

                              So, the reducer function shoul ALWAYS do one important think. It should return a new updated state.

                              * In addiiton you can set some initial state and a function to set the initial state programmatically.

 const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

*/