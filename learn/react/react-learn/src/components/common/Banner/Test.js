import React from 'react'
import Banner from "./index"
import src1 from "./img/1.jpeg"
import src2 from "./img/2.jpg"
import src3 from "./img/3.jpg"
import src4 from "./img/4.png"
export default function Test() {
    return (
        <div>
            <Banner imgSrcs={[src1,src2,src3,src4]} duration={500}  gapDuration={2000}/>
        </div>
    )
}
