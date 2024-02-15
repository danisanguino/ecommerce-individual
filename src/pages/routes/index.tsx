import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WelcomePage from '../welcomepage';
import Signin from '../signin';

type Props = {};

export default function AppRoutes({}: Props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
  
}