import "../stylesheets/Content.css";
import pikachu from "../assets/pikachu.png"

export const Content = () => {
    return(
        <div className="Content-container">
            <div className="Content">
            <div className="Content-headerOne">
                Hey!
            </div>
            <div>
                <img height={200} src={pikachu} />
            </div>
            <div className="Content-headerTwo">
                I'm Hung.
            </div>
            <div className="Content-headerThree">
                I do/am
            </div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan lorem ut ex semper condimentum. Praesent pharetra nulla id fringilla maximus. Curabitur pharetra congue lorem a suscipit. Suspendisse consectetur ipsum quis dictum hendrerit. Curabitur at nisi sed risus placerat congue. Suspendisse elementum turpis vitae lobortis sollicitudin. Ut elementum, odio nec rutrum rutrum, ante lectus vehicula lorem, in ultrices velit odio eget lectus. Sed eu tortor ultricies, aliquet ipsum ut, luctus nisi. Mauris eget volutpat lacus, eget hendrerit velit. In sagittis vitae nunc nec ultricies. Praesent pellentesque purus et tempus lobortis. Proin aliquam, diam id porta cursus, nulla elit consectetur nibh, vel ullamcorper lectus erat nec enim. Praesent placerat et nibh non ornare.
            </div>
        </div>
        </div>
    )
}