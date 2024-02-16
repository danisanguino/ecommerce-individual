import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Resume from './components/resume'

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