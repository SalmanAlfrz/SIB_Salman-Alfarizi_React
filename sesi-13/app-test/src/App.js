import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
