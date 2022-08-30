import { useEffect } from "react";
import { useState } from "react";
import "./gettingstarted.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images Imports
import gs_hero_image from "../../images/getting-started/gs-hero-image.png"
import your_business_image from "../../images/getting-started/your-business-image.png"
import gs_support_image1 from "../../images/getting-started/gs-support/gs-support-image1.png"
import gs_support_image2 from "../../images/getting-started/gs-support/gs-support-image2.png"
import gs_inspiration_image1 from "../../images/getting-started/gs-inspiration/gs-inspiration-image2.png"
import gs_inspiration_image2 from "../../images/getting-started/gs-inspiration/gs-inspiration-image1.png"
import gs_inspiration_image3 from "../../images/getting-started/gs-inspiration/gs-inspiration-image3.png"
import gs_inspiration_image4 from "../../images/getting-started/gs-inspiration/gs-inspiration-image4.png"
import gs_inspiration_image5 from "../../images/getting-started/gs-inspiration/gs-inspiration-image5.png"
import gs_inspiration_image6 from "../../images/getting-started/gs-inspiration/gs-inspiration-image6.png"
import gs_inspiration_image7 from "../../images/getting-started/gs-inspiration/gs-inspiration-image7.png"
import gs_inspiration_image8 from "../../images/getting-started/gs-inspiration/gs-inspiration-image8.png"

// Next UI Imports
import { Collapse, Text } from "@nextui-org/react";

import { BsPlusLg } from "react-icons/bs"
import { BiPlus } from "react-icons/bi"

