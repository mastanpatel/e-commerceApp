// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import Home from './components/Home';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FilterBar />
      <div class="body-container">
        <SideBar />
        <Home />
      </div>
      
    </div>
  );
}

export default App;
