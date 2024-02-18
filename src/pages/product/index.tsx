import React from 'react'
import ProductDescription from './components/productDescription'
import Header from '../../components/Header'
import Footer from '../../components/footer'

type Props = {}

export default function Product({}: Props) {
  return (
    <>
    <Header/>
    <ProductDescription/>
    <Footer/>
    </>
  )
}