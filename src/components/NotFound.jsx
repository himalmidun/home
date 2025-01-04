import { Jumbotron } from "./home/migration";
import React from "react";

const NotFound = React.forwardRef((props, ref) => {
    console.log("Rendering NotFound Component");
    return (
        <Jumbotron >
            <div style={{ textAlign: "center", padding: "50px", margin:0 }}>
                <h1 ref={ref}>404 - Page Not Found</h1>
                <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
                    Go back home
                </a>
            </div>
        </Jumbotron>
    );
});

export default NotFound;
