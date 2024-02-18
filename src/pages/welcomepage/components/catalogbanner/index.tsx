import React from 'react'
import "./catalogBanner.css"
import { Link } from 'react-router-dom';

type Props = {}

export default function CatalogBanner({}: Props) {
  return (
    <div className='welcome-banner'>
      
      <div className='welcome-txt-btn'>
        <h1>Sorpréndete</h1>
        <Link to="/catalog"><button>Catalogo</button></Link>
    </div>

    </div>
  )
}