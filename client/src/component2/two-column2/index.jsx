import React from "react"
import "./Recycling.css"
import { Link } from "react-router-dom"



function Recycling(props) {
    return (
        <div className="container">
            <div className="row recycling3">
                <div className="col-lg-6">
                    <h1 className="recycling3-header1">{props.header}</h1>
                    <h3 className="recycling3-header2">{props.description}</h3>
                        <p className="recycling3-paragraph">{props.content}</p>
                            <Link to="/recycling"><button className="recycling3-button" type="button">{props.button}</button></Link>
                </div>
                <div className="col-lg-6">
                    <img className="recycling3-image" src={props.image} alt="" />
                </div>

               
            </div>

        </div>
    )
}

export default Recycling