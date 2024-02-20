import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import DisplayCatalog from './components/displayCatalog'

type Props = {}


export default function Catalog({}: Props) {
  return (
    <>
    <Header/>
    <DisplayCatalog/>
    <Footer/>
    </>
  )
}