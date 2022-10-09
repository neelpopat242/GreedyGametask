import React from "react";
import Image from "next/image";
function campaigncmp({ imglink, t }) {
    return (
        <div className="my-3 py-4  text-center py-3  mx-3" style={{ backgroundColor: "white" }}>
            <Image src={imglink} />
            <br />
            <span className="text-center lh-1 my-2 px-2" style={{fontSize: "12px"}}>{t}</span>
        </div>
    )

}

export default campaigncmp;6