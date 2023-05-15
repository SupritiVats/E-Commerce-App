import Products from './components/Products';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
// import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
function App() {
  return (<>
  <Home/>
  <Product/>
  <Cart/>
  <Register/>
  <ProductList/>
  
     {/* <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes> */}

  {/* <Product/>
    <Cart/>
    <Register/>
    <ProductList/> */}
      </>
  //   <Router>
   
  //        <Router>
  //         <Route exact path="/" element={<Home/>}/>
  //         <Route exact path="/register" element={<Register/>}/>
  //         {/* <Route exact path="/createuser" element={<SignUp/>}/>
  //         <Route exact path="/cart" element={<Cart/>}/>
  //         <Route exact path="/order" element={<MyOrders/>}/> */}
  //        </Router>
    
  // </Router>
  
  );
}

export default App;
