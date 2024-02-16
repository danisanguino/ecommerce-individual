import React from 'react'
import "../../../welcomepage/components/featured/featured.css"
import Filter from '../filter'
import CardProduct from '../../../../components/cardProduct'

type Props = {}

export default function DisplayCatalog({}: Props) {
  return (
    <>
    <Filter/>
    <div className='catalog-products'>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
    </div>
    </>
  )
}