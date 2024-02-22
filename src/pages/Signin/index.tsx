import Footer from "../../components/footer"
import Login from "./components/Login"
import Welcome from "./components/Welcome"
import "./signin.css"


type Props = {}

export default function Signin({}: Props) {
  return (
    <div className="signin-bg">
      <Welcome/>
      <Login/>
      <Footer/>
    </div>
  )
}