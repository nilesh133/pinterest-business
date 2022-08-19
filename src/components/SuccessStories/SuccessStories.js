import { useEffect } from "react";
import { useState } from "react";
import "./successstories.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const SuccessStories = () =>{
    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");

    const changeCombination = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 0 && window.scrollY <= 346) {
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
        <div className={`success_${combinationNumber}`}>
            <div
                className={classNames(`success_navbar_${combinationNumber}`, "success_navbar")}
            >
                <div className="success_navbar_logo">Business</div>
                <div className="success_navbar_items">
                    <div class="success_navbar_dropdown">
                        <p className={classNames("success_navbar_dropbtn", `${path === "/success-stories" ? "navbar_active" : ""}`)}>Why pinterest?</p>
                        <div
                            className={classNames(
                                `success_navbar_dropdown_content_${combinationNumber}`,
                                "success_navbar_dropdown_content"
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
                            <p onClick={() => navigate("/success-stories")} className = {path === "/success-stories" ? "navbar_active" : ""}>Success story</p>
                        </div>
                    </div>
                    <div class="success_navbar_dropdown">
                        <p className="success_navbar_dropbtn">Create content</p>
                        <div
                            className={classNames(
                                `success_navbar_dropdown_content_${combinationNumber}`,
                                "success_navbar_dropdown_content"
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
                    <div class="success_navbar_dropdown">
                        <p className="success_navbar_dropbtn">Insights</p>
                        <div
                            className={classNames(
                                `success_navbar_dropdown_content_${combinationNumber}`,
                                "success_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-predicts")}>
                                Pinterest predicts
                            </p>
                        </div>
                    </div>
                    <div class="success_navbar_dropdown">
                        <p className="success_navbar_dropbtn">Resources</p>
                        <div
                            className={classNames(
                                `success_navbar_dropdown_content_${combinationNumber}`,
                                "success_navbar_dropdown_content"
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
                            `success_navbar_login_${combinationNumber}`,
                            "success_navbar_login"
                        )}
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </div>
                    <div
                        className={classNames(
                            `success_navbar_signup_${combinationNumber}`,
                            "success_navbar_signup"
                        )}
                        onClick={() => navigate("/create")}
                    >
                        Sign up
                    </div>
                </div>
            </div>
            <div className="success_hero">
                <h1>See how creators of all sizes</h1>
                <h1>succeed on Pinterest</h1>
            </div>
            <div className="success_filter">
                <p>Filter by topic</p>
                <p>Industry</p>
                <div className="success_filter_content">
                    <div className="success_filter_contentbox">
                        <span>Awareness</span>
                        <div className="success_filter_contextbox_heading1">
                            <h1>Aligning ambitions</h1>
                            <h1>leads to campaign</h1>
                            <h1>success for CIBC</h1>
                        </div>
                        <div className="success_filter_contextbox_heading2">
                            <h1>14% lift in</h1>
                            <h1>consideration</h1>
                            <h1>amongst people</h1>
                            <h1>who banked with</h1>
                            <h1>CIBC's competitors</h1>
                        </div>
                        <span>CIBC</span>
                    </div>
                    <div className="success_filter_contentbox">
                        <span>Engagement</span>
                        <div className="success_filter_contextbox_heading">
                            <h1>From a source of</h1>
                            <h1>inspiration to</h1>
                            <h1>building Hina Bisht's</h1>
                            <h1>personal brand.</h1>
                        </div>
                        <span>Hina Bisht</span>
                    </div>
                    <div className="success_filter_contentbox">
                        <span>Engagement</span>
                        <div className="success_filter_contextbox_heading">
                            <h1>Prioritising quality</h1>
                            <h1>sees Navleen rocket</h1>
                            <h1>from 10k to 89k</h1>
                            <h1>followers in 1 year</h1>
                        </div>
                        <span>Navleen Kaur</span>
                    </div>
                    <div className="success_filter_contentbox">
                        <span>Engagement</span>
                        <div className="success_filter_contextbox_heading">
                            <h1>Nilofer's 55k</h1>
                            <h1>followers discover</h1>
                            <h1>the joy of</h1>
                            <h1>watercolors</h1>
                        </div>
                        <span>Nilofer Rehman</span>
                    </div>
                </div>
            </div>
            <div className="success_footer">
                <div className="success_footer_left">
                    <h1>Pinterest</h1>
                    <select name="language" id="language">

                        <option value="English(India)">English(India)</option>
                        <option value="English(US)">English(US)</option>
                        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                        <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                    </select>
                    <span>©️ 2022 Pinterest</span>
                </div>
                <div className="success_footer_right">
                    <div className="success_footer_right_column">
                        <h4>About</h4>
                        <ul>
                            <li>Our Pinterest Profile</li>
                            <li>Newsroom</li>
                            <li>Career</li>
                            <li>Brand guidelines</li>
                        </ul>
                    </div>
                    <div className="success_footer_right_column">
                        <h4>Resources</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>Business Community</li>
                            <li>For developers</li>
                            <li>For investors</li>
                        </ul>
                    </div>
                    <div className="success_footer_right_column">
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
    )
}

export default SuccessStories;