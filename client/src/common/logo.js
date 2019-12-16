import React from "react"
import styled from 'styled-components';
import {Link} from "react-router-dom"

function Logo() {
    return(
        <ImageHolder>
        <Link to="/"><img
            src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576094329/f22ietnqwtslcbasqym1.png"
            alt=""
            width="150"
            height="50"
            alt="Naija recycler logo"
            className=""
          /></Link>
        </ImageHolder>
    )
}

export default Logo;

const ImageHolder = styled.div`
position: absolute;
    top: 50px;
    left: 50px;
  
`;