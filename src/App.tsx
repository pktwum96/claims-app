import { Blog } from "./components/Blog";
import { HomePage } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404 } from "./components/Error404";
import { AboutUs } from "./components/AboutUs";
import { ClaimsApp } from "./components/ClaimsApp";
import { FooterSection } from "./components/FooterSection";
import { ContactUs } from "./components/ContactUs";
import { ScrollToTop } from "./helpers/ScrollToTop";

interface NavRouteProps {
    path?: string;
    component: JSX.Element;
}
const NavRoute = (props: NavRouteProps) => {
    return (
        <>
            <NavBar isHomePage={!!(props.path === "/")} />
            {props.component}
        </>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<NavRoute path="/" component={<HomePage />} />} />
                <Route path="home" element={<NavRoute path="/" component={<HomePage />} />} />
                <Route path="blog" element={<NavRoute component={<Blog />} />} />
                <Route path="claims" element={<NavRoute component={<ClaimsApp />} />} />
                <Route path="about" element={<NavRoute component={<AboutUs />} />} />
                <Route path="contact-us" element={<NavRoute component={<ContactUs />} />} />

                <Route path="*" element={<NavRoute component={<Error404 />} />} />
            </Routes>
            <FooterSection />
        </BrowserRouter>
    );
};

export default App;
