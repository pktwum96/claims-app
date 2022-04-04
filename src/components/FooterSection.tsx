import { Link } from "react-router-dom";

export const FooterSection = () => {
    return (
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
                            <Link to="/faq">FAQ's</Link>
                        </li>
                        <li>
                            <Link to="/terms">Terms Of Service</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
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
    );
};
