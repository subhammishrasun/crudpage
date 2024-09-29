import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/footer';
import SignUp  from './components/Sign-up';
import PrivateComponent from './components/privateComponent';
import Login from './components/Login';
import AddProduct from './components/addProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<PrivateComponent />}>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/addProducts' element={<AddProduct />}/>
      <Route path='/Update/:id' element={<UpdateProduct />}/>
      <Route path='/logout' element={<h1>logout component</h1>}/>
      <Route path='/profile' element={<h1>Profile component</h1>}/>
      </Route>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
