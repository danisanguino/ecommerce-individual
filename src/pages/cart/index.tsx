import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import Resume from './components/resume'
import "./cart.css"

type Props = {}

export default function Cart({}: Props) {
  return (
    <>
    <Header/>
    <Resume/>
    <Footer/>
    </>
  )
}