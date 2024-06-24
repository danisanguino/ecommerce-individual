import './header.css';
import { Link } from 'react-router-dom';
import { userFornitureContext } from '../../context/user';


type Props = {}

export default function Header({}: Props) {

  //CustomHook from Context
  const userContext = userFornitureContext();


  return (
    <div className="header">

        <div className="search">
          <Link to="/welcome" >
             <img src="./assets/home-742.svg" alt="search" />
          </Link>
        </div>

        <div className='nav-bar'>
            <p>Hola {userContext.array.Name}</p>
            <img src="./assets/person-742.svg" alt="user" />
            <img src="./assets/menu-742.svg" alt="menu" /> 
        </div>

    </div>
  )
};