import * as React from "react";
import "../styles/Home.css";
import BlackFamily from "../images/black-family.jpg";
import ClaimsLogo from "../images/claims-logo-2.png";
import Frame from "../images/frame.png";
import { OurServices } from "./OurServices";
import { MiniBlog } from "./MiniBlog";

export const HomePage = () => {
    return (
        <div id="homepage">
            <section className="splash-screen">
                <div className="container">
                    <div className="splash-screen-text">
                        <h5>
                            Affordable access <br />
                            <span>to the LAW</span>
                        </h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque nam massa. </p>
                        <button className="btn btn-outline-primary">Get Started</button>
                    </div>
                    <img src={BlackFamily} alt="black family" />
                </div>
            </section>
            <section className="about-us">
                <div className="container">
                    <h1>About Us</h1>
                    <img src={ClaimsLogo} alt={"icon-frame"} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat, et aliquam ac donec donec et lobortis. At sit vitae quis nibh ut sed ullamcorper varius ultricies. Donec lacinia nullam rhoncus, elementum vitae,
                        viverra. Suscipit scelerisque porta amet, non augue urna quis lorem. Ac ut eu vel faucibus porttitor luctus faucibus sagittis. Ut purus dictumst accumsan.
                    </p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </section>
            <section className="our-services ">
                <div className="container">
                    <h1>Our Services</h1>
                    <OurServices />
                </div>
            </section>
            <section className=" how-to-file">
                <div className="container">
                    <div>
                        <h2>
                            How to file
                            <br /> a CLAIM
                        </h2>
                        <button className="btn btn-primary">View</button>
                    </div>
                    <img src={Frame} alt={"icon-frame"} />
                </div>
            </section>

            <section className="blog-posts ">
                <div className="container">
                    <h1>Blog Posts</h1>
                    <MiniBlog />
                    <button className="btn btn-primary">View All</button>
                </div>
            </section>
            <section className="call-to-action ">
                <div className="container">
                    <h5>
                        Need Legal Advice or Counselling?
                        <br />
                        Message us today
                    </h5>

                    <button className="btn btn-primary">Get Started</button>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="footer-summary">
                        <div className="footer-contacts">
                            <h5>Contact Us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque nam massa at a.....</p>
                            <div>
                                <a href="/" className="fa fa-facebook">
                                    <span></span>
                                </a>
                                <a href="/" className="fa fa-twitter">
                                    <span></span>
                                </a>
                                <a href="/" className="fa fa-instagram">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                        <ul className="footer-link">
                            <li>
                                <a href="/">FAQ's</a>
                            </li>
                            <li>
                                <a href="/">Terms Of Service</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-about">
                        <h5>CLAIMS</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque nam massa at a.....</p>
                    </div>
                    <p className="footer-copyright">Copyright © Claims 2022</p>
                </div>
            </footer>
        </div>
    );
};
