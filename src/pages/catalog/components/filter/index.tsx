import React from 'react'
import "./filter.css"

type Props = {}

export default function Filter({}: Props) {


  
  return (
    <>
    <div>Filtrar por:</div>
    <div className='filter'>
    <div className='filter-title'>Filtrar</div>
      <button>Sillas</button>
      <button>Mesas Escritorio</button>
      <button>Muebles</button>
      <button>Sofás</button>
    </div>
    </>
  )
}