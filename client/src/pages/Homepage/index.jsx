import React from "react"
import "./Homepage.css"
import Home from "../../component2/Home"
import WeMake from "../../component2/We-make"
import Service from "../../component2/Service"
import Footer from "../../component2/Footer"



function Homepage() {
    return (
        <div className="homepage">
           <Home />
           <WeMake />
           <Service />
           <Footer />
        </div>
    )
}


export default Homepage