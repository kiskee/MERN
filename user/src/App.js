import './App.css';
import AddUser from './AddUser';
import ListUsers from './ListUsers';
import UpdateUser from './UpdateUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-info" href="#">Asistance Control</a>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="adduser">Add User</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success" href="updateuser">Update User</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="/">Delete User</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">logout</a>
        </li>
      </ul>
    
  </div>
</nav>




      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListUsers/>} exact></Route>
          <Route path='/adduser' element={<AddUser/>} exact></Route>
          <Route path='/updateuser' element={<UpdateUser/>} exact></Route>
        </Routes>

      </BrowserRouter>


      
      
      
    </div>
  );
}

export default App;
