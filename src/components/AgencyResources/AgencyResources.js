import { useEffect, useState } from "react"
import "./agencyresources.css"
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

// Images Import
import agency_resources_hero_image1 from "../../images/agency-resources/agency-resources-hero/agency-resources-hero-image1.png"
import agency_resources_hero_image2 from "../../images/agency-resources/agency-resources-hero/agency-resources-hero-image2.png"
import agency_resources_hero_image3 from "../../images/agency-resources/agency-resources-hero/agency-resources-hero-image3.gif"
import agency_resources_hero_image4 from "../../images/agency-resources/agency-resources-hero/agency-resources-hero-image4.png"
import agency_resources_agency_toolkit_image1 from "../../images/agency-resources/agency-resources-agency-toolkit/agency-resources-agency-toolkit-image1.png"
import agency_resources_agency_toolkit_image2 from "../../images/agency-resources/agency-resources-agency-toolkit/agency-resources-agency-toolkit-image2.png"

// Next UI Imports
import { Collapse, Text } from "@nextui-org/react";
// import { AiOutlinePlus } from "react-icons/ai"
import { BsPlusLg } from "react-icons/bs";
import { BiPlus } from "react-icons/bi"

import AOS from 'aos';
import 'aos/dist/aos.css';

const AgencyResources = () => {
    AOS.init({
        duration: 400,
        easing: 'ease',
    });

    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne")

    const changeCombination = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 0 && window.scrollY <= 956) {
            setCombinationNumber("combinationOne")
        }
        else if (window.scrollY >= 956 && window.scrollY <= 1740) {
            setCombinationNumber("combinationTwo")
        }
        else {
            setCombinationNumber("combinationOne")
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
                        <p className="ar_navbar_dropbtn">Why pinterest?</p>
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
                        <p className={classNames("ar_navbar_dropbtn", `${path === "/agency-resources" ? "navbar_active" : ""}`)}>Resources</p>
                        <div className={classNames(`ar_navbar_dropdown_content_${combinationNumber}`, "ar_navbar_dropdown_content")}>
                            <p onClick={() => navigate("/pinterest-business-partners")}>Pinterest Business Partners</p>
                            <p onClick={() => navigate("/agency-resources")} className={path === "/agency-resources" ? "navbar_active" : ""}>Agency Resources</p>
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
                <div className="ar_hero_images" data-aos="fade-up">
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
                <div className="ar_pitch_right" data-aos="fade-up">
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
            <div className="ar_agencytoolkit">
                <h1>Get our agency toolkits</h1>
                <div className="ar_agencytoolkit_content_container">
                    <div className="ar_agencytoolkit_content">
                        <img src={agency_resources_agency_toolkit_image1} data-aos="fade-up"/>
                        <h2>Media agency guide</h2>
                        <div className="ar_agencytoolkit_content_para">
                            <p>Get help picking the right campaign type, analysing results</p>
                            <p>and more</p>
                        </div>
                        <div className="ar_agencytoolkit_content_button">
                            Download now
                        </div>
                    </div>
                    <div className="ar_agencytoolkit_content">
                        <img src={agency_resources_agency_toolkit_image2} data-aos="fade-up"/>
                        <h2>Creative agency guide</h2>
                        <div className="ar_agencytoolkit_content_para">
                            <p>Learn essential tactics for creating high-performing static</p>
                            <p>and Video Pins.</p>
                        </div>
                        <div className="ar_agencytoolkit_content_button">
                            Download now
                        </div>
                    </div>
                </div>
            </div>
            <div className="ar_footer">
                <div className="ar_footer_collapse">
                    <Collapse.Group style={{ color: "rgb(225, 246, 215)" }}>
                        <Collapse title="Footnotes" arrowIcon={<BiPlus />} onClick = {() => console.log("clicked")}>
                            <div className="ar_footer_collapse_contentcontainer">
                                <div className="ar_footer_collapse_content">
                                    <span>1</span>
                                    <p>Path to Purchase Research 2019/2020, UK;</p>
                                    <p>GlobalWebIndex 2019 Q1-Q4, UKNielsen</p>
                                </div>
                            </div>
                        </Collapse>
                    </Collapse.Group>
                </div>
                <div className="ar_footer_bottom">
                    <div className="ar_footer_bottom_left">
                        <h1>Pinterest</h1>
                        <select name="language" id="language">

                            <option value="English(India)">English(India)</option>
                            <option value="English(US)">English(US)</option>
                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                            <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                        </select>
                        <span>©️ 2022 Pinterest</span>
                    </div>
                    <div className="ar_footer_bottom_right">
                        <div className="ar_footer_bottom_right_column">
                            <h4>About</h4>
                            <ul>
                                <li>Our Pinterest Profile</li>
                                <li>Newsroom</li>
                                <li>Career</li>
                                <li>Brand guidelines</li>
                            </ul>
                        </div>
                        <div className="ar_footer_bottom_right_column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Business Community</li>
                                <li>For developers</li>
                                <li>For investors</li>
                            </ul>
                        </div>
                        <div className="ar_footer_bottom_right_column">
                            <h4>Policies</h4>
                            <ul>
                                <li>Copyright & Trademark</li>
                                <li>Terms of service</li>
                                <li>Privacy and Cookies</li>
                                <li>Personalised ads</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default AgencyResources;