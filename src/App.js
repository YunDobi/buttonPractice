import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Calculator } from './components/Calculator';


function App() {
    const user = useSelector(state => state.user.user)
    console.log(user)

  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
