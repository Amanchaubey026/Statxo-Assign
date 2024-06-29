// src/App.js
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import TaskTable from './components/TaskTable';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/tasks" element={<TaskTable/>} />
      </Routes>
      <Footer/>
      
    </>
  );
};

export default App;
