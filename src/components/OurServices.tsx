import * as React from "react";
import "../styles/OurServices.css";
import ClaimsLogo from "../images/claims-logo-2.png";
import Scales from "../images/scales.png";
import File from "../images/file.png";

export const OurServices = () => {
    const services = [
        {
            icon: Scales,
            title: "Legal Advice",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet aliquet amet amet eget commodo.",
        },
        {
            icon: File,
            title: "Access to Resources",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet aliquet amet amet eget commodo.",
        },
        {
            icon: ClaimsLogo,
            title: "Small Claims",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet aliquet amet amet eget commodo.",
        },
    ];
    return (
        <>
            {services.map((service) => {
                const { icon, title, description } = service;
                return (
                    <div key={title}>
                        <img src={icon} alt={title} />
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                );
            })}
        </>
    );
};
