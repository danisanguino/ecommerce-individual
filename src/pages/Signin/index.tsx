import Header from "../../components/Header"
import Login from "./components/Login"
import Welcome from "./components/Welcome"

type Props = {}

export default function index({}: Props) {
  return (
    <>
    <Header/>
    <Welcome/>
    <Login/>
    
  </>
  )
}