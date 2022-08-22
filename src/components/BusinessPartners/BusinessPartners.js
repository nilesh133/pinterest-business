import { useEffect } from "react";
import { useState } from "react";
import "./businesspartners.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const BusinessPartners = () =>{
    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");

    const changeCombination = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 0 && window.scrollY <= 430) {
            setCombinationNumber("combinationOne");
        }
        else if(window.scrollY >= 430 && window.scrollY <= 1260){
            setCombinationNumber("combinationTwo");
        }
        else {
            setCombinationNumber("combinationThree");
        }
    };

    useEffect(() => {
        changeCombination();
        window.addEventListener("scroll", changeCombination);
    });

    return(
        <div className={`pbp_${combinationNumber}`}>
            <div
                className={classNames(`pbp_navbar_${combinationNumber}`, "pbp_navbar")}
            >
                <div className="pbp_navbar_logo">Business</div>
                <div className="pbp_navbar_items">
                    <div class="pbp_navbar_dropdown">
                        <p className={classNames("pbp_navbar_dropbtn")}>Why pinterest?</p>
                        <div
                            className={classNames(
                                `pbp_navbar_dropdown_content_${combinationNumber}`,
                                "pbp_navbar_dropdown_content"
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
                    <div class="pbp_navbar_dropdown">
                        <p className="pbp_navbar_dropbtn">Create content</p>
                        <div
                            className={classNames(
                                `pbp_navbar_dropdown_content_${combinationNumber}`,
                                "pbp_navbar_dropdown_content"
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
                    <div class="pbp_navbar_dropdown">
                        <p className="pbp_navbar_dropbtn">Insights</p>
                        <div
                            className={classNames(
                                `pbp_navbar_dropdown_content_${combinationNumber}`,
                                "pbp_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-predicts")}>
                                Pinterest predicts
                            </p>
                        </div>
                    </div>
                    <div class="pbp_navbar_dropdown">
                        <p className="pbp_navbar_dropbtn">Resources</p>
                        <div
                            className={classNames(
                                `pbp_navbar_dropdown_content_${combinationNumber}`,
                                "pbp_navbar_dropdown_content"
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
                            `pbp_navbar_login_${combinationNumber}`,
                            "pbp_navbar_login"
                        )}
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </div>
                    <div
                        className={classNames(
                            `pbp_navbar_signup_${combinationNumber}`,
                            "pbp_navbar_signup"
                        )}
                        onClick={() => navigate("/create")}
                    >
                        Sign up
                    </div>
                </div>
            </div>
            <div className="pbp_hero">
                <h1>Partner up for better results</h1>
                <p>Pinterest Business Partners make it easier for you to create great creative, scale your</p>
                <p>ads and measure performance. We’ve curated a great list of partners that know all</p>
                <p>about Pinterest—and they’re ready to help you grow.</p>
                <h2>Interested in becoming a partner? <span>Apply now.</span></h2>
            </div>
            <div className="pbp_range">
                <h1>Range of Partnership Specialties</h1>
                <h3>Pinterest Business Partners span a range of technical and creative specialties. Depending on your goals, you</h3>
                <h3>might want to work with multiple partners at once.</h3>
                <div className="pbp_range_content">
                    <div className="pbp_range_contentbox">
                        <h2>
                        Advertising
                        </h2>
                        <p>Work with experts in Pinterest media strategy,</p>
                        <p>media buying and campaign management.</p>
                    </div>
                    <div className="pbp_range_contentbox">
                        <h2>
                        Audiences
                        </h2>
                        <p>Get help with onboarding first-party data so</p>
                        <p>that you can use advanced targeting features.</p>
                    </div>
                    <div className="pbp_range_contentbox">
                        <h2>
                        Content
                        </h2>
                        <p>Build a stronger Pinterest presence with tools</p>
                        <p>such as Pin schedulers and engagement</p>
                        <p>dashboards.</p>
                    </div>
                    <div className="pbp_range_contentbox">
                        <h2>
                        Creative
                        </h2>
                        <p>Scale your success with creative tools or work</p>
                        <p>with an approved Pinterest design expert.</p>
                    </div>
                    <div className="pbp_range_contentbox">
                        <h2>
                        Measurement
                        </h2>
                        <p>Dig deeper into campaign performance with</p>
                        <p>sophisticated solutions and custom reports.</p>
                    </div>
                    <div className="pbp_range_contentbox">
                        <h2>
                        Shopping
                        </h2>
                        <p>Make it easier for people to shop for your</p>
                        <p>products with tools such as feed managers and</p>
                        <p>custom experiences.</p>
                    </div>
                </div>
            </div>
            <div className = "pbp_filter">
                <p>Filter by</p>
                <div className = "pbp_filter_options">
                    <h2>Speciality</h2>
                    <h2>Service model</h2>
                    <h2>Pricing model</h2>
                </div>
                <p>We don't have any results for those filters. Please try again.</p>
            </div>
            <div className="pbp_footer">
                <div className="pbp_footer_bottom">
                    <div className="pbp_footer_bottom_left">
                        <h1>Pinterest</h1>
                        <select name="language" id="language">

                            <option value="English(India)">English(India)</option>
                            <option value="English(US)">English(US)</option>
                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                            <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                        </select>
                        <span>©️ 2022 Pinterest</span>
                    </div>
                    <div className="pbp_footer_bottom_right">
                        <div className="pbp_footer_bottom_right_column">
                            <h4>About</h4>
                            <ul>
                                <li>Our Pinterest Profile</li>
                                <li>Newsroom</li>
                                <li>Career</li>
                                <li>Brand guidelines</li>
                            </ul>
                        </div>
                        <div className="pbp_footer_bottom_right_column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Business Community</li>
                                <li>For developers</li>
                                <li>For investors</li>
                            </ul>
                        </div>
                        <div className="pbp_footer_bottom_right_column">
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

export default BusinessPartners;