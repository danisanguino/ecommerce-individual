import Footer from "../../components/footer"
import Login from "./components/Login"
import Welcome from "./components/Welcome"


type Props = {}

export default function Signin({}: Props) {
  return (
    <>
    <Welcome/>
    <Login/>
    <Footer/>
    
  </>
  )
}