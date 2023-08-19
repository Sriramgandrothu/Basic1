import './App.css';
// import Page from './home';
import Signin from './signup';
import Srkr from './login';
import Proj from './project';
import { Pbstatement } from './pb';
import { Problem } from './pbsm';

import Password from './forgot';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
     <Route path='/login' element={<Srkr/>}/>   
     <Route path ='/' element={<Proj/>}/>
     <Route path ='/signup'element ={<Signin/>}/>
     <Route path ='/fp'element ={<Password/>}/>
     <Route path ='/pb'element ={<Pbstatement/>}/>
     <Route path ='/Prob'element ={<Problem/>}/> 
    
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;