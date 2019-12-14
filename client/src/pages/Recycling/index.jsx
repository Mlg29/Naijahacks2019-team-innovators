import React from "react"
import "./Recycling.css"
import Navigation from "../../component2/Navigation"
import SecondFooter from "../../component2/Footer2"

function Recycling() {
    return (
        <div>
            <Navigation />
           <h3 className="recycling">Recycling</h3>

           <div className="recycling-div">
               <div className="recycling-div-div">
                    <img className="recycling-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576015538/k3qxmf1kmn1oegd0snmd.jpg" alt="" />
               </div>

               <div className="recycling-div-div2">
                    <p className="recycling-paragraph1">Recycling is the foundation of our waste
                         management model.
                    </p>
                    <p className="recycling-paragraph">
                        We currently have two sorting sites, where we take 
                        the waste we collect, sort it into 
                        45 different fractions
                         and subsequently recycle it.
                    </p>
                    <p className="recycling-paragraph">
                    Examples of recycled products are PET bottles made 
                    into fleece jackets, glass bottles can be made into glasses, news paper can be recycled into tissues and aluminium tins is recycled to make new aluminium tins.
                    </p>
               </div>
           </div>

           <div className="recycling-div2">
               <div className="sorting">
                    <h3 className="sorting-header">SORTING</h3>
                    <p className="sorting-paragraph">In order to recycle and compost the 
                        waste we collect accurately, we need 
                        to sort the waste. Locally hired women 
                        and youth in close proximity to our two 
                        sites have been trained to know the 45 
                        different fractions of waste that we use, 
                        and will sort everything into bigger sacks. 
                        We are then sure that PET bottles, aluminium 
                        tins and organic waste will be separated and 
                        stored together.
                    </p>
               </div>
               <div className="recycle">
                    <h3 className="sorting-header">RECYCLING</h3>
                    <p className="sorting-paragraph">NaijaRecycler is able to recycle on average 95% 
                        of the waste we collect. Recycling simply means 
                        re-using resources, instead of putting them to 
                        e.g. a landfill. Reducing landfills is good 
                        because landfills releases harmful chemicals 
                        and greenhouse gasses. Recycling is also good as
                         it saves energy and water because you don’t 
                         have to produce something from raw material.
                    </p>
               </div>
           </div>
           <SecondFooter />
        </div>
    )
}


export default Recycling