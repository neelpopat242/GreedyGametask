import React from 'react'
import Image from 'next/image'
import d11 from "../images/Logo/d11.png"
import rcircle from  "../images/Logo/rcircle.png"
import inmobi from "../images/Logo/inmobi.png"

export default function Client() {
  return (
    <div className='opacity-100 my-4' >
      <h2>Our Top Clients</h2>
      <div className="row">
        <div className='col-6 col-md-4'>
          <Image src={d11}></Image>
        </div>
        <div className='col-6 col-md-4'>
        <Image src={inmobi}></Image>
        </div>
        <div className='col-6 col-md-4'>
          <Image src={rcircle}></Image>
        </div>
      </div>
    </div>
  )
}
