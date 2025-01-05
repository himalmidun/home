import { Jumbotron } from "./home/migration";
import React from "react";

const NotFound = React.forwardRef((props, ref) => {
    console.log("Rendering NotFound Component");
    return (
        <Jumbotron >
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "50px",
                margin: 0
            }}>
                <img src="/lost.png" alt="Error 404" style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "430px",
                    width: "auto",
                    position: "relative"
                }} />
                <h1 ref={ref} style={{ marginTop: '20px', fontSize: '5em' }}>404 - Page Not Found</h1>
                {/* <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
                    Go back home
                </a> */}

                <a href="/" style={{
                    color: "#007bff",
                    textDecoration: "none",
                    fontSize: "20px",
                    fontWeight: "bold",
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: 50,
                }}>
                    <i class="fa fa-home" style={{
                        marginRight: "8px",
                        transition: "transform 0.3s ease"
                    }}></i>
                    Go back home
                </a>
            </div>
        </Jumbotron>
    );
});

export default NotFound;
