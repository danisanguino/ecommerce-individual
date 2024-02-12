import './header.css';
import search from '../../assets/glass-742.svg';
import user from '../../assets/person-742.svg';
import menu from '../../assets/menu-742.svg';

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="header">

        <div className="search">
            <img src={search} alt="search" />
        </div>

        <div className='nav-bar'>
        <img src={user} alt="user" />
        <img src={menu} alt="menu" />
            
        </div>

    </div>
  )
};