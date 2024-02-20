import './App.css'
import Routes from './pages/routes'
import { UserProvider } from './context/user/UserContext'


function App() {


  return (
    <UserProvider>
      <Routes/>
    </UserProvider>
  )
}

export default App
 