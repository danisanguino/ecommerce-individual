import React from 'react'
import ProductDescription from './components/productDescription'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import "./product.css"

type Props = {}

export default function Product({}: Props) {
  return (
    <div className='product-bg'>
    <Header/>
    <ProductDescription/>
    <Footer/>
    </div>
  )
}