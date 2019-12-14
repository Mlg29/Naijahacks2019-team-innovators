import React from "react"
import "./WasteCollection.css"
import Navigation from "../../component2/Navigation"
import SecondFooter from "../../component2/Footer2"



function WasteCollection() {
    return (
        <div>
            <Navigation />
            <h1 className="waste-collection">Waste Colection</h1>

            <div className="waste-div">
                <div className="waste-image-div">
                    <img className="waste-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576015538/k3qxmf1kmn1oegd0snmd.jpg" alt="" />
                </div>
                
                <div className="waste-image-div2">
                    <p className="waste-image-paragraph">NaijaRecycler collects waste all over Nigeria
                        (see map below), and collects all types of waste 
                        except for hazardous. Our waste collection is done 
                        in new trucks equipped with GPS to make for a 
                        smooth and professional service.
                    </p>

                    <h3 className="waste-image-header">COMMERCIAL</h3>
                    <p className="waste-image-paragraph">We collect from all kinds of commercial clients: 
                        Office buildings, Shopping Malls, Hotels, Shops 
                        and Restaurants. We also offer on-site sorting and 
                        recycling reports, which helps businesses sharpen their green profile.
                    </p>
                    
                    <h3 className="waste-image-header">RESIDENTIAL</h3>
                    <p className="waste-image-paragraph">We collect from household across all income areas. 
                        This includes apartment blocks, townhouses and 
                        resident associations. We collect from Single Homes as well.
                    </p>
            </div>
              
            </div>
            <SecondFooter />
            
        </div>
    )
}


export default WasteCollection