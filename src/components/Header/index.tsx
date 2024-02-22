import { useContext } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { userFornitureContext } from '../../context/user';


type Props = {}

export default function Header({}: Props) {

  //Invocamos al custom Hook y guardamos el dato en una variable
  const userContext = userFornitureContext();


  return (
    <div className="header">

        <div className="search">
         <Link to="/welcome" >
             <img src="src/assets/home-742.svg" alt="search" />
        </Link>
        </div>

        <div className='nav-bar'>
            {/* Llamamos a la variable que es igual al custom Hook */}
            <p>Hola, {userContext.array.Name}</p>
            <img src="src/assets/person-742.svg" alt="user" />
            <img src="src/assets/menu-742.svg" alt="menu" /> 
        </div>

    </div>
  )
};