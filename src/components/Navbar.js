import "../stylesheets/Navbar.css"
import {
    Link
      } from "react-router-dom";

export const Navbar = () => {
    return(
        <div>
            <ul className="Navbar">
                <li>Blog</li>
                <Link to="/projects"><li>Projects</li></Link>
                <li>Resume</li>
                <li>Hobbies</li>
                <li>Home</li>
            </ul>
        </div>
    )
}