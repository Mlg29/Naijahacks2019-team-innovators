import React from "react"
import "./Home.css"
import Navigation from "../Navigation"



function Home() {
    return (
        <div className="home">
            <Navigation />
            <img className="home-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575979267/xg157iczn39aviwt43zp.jpg" alt="home" width="1583" height="800" />

            <div className="home-div">
                <div className="home-div-div">
                <img src="https://img.icons8.com/wired/64/FFA500/truck.png" alt="truck" height="50" />
                    <p className="home-div-div-paragraph">We collect all your<br /> waste every week.</p>

                </div>

                <div className="home-div-div">
                <img src="https://img.icons8.com/material/64/FFA500/recycle-sign.png"  alt="sign up" height="50" />
                    <p className="home-div-div-paragraph">We recycle on average<br /> 95% of the waste</p>

                </div>

                <div className="home-div-div">
                <img src="https://img.icons8.com/ios-glyphs/64/FFA500/compost-heap.png"  alt="" height="50" />
                    <p className="home-div-div-paragraph">We turn organic<br /> waste into compost</p>

                </div>
            </div>
           
        </div>
    )
}


export default Home