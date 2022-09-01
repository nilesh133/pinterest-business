import { useEffect } from "react";
import { useState } from "react";
import "./pinterestaudience.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images Import
import hero_image from "../../images/pinterest-audience/hero-image.png";
import open_minded_image from "../../images/pinterest-audience/open-minded-image.png"
import early_insights_left_image from "../../images/pinterest-audience/early-insights/early-insights-left-image.png"
import early_insights_right_image from "../../images/pinterest-audience/early-insights/early-insights-right-image.png"
import ready_to_buy_image1 from "../../images/pinterest-audience/ready-to-buy/ready-to-buy-image1.png"
import ready_to_buy_image2 from "../../images/pinterest-audience/ready-to-buy/ready-to-buy-image2.png"
import ready_to_buy_image3 from "../../images/pinterest-audience/ready-to-buy/ready-to-buy-image3.png"
import reach_the_people_image1 from "../../images/pinterest-audience/reach-the-people/reach-the-people-image1.png"
import reach_the_people_image2 from "../../images/pinterest-audience/reach-the-people/reach-the-people-image2.png"

// Next UI Imports
import { Collapse, Text } from "@nextui-org/react";
import {BiPlus} from "react-icons/bi";

const PinterestAudience = () => {
    AOS.init({
        duration: 400,
        easing: 'ease',
    });
    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");

    const changeCombination = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 0 && window.scrollY <= 1545) {
            setCombinationNumber("combinationOne");
        }
        else if (window.scrollY >= 1545 && window.scrollY <= 2760) {
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

    return (
        <div className={`pa_${combinationNumber}`}>
            <div
                className={classNames(`pa_navbar_${combinationNumber}`, "pa_navbar")}
            >
                <div className="pa_navbar_logo">Business</div>
                <div className="pa_navbar_items">
                    <div class="pa_navbar_dropdown">
                        <p className={classNames("pa_navbar_dropbtn", `${path === "/pinterest-audience" ? "navbar_active" : ""}`)}>Why pinterest?</p>
                        <div
                            className={classNames(
                                `pa_navbar_dropdown_content_${combinationNumber}`,
                                "pa_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/how-pinterest-works")}>
                                How pinterest works
                            </p>
                            <p onClick={() => navigate("/getting-started")}>
                                Getting started
                            </p>
                            <p onClick={() => navigate("/pinterest-audience")} className = {path === "/pinterest-audience" ? "navbar_active" : ""}>
                                The Pinterest audience
                            </p>
                            <p onClick={() => navigate("/success-stories")}>Success story</p>
                        </div>
                    </div>
                    <div class="pa_navbar_dropdown">
                        <p className="pa_navbar_dropbtn">Create content</p>
                        <div
                            className={classNames(
                                `pa_navbar_dropdown_content_${combinationNumber}`,
                                "pa_navbar_dropdown_content"
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
                    <div class="pa_navbar_dropdown">
                        <p className="pa_navbar_dropbtn">Insights</p>
                        <div
                            className={classNames(
                                `pa_navbar_dropdown_content_${combinationNumber}`,
                                "pa_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-predicts")}>
                                Pinterest predicts
                            </p>
                        </div>
                    </div>
                    <div class="pa_navbar_dropdown">
                        <p className="pa_navbar_dropbtn">Resources</p>
                        <div
                            className={classNames(
                                `pa_navbar_dropdown_content_${combinationNumber}`,
                                "pa_navbar_dropdown_content"
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
                            `pa_navbar_login_${combinationNumber}`,
                            "pa_navbar_login"
                        )}
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </div>
                    <div
                        className={classNames(
                            `pa_navbar_signup_${combinationNumber}`,
                            "pa_navbar_signup"
                        )}
                        onClick={() => navigate("/create")}
                    >
                        Sign up
                    </div>
                </div>
            </div>
            <div className="pa_hero">
                <h1>Your audience is here</h1>
                <p>
                    433 million people use Pinterest every month to find ideas and inspire
                    their next purchase.<sup>1</sup>If
                </p>
                <p>
                    Pinterest was a country, it would surpass the United States as the
                    third largest in the world.
                </p>
                <div className="pa_hero_image">
                    <img
                        src={hero_image}
                        width="1496px"
                        height="806px"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="pa_hero_percentage">
                    <div className="pa_hero_percentage_box">
                        <h1>60%</h1>
                        <p>Women make up more than 60% of</p>
                        <p>
                            our global audience<sup>2</sup>
                        </p>
                    </div>
                    <div className="pa_hero_percentage_box">
                        <h1>40%</h1>
                        <p>Male Pinners are up 40% year on year</p>
                    </div>
                    <div className="pa_hero_percentage_box">
                        <h1>30%</h1>
                        <p>Indian Pinners age 25-34 have</p>
                        <p>
                            increased 30% year over year<sup>7</sup>
                        </p>
                    </div>
                    <div className="pa_hero_percentage_box">
                        <h1>31%</h1>
                        <p>of millennials in the UK with a</p>
                        <p>household income of over £100K are</p>
                        <p>
                            on Pinterest<sup>4</sup>
                        </p>
                    </div>
                </div>
            </div>
            <div className="pa_find">
                <h1>Be their next great find</h1>
                <p>
                    People aren’t here to fend off FOMO or doomscroll. They’re here to
                </p>
                <p>
                    try new things, save new ideas and often, make their next purchase.
                </p>
                <div className="pa_find_video">
                    <iframe src="https://www.youtube.com/embed/PnLXTTZ-0Oc?controls=1&modestbranding=1&mute=1&playsinline=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fbusiness.pinterest.com&widgetid=4"></iframe>
                </div>
            </div>
            <div className="pa_openminded">
                <h1>Open minded and</h1>
                <h1>undecided</h1>
                <div className="pa_openminded_content">
                    <div className="pa_openminded_content_top">
                        <div className="pa_openminded_content_top_para">
                            <p>People on Pinterest are eager for new ideas,</p>
                            <p>which means that they want to hear from</p>
                            <p>you. Content from brands doesn’t interrupt</p>
                            <p>on Pinterest – it inspires.</p>
                        </div>
                    </div>
                    <div className="pa_openminded_content_bottom">
                        <div className="pa_openminded_content_bottom_left">
                            <h1>97%</h1>
                            <p>of top Pinterest searches are </p>
                            <p>unbranded<sup>5</sup></p>
                        </div>
                        <div className="pa_openminded_content_bottom_right">
                            <img src={open_minded_image} width="620px" height="334px" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pa_earlyinsights">
                <h1>Early insights, early advantage</h1>
                <p>People use Pinterest to plan for the future. Reach them here, and you’ll reach them before your</p>
                <p>competitors do.</p>
                <div className="pa_earlyinsights_images">
                    <img src={early_insights_left_image} width="613px" height="598px" style={{ objectFit: "cover" }} />
                    <div className="pa_earlyinsights_second_image">
                        <img src={early_insights_right_image} width="613px" height="598px" style={{ objectFit: "cover" }} />
                        <div className="pa_earlyinsights_second_image_percentage">
                            <h1>85%</h1>
                            <p>of Pinners say Pinterest is where they</p>
                            <p>
                                go to start a new project<sup>6</sup>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pa_buy">
                <h1>
                    Ready to buy
                </h1>
                <p>Pinterest is where people browse, discover and buy. Show up at the moment of inspiration, and</p>
                <p>take your audience from idea to 'I did'.</p>
                <div className="pa_buy_images">
                    <img src={ready_to_buy_image1} width="613px" height="652px" />
                    <div className="pa_buy_right_images">
                        <div className="pa_buy_right_images_container">
                            <img src={ready_to_buy_image2} width="284px" height="302px" />
                            <img src={ready_to_buy_image3} width="284px" height="302px" />
                        </div>
                        <div className="pa_buy_right_images_percentage">
                            <h1>46%</h1>
                            <p>of weekly Pinners have discovered a</p>
                            <p>
                                new brand or product on Pinterest<sup>6</sup>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pa_reach">
                <h1>Reach the right people at the right time</h1>
                <div className="pa_reach_content">
                    <div className="pa_reach_content_box">
                        <img src={reach_the_people_image1} width="464px" height="258px" style={{ objectFit: "cover" }} data-aos="fade-up"/>
                        <h2>Reach your target audience</h2>
                        <p>Our targeting tools give you the flexibility to reach people</p>
                        <p>by demographics, interests, keywords and more. Or, use</p>
                        <p>auto-targeting and we’ll show your ads to the people that</p>
                        <p>we think will like them most.</p>
                        <div className="pa_reach_content_box_button">
                            Learn more
                        </div>
                    </div>
                    <div className="pa_reach_content_box">
                        <img src={reach_the_people_image2} width="464px" height="258px" style={{ objectFit: "cover" }} data-aos="fade-up"/>
                        <h2>Explore interactive insights</h2>
                        <p>Our insights tools go deep on Pinner demographics,</p>
                        <p>interests and behaviours. You can use these insights to</p>
                        <p>tailor your targeting or make more effective Pins.</p>
                        <div className="pa_reach_content_box_button">
                            View Audience Insights
                        </div>
                    </div>
                </div>
            </div>
            <div className="pa_getstarted">
                <h1>Get started</h1>
                <div className="pa_getstarted_buttons">
                    <div className="pa_getstarted_button">
                        Create ad
                    </div>
                    <div className="pa_getstarted_button" onClick={() => navigate("/create")}>
                        Create account
                    </div>
                </div>
            </div>
            <div className="pa_footer">
                <div className="pa_footer_collapse">
                    <Collapse.Group>
                        <Collapse title="Footnotes" style={{ color: "rgb(250, 237, 162)" }} arrowIcon={<BiPlus />}>
                            <div className="pa_footer_collapse_contentcontainer">
                                <div className="pa_footer_collapse_content">
                                    <span>1</span>
                                    <p>Pinterest, global analysis, Q1 2022</p>
                                </div>
                                <div className="pa_footer_collapse_content">
                                    <span>2</span>
                                    <p> Pinterest global internal data, Jun 2020</p>
                                </div>
                                <div className="pa_footer_collapse_content">
                                    <span>3</span>
                                    <p>Pinterest, global data comparing adult sign-ups</p>
                                    <p>from 2019 to 2020</p>
                                </div>
                                <div className="pa_footer_collapse_content">
                                    <span>4</span>
                                    <p>GlobalWebIndex 2019 Q1-Q4, UK</p>
                                </div>
                                <div className="pa_footer_collapse_content">
                                    <span>5</span>
                                    <p>Pinterest analysis, English searches, Apr 2020</p>
                                </div>
                                <div className="pa_footer_collapse_content">
                                    <span>6</span>
                                    <p>Nielsen Path to Purchase Research 2019/2020, UK</p>
                                </div>
                            </div>
                        </Collapse>
                    </Collapse.Group>
                </div>
                <div className="pa_footer_bottom">
                    <div className="pa_footer_bottom_left">
                        <h1>Pinterest</h1>
                        <select name="language" id="language">

                            <option value="English(India)">English(India)</option>
                            <option value="English(US)">English(US)</option>
                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                            <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                        </select>
                        <span>©️ 2022 Pinterest</span>
                    </div>
                    <div className="pa_footer_bottom_right">
                        <div className="pa_footer_bottom_right_column">
                            <h4>About</h4>
                            <ul>
                                <li>Our Pinterest Profile</li>
                                <li>Newsroom</li>
                                <li>Career</li>
                                <li>Brand guidelines</li>
                            </ul>
                        </div>
                        <div className="pa_footer_bottom_right_column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Business Community</li>
                                <li>For developers</li>
                                <li>For investors</li>
                            </ul>
                        </div>
                        <div className="pa_footer_bottom_right_column">
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
    );
};

export default PinterestAudience;
