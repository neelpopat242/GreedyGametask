import React from 'react'
import Image from 'next/image'
import affle from '../images/Logo/affle1.png'
import artoon from '../images/Logo/artoon.png'
import cent from '../images/Logo/cent.png'
import galaksion from '../images/Logo/galaksion.png'
import inmobi from '../images/Logo/inmobi.png'
import jumpramp from '../images/Logo/jumpramp.png'

export default function Partner() {
    return (
        <div className=''>
            <h2 className='my-5'>Our Top Partners</h2>
            <div className="row my-3">
                <div className='col-6 col-md-4 '>
                    <Image src={artoon} />
                </div>
                <div className='col-6 col-md-4'>
                    <Image src={cent} />
                </div>
                <div className='col-6 col-md-4'>
                    <Image src={affle} />
                </div>
            
                <div className='col-6 col-md-4'>
                    <Image src={inmobi} />
                </div>
                <div className='col-6 col-md-4'>
                    <Image src={galaksion} />
                </div>
                <div className='col-6 col-md-4'>
                    <Image src={jumpramp} />
                </div>
            </div>
        </div>
    )
}
