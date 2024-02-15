import React from 'react'
import "./catalogBanner.css"

type Props = {}

function goCatalogue (){

}

export default function CatalogBanner({}: Props) {
  return (
    <div className='welcome-banner'>
      
      <div className='welcome-txt-btn'>
        <h1>See our catalogue</h1>
        <button onSubmit={goCatalogue}>Catalogue</button>
    </div>

    </div>
  )
}