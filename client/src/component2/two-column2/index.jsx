import React from "react"
import "./Recycling.css"


function Recycling(props) {
    return (
        <div className="container">
            <div className="row recycling">
                <div className="col-lg-6">
                    <h1 className="recycling-header1">{props.header}</h1>
                    <h3 className="recycling-header2">{props.description}</h3>
                        <p className="recycling-paragraph">{props.content}</p>
                            <button className="recycling-button" type="button">{props.button}</button>
                </div>
                <div className="col-lg-6">
                    <img className="recycling-image" src={props.image} alt="" />
                </div>

               
            </div>

        </div>
    )
}

export default Recycling