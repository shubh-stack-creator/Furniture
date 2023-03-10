
import './App.css';
import {Routes , Route , BrowserRouter} from 'react-router-dom';
import ProductInfo from './Pages/ProductInfo';
import Home from './Pages/Home';
import User from './Pages/User';
import Billing from './Pages/Billing';
import SignIn from './Pages/SignIn';


function App() {

  return (
    <div className="App" style={{backgroundColor:"#36454F"}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        <Route path='/info' element={<User />} />
        <Route path='/checkout' element={<Billing />} />
        <Route path='/signin' element={<SignIn />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
