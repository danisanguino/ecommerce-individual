import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signin from '../Signin';
import Cart from '../cart';
import WelcomePage from '../welcomepage';
import Catalog from '../catalog';
import Product from '../product';
import { ProductsContextProvider } from '../../context/productContext';

type Props = {};

export default function AppRoutes({}: Props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>} />
          <Route element={<ProductsContextProvider/>}>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
  
}