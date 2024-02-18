import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import CatalogBanner from './components/catalogbanner'
import Featured from './components/featured'

type Props = {}

export default function WelcomePage({}: Props) {
  return (
    <div>
      <Header/>
      <CatalogBanner/>
      <Featured/>
      <Footer/>
    </div>
  )
}