import './App.css';
import AddUser from './AddUser';
import ListUsers from './ListUsers';
import UpdateUser from './UpdateUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
    

      <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="adduser">Add USer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
    </ul>





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
