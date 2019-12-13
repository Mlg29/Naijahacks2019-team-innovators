import React from "react"
import "./About.css"
import Navigation from "../../component2/Navigation"
import SecondFooter from "../../component2/Footer2"



function About() {
    return (
        <div className="about">

            <Navigation />
            <h1 className="about-header">The Waste Issue We are Solving</h1>

            <div className="about-div">
                <div className="about-div-div">
                    <img className="about-div-image" src="https://img.icons8.com/office/40/000000/note.png" alt=""/>
                    <h1 className="about-div-header">What We Do</h1>
                    <p className="about-div-paragraph">We collect your waste like every other waste collector, but, instead of taking it to a landfil, we take it to our own sites, where we sort the waste, and then recycle 95% either ourselves or through our local partners. This represents one of the highest recycling rates in the world.</p>
                </div>
                <div>
                    <img className="about-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576015538/um6rxees4ghl7ncpapth.webp" alt="" width="500"/>
                </div>
                <div className="about-div-div">
                    <img className="about-div-image"  src="https://img.icons8.com/ultraviolet/40/000000/reflector-bulb.png" alt="" />
                    <h1 className="about-div-header">Why We Do It </h1>
                    <p className="about-div-paragraph">We strive to make Nigeria a cleaner, healthier place to live by recycling waste into new, usable items. Our offering is to enable our clients to be green and environmentally-conscious, and contribute to a good environment that will benefit people, animals and the economy alike.</p>
                </div>
            </div>

            <div className="about-section">
                <div className="about-section-div">
                    <h1 className="about-section-header">How We Work</h1>
                    <p className="about-section-paragraph">At NaijaRecycler, we have a fleet of orange trucks. One of them will come to your sites to collect all of your waste in bags that we give to you. Then we bring the waste to our sorting sites, where the waste will be sorted into more than 40 waste fractions. The three major sorting categories are organic waste, dry recyclables (paper, plastic, metal and glass) and residual waste. We turn the organic waste into compost at our compost site, which will then sell to farms so that they can grow healthy crops. The dry recyclables are sorted and either processed internally or through one of our recycling partners. As we are able to recycle 95% of the waste we collect, we only take 5% to a landfills (mostly diapers and sanitary towels).</p>
                </div>

                <div>
                    <img className="about-section-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576015538/hddrwe4snj8fluiyfmyb.webp" alt="" width="700"/>
                </div>
            </div>

            <div className="about-impact">
                <div className="about-impact-div">
                    <h1 className="about-impact-header">Our Impact</h1>
                    <p className="about-impact-paragraph">We recycle 95% of the waste we collect – one of the highest recycling rates in the world (the USA only recycle 35%)</p>
                    <p className="about-impact-paragraph">We manage and recycle more than 1’300 tons of waste per month</p>
                    <p className="about-impact-paragraph">We save more than 10,000 tons of green house gas emissions annually through our composting and recycling</p>
                </div>
                <div className="about-impact-div2">
                    <p className="about-impact-paragraph">We have created 250 full-time jobs. More than 50% of our       employees are women.
                        Enable farmers to increase their agricultural soil fertility</p>
                </div>
            </div>
            <SecondFooter />
        </div>
    )
}


export default About