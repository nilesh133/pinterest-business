import { useEffect } from "react";
import { useState } from "react";
import "./gettingstarted.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

// Images Imports
import gs_hero_image from "../../images/getting-started/gs-hero-image.png"
import your_business_image from "../../images/getting-started/your-business-image.png"

// Next UI Imports
import { Collapse, Text } from "@nextui-org/react";

const GettingStarted = () =>{
    const navigate = useNavigate();

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");

    const changeCombination = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 0 && window.scrollY <= 980) {
            setCombinationNumber("combinationOne");
        }
        else if (window.scrollY >= 980 && window.scrollY <= 2760) {
            setCombinationNumber("combinationTwo");
        }
        else if (window.scrollY >= 2760 && window.scrollY <= 7460) {
            setCombinationNumber("combinationThree");
        }
        else {
            setCombinationNumber("combinationTwo");
        }
    };

    useEffect(() => {
        changeCombination();
        window.addEventListener("scroll", changeCombination);
    });
    return(
        <div className={`gs_${combinationNumber}`}>
            <div
                className={classNames(`gs_navbar_${combinationNumber}`, "gs_navbar")}
            >
                <div className="gs_navbar_logo">Business</div>
                <div className="gs_navbar_items">
                    <div class="gs_navbar_dropdown">
                        <p className="gs_navbar_dropbtn">Why pinterest?</p>
                        <div
                            className={classNames(
                                `gs_navbar_dropdown_content_${combinationNumber}`,
                                "gs_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/how-pinterest-works")}>
                                How pinterest works
                            </p>
                            <p onClick={() => navigate("/getting-started")}>
                                Getting started
                            </p>
                            <p onClick={() => navigate("/pinterest-audience")}>
                                The Pinterest audience
                            </p>
                            <p onClick={() => navigate("/success-story")}>Success story</p>
                        </div>
                    </div>
                    <div class="gs_navbar_dropdown">
                        <p className="gs_navbar_dropbtn">Create content</p>
                        <div
                            className={classNames(
                                `gs_navbar_dropdown_content_${combinationNumber}`,
                                "gs_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/creators")}>
                                Pinterest for creators
                            </p>
                            <p onClick={() => navigate("/how-to-make-pins")}>
                                Making pins: Tips and Tricks
                            </p>
                            <p onClick={() => navigate("/creative-best-practices")}>
                                Best practices
                            </p>
                        </div>
                    </div>
                    <div class="gs_navbar_dropdown">
                        <p className="gs_navbar_dropbtn">Insights</p>
                        <div
                            className={classNames(
                                `gs_navbar_dropdown_content_${combinationNumber}`,
                                "gs_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-predicts")}>
                                Pinterest predicts
                            </p>
                        </div>
                    </div>
                    <div class="gs_navbar_dropdown">
                        <p className="gs_navbar_dropbtn">Resources</p>
                        <div
                            className={classNames(
                                `gs_navbar_dropdown_content_${combinationNumber}`,
                                "gs_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-business-partners")}>
                                Pinterest Business Partners
                            </p>
                            <p onClick={() => navigate("/agency-resources")}>
                                Agency Resources
                            </p>
                            <p onClick={() => navigate("/guides-and-education")}>
                                Guides and Education
                            </p>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            `gs_navbar_login_${combinationNumber}`,
                            "gs_navbar_login"
                        )}
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </div>
                    <div
                        className={classNames(
                            `gs_navbar_signup_${combinationNumber}`,
                            "gs_navbar_signup"
                        )}
                        onClick={() => navigate("/create")}
                    >
                        Sign up
                    </div>
                </div>
            </div>
            <div className="gs_hero">
                <div className="gs_hero_images">
                    <div className="gs_hero_images_leftcol">
                        <div style={{width: "289px", height: "289px", background: "rgb(56, 105, 255)", borderRadius: "2rem", margin: "0.6rem" }}></div>
                        <div style={{width: "289px", height: "433px", background: "rgb(56, 105, 255)", borderRadius: "2rem", margin: "0.6rem" }}></div>
                    </div>
                    <div className="gs_hero_images_rightcol">
                    <img src={gs_hero_image} width="289px" height="385px" style={{ objectFit: "cover", borderRadius: "2rem", margin: "0.6rem" }} />
                    <div style={{width: "289px", height: "289px", background: "rgb(12, 59, 201)", borderRadius: "2rem", margin: "0.6rem" }}></div>
                    </div>
                </div>
                <div className="gs_hero_content">
                    <h1>Show it. Sell it.</h1>
                    <h1>See results.</h1>
                    <p>Pinterest works for all kinds of businesses, from content</p>
                    <p>creators to omnichannel retailers. It’s free to sign up, and</p>
                    <p>easy to get started.</p>
                </div>
            </div>
            {/* 317 641 */}
            <div className="gs_business">
            <div className="gs_business_image">
                    <img src={your_business_image} width = "317px" height = "641px" style = {{objectFit: "cover"}}/>
                </div>
                <div className="gs_business_accordion">
                    <div className="gs_business_accordion_content">
                        <h1>Your business</h1>
                        <h1>belongs here</h1>
                        <Collapse.Group style={{ marginTop: "2rem" }}>
                            <Collapse title="Get a Business account" expanded>
                                <Text style={{ color: "rgb(45, 85, 255)" }}>
                                You’ll get more out of Pinterest using a business account. Get access to special Pin formats, analytics and more.
                                </Text>
                            </Collapse>
                            <Collapse title="Showcase your ideas">
                                <Text style={{ color: "rgb(45, 85, 255)" }}>
                                Make Pins to tell the world what you’re all about. Choose from formats such as photos, videos and Idea Pins.
                                </Text>
                            </Collapse>
                            <Collapse title="Engage with your audience">
                                <Text style={{ color: "rgb(45, 85, 255)" }}>
                                We’ll show your Pins to the people that we think are most likely to love them. People can comment, react or even add photos of Pins that they’ve tried.
                                </Text>
                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default GettingStarted;