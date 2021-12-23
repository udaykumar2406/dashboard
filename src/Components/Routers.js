import React from 'react'
import { Routes, Route } from 'react-router';
import Gbu from "../Components/Gbu"
// import Brand from "./Brand"
// import Header from "./Header"
// import Pages from "./Pages"
// import Gallery from "./Gallery"
// import Forms from "./Forms"
// import Documentation from "./Documentation"
// import Components from "./Components"
function Routers() {
    return (
        <div>
            <Routes>
                 <Route path='/Gbu' element={<Gbu/>}/>
                 {/* <Route path='/Brand' element= {<Brand/>}/> */}
           </Routes>
        </div>
    )
}
export default Routers
