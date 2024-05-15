import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Signin from '../pages/Signin';
import Cart from '../pages/cart';
import WelcomePage from '../pages/welcomepage';
import Product from '../pages/product';
import { ProductsContextProvider } from '../context/productContext';
import { UserContextProvider } from '../context/user';
import DisplayCatalogAll from '../pages/catalog/components/displayCatalogAll';
import DisplayCatalogChairs from '../pages/catalog/components/displayCatalogChairs';
import DisplayCatalogFurnitures from '../pages/catalog/components/displayCatalogFurnitures';
import DisplayCatalogTables from '../pages/catalog/components/displayCatalogTables';
import { AuthProvider } from '../context/authContext';
import ProtectedRoutes from '../components/ProtectedRoutes';

type Props = {};

export default function AppRoutes({}: Props) {

  return (
  <AuthProvider>
    <BrowserRouter>
            <Routes>
                  <Route element={<UserContextProvider/>}>
                        <Route path="/" element={<Signin/>} />
                              <Route element={<ProductsContextProvider/>}>
                                          <Route path="/welcome" element={<ProtectedRoutes component={WelcomePage}/>}/>
                                          <Route path="/catalogAll" element={<ProtectedRoutes component={DisplayCatalogAll}/>}/>
                                          <Route path="/catalogChairs" element={<ProtectedRoutes component={DisplayCatalogChairs}/>}/>
                                          <Route path="/catalogFurnitures" element={<ProtectedRoutes component={DisplayCatalogFurnitures}/>}/>
                                          <Route path="/catalogTables" element={<ProtectedRoutes component={DisplayCatalogTables}/>}/>
                                          <Route path="/:productId" element={<ProtectedRoutes component={Product}/>}/>
                                          <Route path="/cart" element={<ProtectedRoutes component={Cart}/>}/>
                                          <Route path="*" element={<Navigate replace to="/login"/>} />
                              </Route>
                  </Route>
            </Routes>
        </BrowserRouter>
  </AuthProvider>
  );
  
}