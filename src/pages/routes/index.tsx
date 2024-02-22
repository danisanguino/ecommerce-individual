import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Signin from '../Signin';
import Cart from '../cart';
import WelcomePage from '../welcomepage';
import Product from '../product';
import { ProductsContextProvider } from '../../context/productContext';
import { UserContextProvider } from '../../context/user';
import DisplayCatalogAll from '../catalog/components/displayCatalogAll';
import DisplayCatalogChairs from '../catalog/components/displayCatalogChairs';
import DisplayCatalogFurnitures from '../catalog/components/displayCatalogFurnitures';
import DisplayCatalogTables from '../catalog/components/displayCatalogTables';

type Props = {};

export default function AppRoutes({}: Props) {

  return (
    <BrowserRouter>
      <Routes>
            <Route element={<UserContextProvider/>}>
                <Route path="/" element={<Signin/>} />
                      <Route element={<ProductsContextProvider/>}>
                                <Route path="/welcome" element={<WelcomePage />} />
                                <Route path="/catalogAll" element={<DisplayCatalogAll/>}/>
                                <Route path="/catalogChairs" element={<DisplayCatalogChairs/>}/>
                                <Route path="/catalogFurnitures" element={<DisplayCatalogFurnitures/>}/>
                                <Route path="/catalogTables" element={<DisplayCatalogTables/>}/>
                                <Route path="/:productId" element={<Product />} />
                                <Route path="/cart" element={<Cart />} />
                                {/* Ver este path que no funciona */}
                                <Route path="*" element={<Navigate replace to="/login"/>} />
                      </Route>
            </Route>
      </Routes>
    </BrowserRouter>
  );
  
}