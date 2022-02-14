import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'

function App() {

  function counterReducer(state = { value: 7 }, action) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
  }
  
let store = createStore(counterReducer);



store.subscribe(() => console.log(store.getState()))


store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}

  return (
    <div className="App">
     
     

    </div>
  );
}

export default App;
