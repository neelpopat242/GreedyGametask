import React from "react"
import logo from '../images/logo.png'
import Image from "next/image";
import {useMediaQuery} from 'react-responsive'
function Navb (){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
        return (
            <>
            <nav className="my-4 mx-5 sticky-top navbar navbar-expand-lg navbar-light ">
            {
               !isDesktopOrLaptop && <span className="navbar-toggler-icon"> </span>
            }
                <Image className="" src={logo}></Image>
            </nav>    
            </>
        )

       
}

export default Navb