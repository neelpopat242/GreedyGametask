import React from 'react'
import Image from 'next/image'
import d11 from "../images/Logo/d11.png"
import quote from "../images/extra/quote.svg"
export default function HearfromClient() {
  return (
    <div  style={{
      backgroundImage: `url(${quote.src})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "",
    }}>
      <h2 className='my-5'>Hear it from Clients</h2>
      <div className="container  shadow-lg" style={{ backgroundColor: "white" }}>
        <div className='row px-3'>
          <div className='col-md-3'>
            <Image src={d11} />
          </div>
        </div>
        <div className='px-3'>
        <h6><strong>22.4 Mn minutes of branding results in 25k high-quality registrations</strong></h6>
        <small>The placement of clickable units natively placed on the main menu, gameplay screen and pause screen ensured high engagement, registrations and transactions.</small>
        <h6 className='textcolorch my-3 py-3'>Read Casestudy</h6>
        </div>
      </div>
    </div>
  )
}
