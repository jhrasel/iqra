import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './Pages/Home';
import './style.css';
import Login from './Pages/Login';

function App() {


  return (

    <>
    
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />}> </Route>
        <Route path="/login" element={<Login />}> </Route>

      </Routes>

    </BrowserRouter>

    </>

  );


}

export default App;
