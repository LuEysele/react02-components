//import logo from './logo.svg';
import './App.css';
//import Greeting from './components/greeting/greeting';
//import Poem from './components/poem/poem';
//import Generation from './components/greeting/generation';
import {  Navbar } from './components/navbar/navbar';
import CounterPage from './components/counter/counter-pages';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <CounterPage/>
      {/* <Greeting />
      <Poem/>
      <Generation/>
      <Footer/> */}
    </div>
  );
}

export default App;
