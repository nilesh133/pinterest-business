import { useEffect } from "react";
import { useState } from "react";
import "./guideseducation.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { Collapse, Text } from "@nextui-org/react";
import {BiPlus} from "react-icons/bi";

const GuidesEducation = () =>{
    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");

    const changeCombination = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 0 && window.scrollY <= 1160) {
            setCombinationNumber("combinationOne");
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
        <div className={`ge_${combinationNumber}`}>
             <div
                className={classNames(`ge_navbar_${combinationNumber}`, "ge_navbar")}
            >
                <div className="ge_navbar_logo">Business</div>
                <div className="ge_navbar_items">
                    <div class="ge_navbar_dropdown">
                        <p className={classNames("ge_navbar_dropbtn")}>Why pinterest?</p>
                        <div
                            className={classNames(
                                `ge_navbar_dropdown_content_${combinationNumber}`,
                                "ge_navbar_dropdown_content"
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
                            <p onClick={() => navigate("/success-stories")}>Success story</p>
                        </div>
                    </div>
                    <div class="ge_navbar_dropdown">
                        <p className="ge_navbar_dropbtn">Create content</p>
                        <div
                            className={classNames(
                                `ge_navbar_dropdown_content_${combinationNumber}`,
                                "ge_navbar_dropdown_content"
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
                    <div class="ge_navbar_dropdown">
                        <p className="ge_navbar_dropbtn">Insights</p>
                        <div
                            className={classNames(
                                `ge_navbar_dropdown_content_${combinationNumber}`,
                                "ge_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-predicts")}>
                                Pinterest predicts
                            </p>
                        </div>
                    </div>
                    <div class="ge_navbar_dropdown">
                        <p className="ge_navbar_dropbtn">Resources</p>
                        <div
                            className={classNames(
                                `ge_navbar_dropdown_content_${combinationNumber}`,
                                "ge_navbar_dropdown_content"
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
                            `ge_navbar_login_${combinationNumber}`,
                            "ge_navbar_login"
                        )}
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </div>
                    <div
                        className={classNames(
                            `ge_navbar_signup_${combinationNumber}`,
                            "ge_navbar_signup"
                        )}
                        onClick={() => navigate("/create")}
                    >
                        Sign up
                    </div>
                </div>
            </div>
            <div className="ge_hero">
                <h1>Resources to guide you on your way</h1>
                <p>Get up to speed quickly, then dig into best practices. You can take free courses, swap ideas</p>
                <p>with other brands or browse some of our favourite Pins.</p>
            </div>
            <div className="ge_learn">
                <h1>Learn</h1>
                <div className="ge_learn_content">
                    <div className="ge_learn_contentbox">
                        <h2>Pinterest Academy</h2>
                        <p>Take free courses about topics such as content</p>
                        <p>development and measurement.</p>
                        <div className="ge_learn_contentbox_button">
                            Start classes
                        </div>
                    </div>
                    <div className="ge_learn_contentbox">
                        <h2>Webinars</h2>
                        <p>Get the latest tips and tricks, directly from the</p>
                        <p>Pinterest team.</p>
                        <div className="ge_learn_contentbox_button">
                            Watch videos
                        </div>
                    </div>
                    <div className="ge_learn_contentbox">
                        <h2>Best-in-class creative</h2>
                        <p>Take inspiration from the Pinterest Creative</p>
                        <p>Strategy team’s favourite Pins.</p>
                        <div className="ge_learn_contentbox_button">
                            Start examples
                        </div>
                    </div>
                </div>
            </div>
            <div className="ge_support">
                <h1>Get support</h1>
                <div className="ge_support_content">
                    <div className="ge_support_contentbox">
                        <h2>Pinterest Business community</h2>
                        <p>Join a growing community of businesses and</p>
                        <p>Creators. Look for ideas, swap best practices</p>
                        <p>and ask for advice.</p>
                        <div className="ge_support_contentbox_button">
                            Visit now
                        </div>
                    </div>
                    <div className="ge_support_contentbox">
                        <h2>Help Centre</h2>
                        <p>Get the latest tips and tricks, directly from the</p>
                        <p>Pinterest team.</p>
                        <div className="ge_support_contentbox_button">
                            Get help
                        </div>
                    </div>
                </div>
            </div>
            <div className="ge_footer">
                <div className="ge_footer_bottom">
                    <div className="ge_footer_bottom_left">
                        <h1>Pinterest</h1>
                        <select name="language" id="language">

                            <option value="English(India)">English(India)</option>
                            <option value="English(US)">English(US)</option>
                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                            <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                        </select>
                        <span>©️ 2022 Pinterest</span>
                    </div>
                    <div className="ge_footer_bottom_right">
                        <div className="ge_footer_bottom_right_column">
                            <h4>About</h4>
                            <ul>
                                <li>Our Pinterest Profile</li>
                                <li>Newsroom</li>
                                <li>Career</li>
                                <li>Brand guidelines</li>
                            </ul>
                        </div>
                        <div className="ge_footer_bottom_right_column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Business Community</li>
                                <li>For developers</li>
                                <li>For investors</li>
                            </ul>
                        </div>
                        <div className="ge_footer_bottom_right_column">
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

export default GuidesEducation;