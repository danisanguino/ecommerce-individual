import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WelcomePage from '../welcomepage';
import Signin from '../signin';
import Catalog from '../catalog';
import Product from '../product';
import Cart from '../cart';

type Props = {};

export default function AppRoutes({}: Props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
  
}