import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Component/HomeComp/Home';
function App() {
  return (
    <>
  <Header/>
  <Routes>
<Route path="/" element={<Home/>}/>
  </Routes>
    </>
  );
}

export default App;
