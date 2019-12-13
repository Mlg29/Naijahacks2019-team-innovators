import React from 'react'
import "./Footer.css"
import SecondFooter from '../Footer2'



function Footer() {
    return (
        <div>
            <hr />
            <div className="container">
            <div className="row footer">
                <div className="col-lg-4">
                    <h1 className="footer-header">OUR OFFICE</h1>
                    <p className="footer-paragraph">320, Ikorodu Road.<br />
                    Lagos, Nigeria
                    </p>
                  
                    <p className="footer-paragraph">+2341 234 567</p>
                    <p className="footer-paragraph">info@naijarecycler.com</p>
                </div>

                <div className="col-lg-8">
                    <h1 className="footer-header">CONTACT US</h1>
                    <form>
                        <div className="footer-input">
                            <input id="footer-name" type="name" placeholder="Name*" name="name" className="form-control" />
                            <input id="footer-email" type="email" placeholder="Email*" name="email" className="form-control" />
                        </div>
                        
                        <textarea className="form-control" id="footer-textarea" rows="5" placeholder="Message" />
                        <br />
                        <button type="button" className="button">Contact Us</button>
                    </form>
                </div>
            </div>
            </div>
            <SecondFooter />
        </div>
        
    )
}

export default Footer