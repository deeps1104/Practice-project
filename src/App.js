import './App.css';
import Calculator from './component/Calculator';
import Clock from './component/Clock/Clock';
import Counter from './component/Counter';
import Email from './component/Email';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
       <Calculator/> 
    <Clock/>
    <Counter/>     
       <Email/> 
       <Form/>
    </div>
  );
}

export default App;
