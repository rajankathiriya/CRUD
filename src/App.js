import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loginform from './Component/Apipost/Loginform'
import ApiPost from './Component/Apipost/Registration'
import RequireAuth from './Component/Apipost/Private/Requiredau'
import Form from './Component/Apipost/Form';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginform />}></Route>
          <Route path='/register' element={<ApiPost />}></Route>
          <Route path='/form' element={<RequireAuth><Form /></RequireAuth>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
