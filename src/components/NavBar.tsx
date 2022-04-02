import * as React from "react";
import ClaimsLogo from "../images/claims-logo.png";
import NavBarToggler from "../images/Vector.png";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={ClaimsLogo} alt="Claims Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    CLAIMS
                </a>

                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <img src={NavBarToggler} alt={"navbar-toggler"} />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Claims
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary">Get Started</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
