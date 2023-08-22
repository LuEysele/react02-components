//import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting/greeting';
import Poem from './components/poem/poem';
import Generation from './components/greeting/generation';
import { Navbar } from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeting />
      <Poem/>
      <Generation/>
      {/* footer */}
    </div>
  );
}

export default App;
