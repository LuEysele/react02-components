//import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting/greeting';
import Poem from './components/poem/poem';
import Generation from './components/greeting/generation';

function App() {
  return (
    <div className="App">
      <Greeting />
      <Poem/>
      <Generation/>
    </div>
  );
}

export default App;
