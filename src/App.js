import First from './components/tiffinsmart/signup.jsx';
import Login from './components/tiffinsmart/login.jsx';
import Main from './components/tiffinsmart/main.jsx';
// import Mid from './components/tiffinsmart/section.jsx';
import { Route,Routes } from 'react-router-dom';
import Home from './components/tiffinsmart/home.jsx';
import "./index.css";
function App() {
  return (
    <div className="flex items-center justify-center" >
      {/* <First /> */}
    
        <Routes>
          <Route path='/' element={<Main />}></Route> 
          <Route path='/home' element={<Home />}></Route>
          <Route path='/signup' element={<First />}> </Route>
          <Route path='/login' element={<Login />}></Route>
          
        </Routes>
    
      {/* <Login /> */}
    {/* <h1 className='text-center text-blue-400 text-7xl'>tailwind</h1> */}
    {/* <h2 className="text-center text-blue-400 text-7xl">tailwind</h2> */}
    {/* <h2 className="text-center text-red-500"> DESKTOP</h2> */}
    </div>
  );
}

export default App;
