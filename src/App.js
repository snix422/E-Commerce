
import './App.css';
import SignUp from './components/Account/SignUp';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sluchawki from './components/MainContent/Categories/Headphones';
import Myszki from './components/MainContent/Categories/Mouse';
import Klawiatury from './components/MainContent/Categories/Keyboards';
import Podkladki from './components/MainContent/Categories/Mousepad';
import ProductPage from './components/MainContent/ProductPage';
import AcceptBuy from './components/MainContent/AcceptBuy';
import AfterBuyProduct from './components/MainContent/AfterBuyProduct';
import { CartProvider } from './Context/CartContext';
import SearchComponent from './components/MainContent/SearchComponent';
import PaymentHistory from './components/Account/PaymentHistory';
import SignIn from './components/Account/SignIn';
import { Headphones } from '@mui/icons-material';
import Mouse from './components/MainContent/Categories/Mouse';
import Keyboards from './components/MainContent/Categories/Keyboards';
import Mousepad from './components/MainContent/Categories/Mousepad';



function App() {

  const routes = [
    {path:'/', element: <Layout />},
    {path:'/signin', element: <SignIn />},
    {path:'/signup', element: <SignUp />},
  ]

  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/zaloguj" element={<SignIn />}></Route>
        <Route path="/rejestracja" element={<SignUp />}></Route>
        <Route path="/headphones" element={<Headphones />}></Route>
        <Route path="/mouse" element={<Mouse />}></Route>
        <Route path="/keyboards" element={<Keyboards />}></Route>
        <Route path="/mousepads" element={<Mousepad />}></Route>
        <Route path='/product/:id' element={<ProductPage />}></Route>
        <Route path='/sluchawki/product/:id' element={<ProductPage />}></Route>
        <Route path='/myszki/product/:id' element={<ProductPage />}></Route>
        <Route path='/klawiatury/product/:id' element={<ProductPage />}></Route>
        <Route path='/podkladki/product/:id' element={<ProductPage />}></Route>
        <Route path='/search/product/:id' element={<ProductPage />}></Route>
        <Route path='/acceptbuy' element={<AcceptBuy />}></Route>
        <Route path='/orderproduct' element={<AfterBuyProduct />}></Route>
        <Route path='/search' element={<SearchComponent />}></Route>
        <Route path='/historypayment' element={<PaymentHistory />}></Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
