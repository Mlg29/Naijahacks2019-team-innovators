import React from "react"
import "./Service.css"
import Collection from "../two-column"
import Recycling from "../two-column2"


function Service() {
    return (
        <div>
            <Collection 
                image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576015538/k3qxmf1kmn1oegd0snmd.jpg"
                header="WASTE COLLECTION"
                description="Reliable and professional service"
                content="We intend to be the only waste collector in Nigeria who recycles the waste we collect.
                We collect waste from both residential and commercial clients providing a green footprint all over Nigeria.
                We ensure reliable and professional service through new trucks with GPS tracking, trained staff and additional options such as onsite sorting and environmental reporting."
                button="Read More About Collection"
                />
            <Recycling 
                image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576015538/hddrwe4snj8fluiyfmyb.webp"
                header="RECYCLING"
                description="Creating Healthier Cities"
                content="Recycling is the foundation of NaijaRecycler’s waste management model.
                We intend to have two sorting sites as a start, where we take the waste we collect, sort it into 45 different fractions and subsequently recycle it ourselves or through our local partners."
                button="Read More About Recycling"
                />
            <Collection 
                image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576015538/um6rxees4ghl7ncpapth.webp"
                header="COMPOSTING"
                description="Organic Compost for you!"
                content="Of all the waste we will be collecting, around 65% should be organic waste. A small part of of it is sold as pig food, and the rest is made into high-quality compost, which takes around 3-4 months.
                Our compost is called NaijaSoil and is a proven soil amendment that strengthens and rebuilds agricultural as well as garden soil. "
                button="Read More About Composting"
                />
        </div>
    )
}

export default Service