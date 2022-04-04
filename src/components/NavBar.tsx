import NavBarToggler from "../images/Vector.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import { ClaimsLogoSVG } from "./claims-logo-svg";
import * as React from "react";

interface NavBarProps {
    isHomePage: boolean;
}

export const NavBar = (props: NavBarProps) => {
    const navigate = useNavigate();
    const links = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About Us",
            url: "/about",
        },
        {
            name: "Claims",
            url: "/claims",
        },
        {
            name: "Blog",
            url: "/blog",
        },
    ];

    const [expanded, setExpanded] = React.useState(false);
    return (
        <nav className={"navbar navbar-expand-md" + (props.isHomePage ? " homepage" : "") + (expanded ? " expanded" : "")}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <ClaimsLogoSVG />
                    CLAIMS
                </Link>

                <button
                    onClick={() => {
                        setExpanded(!expanded);
                    }}
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <img src={NavBarToggler} alt={"navbar-toggler"} />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {links.map((link) => {
                            return (
                                <li className="nav-item" key={link.name}>
                                    <NavLink className={({ isActive }) => (isActive ? "active" : "") + " nav-link"} aria-current="page" to={link.url}>
                                        {link.name}
                                    </NavLink>
                                </li>
                            );
                        })}
                        <li className="nav-item">
                            <button className="btn btn-primary" onClick={() => navigate("/contact-us")}>
                                Get Started
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
