import React from 'react'
import Image from 'next/image'
import underline from "../images/extra/underline_2.png"
export default function Acquire() {
  return (
    <div className='my-5'>
      <h4 className='text-white mb-0'>Acquire quality users, not just installs</h4>
          <Image className="ms-5 ps-5" src={underline} />


      <h6 className='text-white-50'>Talk to us today and start creating mobile marketing campaigns that deliver results.</h6>
    </div>
  )
}
