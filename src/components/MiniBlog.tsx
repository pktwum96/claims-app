import Police from "../images/police.jpg";
import Riot from "../images/riot.jpg";
import Court from "../images/court.jpg";

export const MiniBlog = () => {
    const blogPosts = [
        {
            icon: Riot,
            title: "Riots in UK",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet aliquet amet amet eget commodo.",
            link: "",
        },
        {
            icon: Police,
            title: "Police Brutality",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet aliquet amet amet eget commodo.",
            link: "",
        },
        {
            icon: Court,
            title: "What are rights?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet aliquet amet amet eget commodo.",
            link: "",
        },
    ];
    return (
        <div className="d-flex flex-column flex-md-row">
            {blogPosts.map((post) => {
                const { icon, title, description, link } = post;
                return (
                    <div key={title} className="card text-center">
                        <a href={link}>
                            <img src={icon} alt={title} />
                            <h5>
                                <strong>{title}</strong>
                            </h5>
                            <p>{description}</p>
                        </a>
                        <button className="btn btn-primary">View Post</button>
                    </div>
                );
            })}
        </div>
    );
};
