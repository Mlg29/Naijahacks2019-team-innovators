import React from "react";
import "./We-make.css";

function WeMake() {
  return (
    <div className="container-fluid">
      <div className="row we-make">
        <div className="col-lg-4 make">
          <h3 className="we-make-header">
            We help make Nigeria a cleaner, healthier country
          </h3>
        </div>
        <div className="col-lg-8">
          <p className="we-make-paragraph">
            More than 50% of Nigeria’s waste does not get collected and less
            than 10% gets recycled. This causes environmental and health
            problems for everyone.
          </p>
          <p className="we-make-paragraph">
            We are trying to change the way people think about waste and change
            the current situation for the better.
          </p>
          <p className="we-make-paragraph">
            We collect waste from households, businesses and factories We take
            the waste to our decentralized sorting sites where we sort it into
            more than 40 fractions. We compost the organic waste into high
            quality compost; the other materials (paper, plastic, glass, metal)
            we either recycle ourselves or do so through our partners. This
            allows us to achieve one of the highest recycling rates in the world
            – at 95%!
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeMake;
