import { useEffect, useState } from "react"
import "./agencyresources.css"
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

// Images Import
import agency_resources_hero_image1 from "../../images/agency-resources/agency-resources-hero/agency-resources-hero-image1.png"
import agency_resources_hero_image2 from "../../images/agency-resources/agency-resources-hero/agency-resources-hero-image2.png"
import agency_resources_hero_image3 from "../../images/agency-resources/agency-resources-hero/agency-resources-hero-image3.gif"
import agency_resources_hero_image4 from "../../images/agency-resources/agency-resources-hero/agency-resources-hero-image4.png"

// Next UI Imports
import { Collapse, Text } from "@nextui-org/react";
// import { AiOutlinePlus } from "react-icons/ai"
import { BsPlusLg } from "react-icons/bs";
import { BiPlus } from "react-icons/bi"

const HowPinterestWorks = () => {
    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne")

    const changeCombination = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 0 && window.scrollY <= 956) {
            setCombinationNumber("combinationOne")
        }
        else if (window.scrollY >= 956 && window.scrollY <= 3688) {
            setCombinationNumber("combinationTwo")
        }
        else {
            setCombinationNumber("combinationThree")
        }
    }

    useEffect(() => {
        changeCombination()
        window.addEventListener("scroll", changeCombination)
    })

    return (
        <div className={`ar_${combinationNumber}`}>
            <div className={classNames(`ar_navbar_${combinationNumber}`, "ar_navbar")}>
                <div className="ar_navbar_logo">Business</div>
                <div className="ar_navbar_items" >
                    <div class="ar_navbar_dropdown">
                        <p className={classNames("ar_navbar_dropbtn", `${path === "/how-pinterest-works" ? "navbar_active" : ""}`)}>Why pinterest?</p>
                        <div className={classNames(`ar_navbar_dropdown_content_${combinationNumber}`, "ar_navbar_dropdown_content")}>
                            <p onClick={() => navigate("/how-pinterest-works")} className={path === "/how-pinterest-works" ? "navbar_active" : ""}>How pinterest works</p>
                            <p onClick={() => navigate("/getting-started")}>Getting started</p>
                            <p onClick={() => navigate("/pinterest-audience")}>The Pinterest audience</p>
                            <p onClick={() => navigate("/success-stories")}>Success story</p>
                        </div>
                    </div>
                    <div class="ar_navbar_dropdown">
                        <p className="ar_navbar_dropbtn">Create content</p>
                        <div className={classNames(`ar_navbar_dropdown_content_${combinationNumber}`, "ar_navbar_dropdown_content")}>
                            <p onClick={() => navigate("/creators")}>Pinterest for creators</p>
                            <p onClick={() => navigate("/how-to-make-pins")}>Making pins: Tips and Tricks</p>
                            <p onClick={() => navigate("/creative-best-practices")}>Best practices</p>

                        </div>
                    </div>
                    <div class="ar_navbar_dropdown">
                        <p className="ar_navbar_dropbtn">Insights</p>
                        <div className={classNames(`ar_navbar_dropdown_content_${combinationNumber}`, "ar_navbar_dropdown_content")}>
                            <p onClick={() => navigate("/pinterest-predicts")}>Pinterest predicts</p>
                        </div>
                    </div>
                    <div class="ar_navbar_dropdown">
                        <p className="ar_navbar_dropbtn">Resources</p>
                        <div className={classNames(`ar_navbar_dropdown_content_${combinationNumber}`, "ar_navbar_dropdown_content")}>
                            <p onClick={() => navigate("/pinterest-business-partners")}>Pinterest Business Partners</p>
                            <p onClick={() => navigate("/agency-resources")}>Agency Resources</p>
                            <p onClick={() => navigate("/guides-and-education")}>Guides and Education</p>
                        </div>
                    </div>
                    <div className={classNames(`ar_navbar_login_${combinationNumber}`, "ar_navbar_login")} onClick={() => navigate("/login")}>
                        Log in
                    </div>
                    <div className={classNames(`ar_navbar_signup_${combinationNumber}`, "ar_navbar_signup")} onClick={() => navigate("/create")}>
                        Sign up
                    </div>
                </div>
            </div>
            <div className="ar_hero">
                <div className="ar_hero_images">
                    <div className="ar_hero_images_leftcol">
                        <img src={agency_resources_hero_image1} width="289px" height="346px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                        <img src={agency_resources_hero_image2} width="289px" height="346px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                    </div>
                    <div className="ar_hero_images_rightcol">
                        <img src={agency_resources_hero_image3} width="289px" height="385px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                        <img src={agency_resources_hero_image4} width="289px" height="346px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                    </div>
                </div>
                <div className="ar_hero_content">
                    <h1>Help your clients</h1>
                    <h1>thrive on Pinterest</h1>
                    <p>We’re here to help you and your clients succeed. From your</p>
                    <p>first Pinterest pitch to measuring results, our agency</p>
                    <p>resources support you every step of the way.</p>
                </div>
            </div>
            <div className="ar_pitch">
                <div className="ar_pitch_left">
                    <div className="ar_pitch_left_content">
                    <h1>Why pitch</h1>
                    <h1>Pinterest</h1>
                    <div className="ar_pitch_left_para">
                        <p>Pinterest is a full-funnel solution that reaches high-intent</p>
                        <p>audiences. It’s the only platform where people actively plan for</p>
                        <p>what’s next, so you can reach them at critical moments</p>
                        <p>throughout the decision-making process.</p>
                    </div>
                    <div className="ar_pitch_left_button" onClick={() => navigate("/pinterest-audience")}>
                        Read success stories
                    </div>
                    </div>
                   
                </div>
                <div className="ar_pitch_right">
                    <div className="ar_pitch_right_image"></div>
                    <div className={classNames(`ar_pitch_right_card_${combinationNumber}`, "ar_pitch_right_card")}>
                        <h1>61%</h1>
                        <p>of Pinners in the UK have</p>
                        <p>gone on to make a</p>
                        <p>purchase as a result of</p>
                        <p>seeing branded content.<sup>1</sup></p>
                    </div>
                </div>
            </div>
            <div className="ar_agency">
                <h1>Afency</h1>
            </div>
        </div>
    )
}

export default HowPinterestWorks;