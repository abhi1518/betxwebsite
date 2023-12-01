import React from 'react';
import Header from '../header/Header';
import "./Homepage.css";
import { Link } from 'react-router-dom';
import Fotter from '../fotter/Fotter';
import image1 from "../assets/carosalImage1.jpg";
import image2 from "../assets/carosalImage2.jpg";
import image3 from "../assets/carosalImage3.avif"
function Homepage() {
    return (
        <div>
            <Header />
            <section>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={image1} alt="First slide" style={{ height: "50vh" }} />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={image2} alt="Second slide" style={{ height: "50vh" }} />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={image3} alt="Third slide" style={{ height: "50vh" }} />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <section>
                <div class="container-fluide mt-5">
                    <div class="text-center">
                        <h1>Start Playing Game</h1>
                    </div>
                    <div class="mx-2 mt-3">
                        <h3>Popular Games</h3>
                    </div>
                    <div class="row homepagerow mt-2">

                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card ">
                                <img class="card-img-top imagewidth" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                    <div class="mx-2 mt-3">
                        <h3>Indian Casinos</h3>
                    </div>
                    <div class="row homepagerow mt-2">

                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card ">
                                <img class="card-img-top imagewidth" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                    <div class="mx-2 mt-3">
                        <h3>Esports</h3>
                    </div>
                    <div class="row homepagerow mt-2">

                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card ">
                                <img class="card-img-top imagewidth" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-1 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 imagegap">
                            <div class="card imagewidth">
                                <img class="card-img-top" src={image1} alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-dark pt-5 pb-5 mt-5">
                <div class="text-center text-white">
                    <h1>Download Our App</h1>
                    <p>To Explore More Features</p>
                    <button type="button" class="btn btn-success">Click here to Download</button>
                </div>
            </section>
            <section class="pb-5" style={{ backgroundColor: "black" }}>
                <div class="text-center text-white pt-5 pb-3">
                    <h1>We are ready to help</h1>
                </div>
                <div class="container" style={{ color: "white" }}>
                    <div class="row">
                        <div class="col-lg-7 col-xl-8 mb-4">
                            <div class="wow fadeInUp shadow-three bg-dark mb-12 rounded-sm p-4 p-lg-5">
                                <h2 class="mb-3 text-2xl font-bold text-black">
                                    Need Help? Open a Ticket
                                </h2>
                                <p class="mb-4 text-base font-medium text-body-color">
                                    Our support team will get back to you ASAP via email.
                                </p>
                                <form>
                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <label for="name" class="mb-3 block text-sm font-medium">
                                                Your Name
                                            </label>
                                            <input type="text" placeholder="Enter your name" class="form-control" />
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <label for="email" class="mb-3 block text-sm font-medium">
                                                Your Email
                                            </label>
                                            <input type="email" placeholder="Enter your email" class="form-control" />
                                        </div>
                                        <div class="col-md-12 mb-4">
                                            <label for="message" class="mb-3 block text-sm font-medium">
                                                Your Message
                                            </label>
                                            <textarea name="message" rows="5" placeholder="Enter your Message" class="form-control"></textarea>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="btn btn-primary px-4 py-2">
                                                Submit Ticket
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-5 col-xl-4">
                            <div class="wow fadeInUp rounded-sm bg-dark p-4 p-lg-5">
                                <h3 class="mb-4 text-2xl font-bold leading-tight text-black">
                                    Subscribe to receive future updates
                                </h3>
                                <p class="mb-4 border-b border-body-color border-opacity-25 pb-4 text-base leading-relaxed text-body-color">
                                    Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.
                                </p>
                                <div class="mb-4">
                                    <input type="text" name="name" placeholder="Enter your name" class="form-control" />
                                </div>
                                <div class="mb-4">
                                    <input type="email" name="email" placeholder="Enter your email" class="form-control" />
                                </div>
                                <div class="mb-4">
                                    <input type="submit" value="Subscribe" class="btn btn-primary px-4 py-2" />
                                </div>
                                <p class="text-center text-body-color">
                                    No spam guaranteed, So please don’t send any spam mail.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Fotter />
        </div>
    )
}

export default Homepage