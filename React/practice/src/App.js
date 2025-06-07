
import './App.css';
import Greet from './components/Greet';
import ClassComponent from './components/ClassComponent';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
    <Greet name="Rajat" heroname='Superman'/>
    <ClassComponent/>
    <Message/>
    <Counter/>
    </div>
  );
}

export default App;
