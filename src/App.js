import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Counter from './SimpleReduxDemo/components/Counter';
import myStore from './SimpleReduxDemo/store/reduxStore';
import Login from './SimpleReduxDemo/components/Login';
import Transaction from './SimpleReduxDemo/components/Transaction';

function App() {
  return (
    <Provider store={myStore}>
      <Counter />
      <Login />
      <Transaction />
    </Provider >
  );
}

export default App;