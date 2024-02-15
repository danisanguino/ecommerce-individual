import Header from "../../components/header"
import Login from "./components/Login"
import Welcome from "./components/Welcome"

type Props = {}

export default function Signin({}: Props) {
  return (
    <>
    <Header/>
    <Welcome/>
    <Login/>
    
  </>
  )
}