import "../styles/Home.css";
import BlackFamily from "../images/black-family.jpg";
import ClaimsLogo from "../images/claims-logo-2.png";
import Frame from "../images/frame.png";
import { OurServices } from "./OurServices";
import { MiniBlog } from "./MiniBlog";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();
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
                        <button className="btn btn-outline-primary" onClick={() => navigate("/contact-us")}>
                            Get Started
                        </button>
                    </div>
                    <img src={BlackFamily} alt="black family" />
                </div>
            </section>
            <section className="about-us bg-grey">
                <div className="container">
                    <h1>About Us</h1>
                    <img src={ClaimsLogo} alt={"icon-frame"} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat, et aliquam ac donec donec et lobortis. At sit vitae quis nibh ut sed ullamcorper varius ultricies. Donec lacinia nullam rhoncus, elementum vitae,
                        viverra. Suscipit scelerisque porta amet, non augue urna quis lorem. Ac ut eu vel faucibus porttitor luctus faucibus sagittis. Ut purus dictumst accumsan.
                    </p>
                    <button className="btn btn-primary" onClick={() => navigate("/about")}>
                        Read More
                    </button>
                </div>
            </section>
            <section className="our-services bg-white">
                <div className="container">
                    <h1>Our Services</h1>
                    <OurServices />
                </div>
            </section>
            <section className=" how-to-file bg-grey">
                <div className="container">
                    <div>
                        <h2>How to file a CLAIM</h2>
                        <button className="btn btn-primary" onClick={() => navigate("/claims")}>
                            View
                        </button>
                    </div>
                    <img src={Frame} alt={"icon-frame"} />
                </div>
            </section>

            <section className="blog-posts bg-white">
                <div className="container">
                    <h1>Blog Posts</h1>
                    <MiniBlog />
                    <button className="btn btn-primary" onClick={() => navigate("/blog")}>
                        View All
                    </button>
                </div>
            </section>
            <section className="call-to-action bg-grey">
                <div className="container">
                    <h5>
                        Need Legal Advice or Counselling?
                        <br />
                        Message us today
                    </h5>

                    <button className="btn btn-primary" onClick={() => navigate("/contact-us")}>
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};
