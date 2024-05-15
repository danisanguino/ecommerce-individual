
import "./filter.css"
import { Link } from 'react-router-dom'


type Props = {}

export default function Filter({}: Props) {


  
  return (
    <>
    <div>Filtrar por:</div>
    <div className='filter'>
    <div className='filter-title'>Filtrar</div>
      <Link to="/catalogChairs"><button>Sillas</button></Link>
      <Link to="/catalogTables"><button>Mesas</button></Link>
      <Link to="/catalogFurnitures"><button>Muebles</button></Link>
      <Link to="/catalogAll"><button>Todos</button></Link>
    </div>
    </>
  )
}