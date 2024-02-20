import React from 'react'
import "./featured.css"
import CardProduct from '../../../../components/cardProduct'

type Props = {}

export default function Featured({}: Props) {
  return (
    <>
    
    <div className='featured'>
      <h3>Destacados</h3>
    </div>

    <div className='featured-products'>
    <CardProduct/>
    <CardProduct/>
    </div>
    
    </>
  )
}