import React from 'react'
import ProductDescription from './components/productDescription'
import Header from '../../components/header'
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