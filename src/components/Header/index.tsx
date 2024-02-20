import { useContext } from 'react';
import './header.css';
import { UserNameContext } from '../../context/user';


type Props = {}

export default function Header({}: Props) {

  const userNameOnHeader = useContext(UserNameContext);

  return (
    <div className="header">

        <div className="search">
            <img src="src/assets/glass-742.svg" alt="search" />
        </div>

        <div className='nav-bar'>
            <p>Hola {userNameOnHeader}</p>
            <img src="src/assets/person-742.svg" alt="user" />
            <img src="src/assets/menu-742.svg" alt="menu" /> 
        </div>

    </div>
  )
};