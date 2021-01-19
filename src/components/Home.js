import "../stylesheets/Home.css"
import {Navbar} from "./Navbar"
import {Content} from "./Content"
import {Footer} from "./Footer"

const Home = () => {
    return (
        <div className="Home-container">
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}

export default Home;
