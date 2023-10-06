import './App.css';
import SignUp from './components/Account/SignUp';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './components/MainContent/ProductPage';
import AcceptBuy from './components/MainContent/AcceptBuy';
import AfterBuyProduct from './components/MainContent/AfterBuyProduct';
import { CartProvider } from './Context/CartContext';
import SearchComponent from './components/MainContent/SearchComponent';
import PaymentHistory from './components/Account/PaymentHistory';
import SignIn from './components/Account/SignIn';
import CategoryPage from './components/MainContent/Categories/CategoryPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const routes = [
    {path:'/', element: <Layout />},
    {path:'/signin', element: <SignIn />},
    {path:'/signup', element: <SignUp />},
    {path:'/category/:categoryName', element:<CategoryPage />},
    {path:'/product/:id', element: <ProductPage />},
    {path:'/sluchawki/product/:id', element: <ProductPage />},
    {path:'/myszki/product/:id', element:<ProductPage />},
    {path:'/klawiatury/product/:id', element: <ProductPage />},
    {path:'/podkladki/product/:id', element: <ProductPage />},
    {path:'/search/product/:id', element:<ProductPage />},
    {path:'/acceptbuy', element: <AcceptBuy />},
    {path:'/orderproduct', element: <AfterBuyProduct />},
    {path:'/search', element: <SearchComponent />},
    {path:'/historypayment', element: <PaymentHistory />}
  ]

  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        {routes.map((route)=>{
          return(<Route path={route.path} element={route.element} />)
        })}
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
