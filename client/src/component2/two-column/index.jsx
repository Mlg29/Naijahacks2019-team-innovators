import React from "react";
import "./Collection.css";

function Collection(props) {
  return (
    <div className="container">
      <div className="row collection">
        <div className="col-lg-6">
          <img className="collection-image" src={props.image} alt="" />
        </div>

        <div className="col-lg-6">
          <h1 className="collection-header1">{props.header}</h1>
          <h3 className="collection-header2">{props.description}</h3>
          <p className="collection-paragraph">{props.content}</p>
          <button className="collection-button" type="button">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collection;
