import './header.css';


type Props = {}

export default function Header({}: Props) {
  return (
    <div className="header">

        <div className="search">
            <img src="src/assets/glass-742.svg" alt="search" />
        </div>

        <div className='nav-bar'>
        <img src="src/assets/person-742.svg" alt="user" />
        <img src="src/assets/menu-742.svg" alt="menu" />
            
        </div>

    </div>
  )
};