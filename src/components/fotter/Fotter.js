import React from 'react';
import { Link } from 'react-router-dom';
function Fotter() {
  return (
    <div>
         <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
                <section>
                    <div className="container text-center text-md-start">
                        <div className="row">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
                                <h6 className="fw-bold">Betx</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
                                <h6 className="text-uppercase fw-bold">Products</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>
                                    <Link to="#!" className="text-white">Terms & Condition</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white">Privacy Policy</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white">About Us</Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>
                                    <Link to="#!" className="text-white">Your Account</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white">Become an Affiliate</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white">Shipping Rates</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-3" >
                    © 2023 Copyright:<Link className="text-white" to="">betx.one</Link>
                </div>
            </footer>
    </div>
  )
}

export default Fotter