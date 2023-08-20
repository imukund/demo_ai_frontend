import './App.css';
import Header from './components/header';
import Home from './components/home';
import Gift from './components/gift';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gift' element={<Gift/>}/>
      </Routes>
      
    </div>
  );
} 

export default App;
