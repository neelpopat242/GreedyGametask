import React from "react"
import logo from '../images/logo.png'
import Image from "next/image";
function Navb (){
        return (
            <>
            <nav className="my-4 mx-5 navbar navbar-expand-lg navbar-light ">
                <Image className="" src={logo}></Image>
            </nav>    
            </>
        )

       
}

export default Navb