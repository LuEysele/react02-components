//import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting/greeting';
import Poem from './components/poem/poem';
import Generation from './components/greeting/generation';
import { Footer, Navbar } from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeting />
      <Poem/>
      <Generation/>
      <Footer/>
    </div>
  );
}

export default App;