const GettingStarted = () => {
    AOS.init({
        duration: 400,
        easing: 'ease',
    });

    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");

    const changeCombination = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 0 && window.scrollY <= 980) {
            setCombinationNumber("combinationOne");
        }
        else if (window.scrollY >= 980 && window.scrollY <= 2544) {
            setCombinationNumber("combinationTwo");
        }
        else if (window.scrollY >= 2544 && window.scrollY <= 3139) {
            setCombinationNumber("combinationThree");
        }
        else if (window.scrollY >= 3139 && window.scrollY <= 4046) {
            setCombinationNumber("combinationFour");
        }
        else if (window.scrollY >= 4046 && window.scrollY <= 5048) {
            setCombinationNumber("combinationFive");
        }
        else {
            setCombinationNumber("combinationSix");
        }
    };

    useEffect(() => {
        changeCombination();
        window.addEventListener("scroll", changeCombination);
    });
    return (
        <div className={`gs_${combinationNumber}`}>
            <div
                className={classNames(`gs_navbar_${combinationNumber}`, "gs_navbar")}
            >
                <div className="gs_navbar_logo">Business</div>
                <div className="gs_navbar_items">
                    <div class="gs_navbar_dropdown">
                        <p className={classNames("gs_navbar_dropbtn", `${path === "/getting-started" ? "navbar_active" : ""}`)}>Why pinterest?</p>
                        <div
                            className={classNames(
                                `gs_navbar_dropdown_content_${combinationNumber}`,
                                "gs_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/how-pinterest-works")}>
                                How pinterest works
                            </p>
                            <p onClick={() => navigate("/getting-started")} className={path === "/getting-started" ? "navbar_active" : ""}>
                                Getting started
                            </p>
                            <p onClick={() => navigate("/pinterest-audience")}>
                                The Pinterest audience
                            </p>
                            <p onClick={() => navigate("/success-stories")}>Success story</p>
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
                <div className="gs_hero_images" data-aos="fade-up">
                    <div className="gs_hero_images_leftcol">
                        <div style={{ width: "289px", height: "289px", background: "rgb(56, 105, 255)", borderRadius: "2rem", margin: "0.6rem" }}></div>
                        <div style={{ width: "289px", height: "433px", background: "rgb(56, 105, 255)", borderRadius: "2rem", margin: "0.6rem" }}></div>
                    </div>
                    <div className="gs_hero_images_rightcol">
                        <img src={gs_hero_image} width="289px" height="385px" style={{ objectFit: "cover", borderRadius: "2rem", margin: "0.6rem" }} />
                        <div style={{ width: "289px", height: "289px", background: "rgb(12, 59, 201)", borderRadius: "2rem", margin: "0.6rem" }}></div>
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
            <div className="gs_business">
                <div className="gs_business_image" data-aos="fade-up">
                    <img src={your_business_image} width="317px" height="641px" style={{ objectFit: "cover" }} />
                </div>
                <div className="gs_business_accordion" data-aos="fade-up">
                    <div className="gs_business_accordion_content">
                        <h1>Your business</h1>
                        <h1>belongs here</h1>
                        <Collapse.Group style={{ marginTop: "2rem" }}>
                            <Collapse title="Get a Business account" expanded arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(45, 85, 255)", padding: "1rem 0" }}>
                                <Text style={{ color: "rgb(45, 85, 255)" }}>
                                    You’ll get more out of Pinterest using a business account. Get access to special Pin formats, analytics and more.
                                </Text>
                            </Collapse>
                            <Collapse title="Showcase your ideas" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(45, 85, 255)", padding: "1rem 0" }}>
                                <Text style={{ color: "rgb(45, 85, 255)" }}>
                                    Make Pins to tell the world what you’re all about. Choose from formats such as photos, videos and Idea Pins.
                                </Text>
                            </Collapse>
                            <Collapse title="Engage with your audience" arrowIcon={<BsPlusLg />} style={{ padding: "1rem 0" }}>
                                <Text style={{ color: "rgb(45, 85, 255)" }}>
                                    We’ll show your Pins to the people that we think are most likely to love them. People can comment, react or even add photos of Pins that they’ve tried.
                                </Text>
                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>

            </div>
            <div className="gs_build">
                <h1>Build engagement from your</h1>
                <h1>website</h1>
                <div className="gs_build_bottom">
                    <div className="gs_build_bottom_box">
                        <svg role="presentation" viewBox=" 0 0 70 54">
                            <path d="M62.96 0H7C3.13 0 0 3.13 0 7v39.45c0 3.87 3.13 7 7 7h55.96c3.87 0 7-3.13 7-7V7c0-3.87-3.13-7-7-7zM31.07 5.83c1.61 0 2.92 1.31 2.92 2.92 0 1.61-1.31 2.92-2.92 2.92-1.61 0-2.92-1.31-2.92-2.92 0-1.61 1.31-2.92 2.92-2.92zm-10.66 0c1.61 0 2.92 1.31 2.92 2.92 0 1.61-1.31 2.92-2.92 2.92-1.61 0-2.92-1.31-2.92-2.92 0-1.61 1.31-2.92 2.92-2.92zm-10.66 0c1.61 0 2.92 1.31 2.92 2.92 0 1.61-1.31 2.92-2.92 2.92-1.61 0-2.92-1.31-2.92-2.92 0-1.61 1.31-2.92 2.92-2.92zm53.38 37.89c0 1.6-1.3 2.9-2.9 2.9H9.74c-1.6 0-2.9-1.3-2.9-2.9V16.59h56.28v27.13h.01z"
                                fill="#2D55FF" fillRule="non-zero"
                            ></path>
                        </svg>
                        <h2>Claim yoir website</h2>
                        <p>Claiming your site ensures that your brand</p>
                        <p>name appears on every Pin that people create</p>
                        <p>from your site</p>
                    </div>
                    <div className="gs_build_bottom_box">
                        <svg role="presentation" viewBox=" 0 0 70 54">
                            <g fill="#2D55FF" fill-rule="evenodd">
                                <rect fill="rgb(45, 85, 255)" width="36" height="48" rx="5"></rect>
                                <path d="M52 28h20a8 8 0 018 8v12H44V36a8 8 0 018-8zM52 20h20a8 8 0 008-8V0H44v12a8 8 0 008 8z"></path>
                            </g>
                        </svg>
                        <h2>Add pinterest widgets</h2>
                        <p>The follow widget helps your site visitors to</p>
                        <p>follow you on Pinterest – without ever leaving</p>
                        <p>your site. We also offer widgets that let people</p>
                        <p>save Pins or boards directly from your site.</p>
                    </div>
                    <div className="gs_build_bottom_box">
                        <svg role="presentation" viewBox=" 0 0 70 54">
                            <g transform="translate(2 2)" stroke="#EDECB9" stroke-width="3" fill="none" fill-rule="evenodd">
                                <rect fill="rgb(45, 85, 255)" width="30.931" height="46.232" rx="5"></rect>
                                <rect fill="rgb(45, 85, 255)" width="30.931" height="46.232" rx="5" x="15.069" y="8.768"></rect>
                            </g>
                        </svg>
                        <h2>Enable rich pins</h2>
                        <p>Rich Pins automatically sync information from</p>
                        <p>your site to your Pins. They help you to add</p>
                        <p>more info directly to the Pin so that people</p>
                        <p>learn more about your products or ideas.</p>
                    </div>
                </div>

            </div>
            <div className="gs_insights">
                <span>Analytics and measurement</span>
                <h1>Put our insights to work</h1>
                <div className="gs_insights_bottom">
                    <div className="gs_insights_bottom_box">
                        <svg role="presentation" viewBox=" 0 0 160 74">
                            <path d="M33.17 42.842c3.708 0 7.22.584 10.537 1.753-6.513 7.839-10.393 17.93-10.532 28.8L33.17 74H0c.976-17.332 15.61-31.158 33.17-31.158zm93.66 0c17.385 0 31.901 13.551 33.137 30.64L160 74h-33.17c0-11.1-3.903-21.421-10.537-29.405 3.317-1.169 6.829-1.753 10.536-1.753zM80 35.052c21.249 0 38.673 17.178 39.02 38.307l.004.641H40.976c0-21.421 17.56-38.947 39.024-38.947zM33.17 15.58c5.464 0 9.757 4.284 9.757 9.737s-4.293 9.737-9.756 9.737-9.756-4.285-9.756-9.737 4.292-9.737 9.756-9.737zm93.66 0c5.463 0 9.755 4.284 9.755 9.737s-4.292 9.737-9.756 9.737c-5.463 0-9.756-4.285-9.756-9.737s4.293-9.737 9.756-9.737zM80 0c7.61 0 13.659 6.037 13.659 13.632 0 7.594-6.05 13.631-13.659 13.631s-13.659-6.037-13.659-13.631C66.341 6.037 72.391 0 80 0z"
                                fill="#0C586B" fillRule="evenodd"
                            ></path>
                        </svg>
                        <h2>Understand your audience</h2>
                        <p>Audience Insights show who you’re reaching</p>
                        <p>and what they care about.</p>
                    </div>
                    <div className="gs_insights_bottom_box">
                        <svg role="presentation" viewBox=" 0 0 70 54">
                            <path d="M89.87 5.346A3 3 0 0086.13.654L53.004 27.065l-26.526-8.769-14.1 17.08-9.922 1.832a3 3 0 001.09 5.9l2.89-.533-5.38 6.515a3 3 0 004.628 3.82l9.93-12.03 17.839-3.293 35.002 10.596 20.77-11.458a3 3 0 10-2.898-5.254L67.772 41.708 33.796 31.422l-12.238 2.26 6.934-8.4 25.713 8.5L89.87 5.346z"
                                fill="#0C586B" fillRule="evenodd" clipRule="evenodd"
                            ></path>
                        </svg>
                        <h2>Get the metrics that matter</h2>
                        <p>Get an instant read on individual Pin</p>
                        <p>performance, or deep dive into rich analytics</p>
                        <p>that show your engagement metrics.e</p>
                    </div>
                </div>

            </div>
            <div className="gs_support">
                <h1>Support to help you to study up</h1>
                <div className="gs_support_content">
                    <div className="gs_support_content_box">
                        <img src={gs_support_image1} width="464px" height="351px" style={{ objectFit: "cover" }} data-aos="fade-up" />
                        <h2>Help Centre</h2>
                        <p>See step-by-step instructions and tactical guides.</p>
                        <div className="gs_support_content_box_button">
                            Visit the Help Centre
                        </div>
                    </div>
                    <div className="gs_support_content_box">
                        <img src={gs_support_image2} width="464px" height="351px" style={{ objectFit: "cover" }} data-aos="fade-up" />
                        <h2>Pinterest Business community</h2>
                        <p>Join a growing community of businesses and Creators.</p>
                        <p>Look for ideas, swap best practices and ask for advice.</p>
                        <div className="gs_support_content_box_button">
                            Join the community
                        </div>
                    </div>
                </div>
            </div>
            <div className="gs_inspiration">
                <h1>Inspiration for your next Pin</h1>
                <div className="gs_inspiration_images" data-aos="fade-up">
                    <div className="gs_inspiration_images_col">
                        <img src={gs_inspiration_image1} width="280px" height="280px" style={{ objectFit: "cover", borderRadius: "1.5rem" }} />
                        <img src={gs_inspiration_image2} width="280px" height="497px" style={{ objectFit: "cover", borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem" }} />
                    </div>
                    <div className="gs_inspiration_images_col">
                        <img src={gs_inspiration_image3} width="280px" height="497px" style={{ objectFit: "cover", borderRadius: "1.5rem" }} />
                        <img src={gs_inspiration_image4} width="280px" height="280px" style={{ objectFit: "cover", borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem" }} />
                    </div>
                    <div className="gs_inspiration_images_col">
                        <img src={gs_inspiration_image5} width="280px" height="373px" style={{ objectFit: "cover", borderRadius: "1.5rem" }} />
                        <img src={gs_inspiration_image6} width="280px" height="404px" style={{ objectFit: "cover", borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem" }} />
                    </div>
                    <div className="gs_inspiration_images_col">
                        <img src={gs_inspiration_image7} width="280px" height="336px" style={{ objectFit: "cover", borderRadius: "1.5rem" }} />
                        <img src={gs_inspiration_image8} width="280px" height="441px" style={{ objectFit: "cover", borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem" }} />
                    </div>
                </div>
            </div>
            <div className="gs_getstarted">
                <h1>Get started</h1>
                <div className="gs_getstarted_buttons">
                    <div className="gs_getstarted_button">
                        Create account
                    </div>
                    <div className="gs_getstarted_button">
                        Learn about Pins
                    </div>
                </div>
            </div>
            <div className="gs_footer">
                <div className="gs_footer_collapse">
                    <Collapse.Group style={{ color: "rgb(225, 246, 215)" }}>
                        <Collapse title="Footnotes" arrowIcon={<BiPlus />}>
                            <div className="gs_footer_collapse_contentcontainer">
                                <div className="gs_footer_collapse_content">
                                    <span>1</span>
                                    <p>Nielsen Path to Purchase Research 2019/2020, UK;</p>
                                    <p>GlobalWebIndex 2019 Q1-Q4, UK</p>
                                </div>
                            </div>
                        </Collapse>
                    </Collapse.Group>
                </div>
                <div className="gs_footer_bottom">
                    <div className="gs_footer_bottom_left">
                        <h1>Pinterest</h1>
                        <select name="language" id="language">

                            <option value="English(India)">English(India)</option>
                            <option value="English(US)">English(US)</option>
                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                            <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                        </select>
                        <span>©️ 2022 Pinterest</span>
                    </div>
                    <div className="gs_footer_bottom_right">
                        <div className="gs_footer_bottom_right_column">
                            <h4>About</h4>
                            <ul>
                                <li>Our Pinterest Profile</li>
                                <li>Newsroom</li>
                                <li>Career</li>
                                <li>Brand guidelines</li>
                            </ul>
                        </div>
                        <div className="gs_footer_bottom_right_column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Business Community</li>
                                <li>For developers</li>
                                <li>For investors</li>
                            </ul>
                        </div>
                        <div className="gs_footer_bottom_right_column">
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

export default GettingStarted;