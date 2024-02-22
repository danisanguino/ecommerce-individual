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
import { AuthProvider } from '../../context/authContext';
import ProtectedRoutes from '../../components/ProtectedRoutes';

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
                                    {/* Ver este path que no funciona */}
                                    <Route path="*" element={<Navigate replace to="/login"/>} />
                          </Route>
                </Route>
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
  
}