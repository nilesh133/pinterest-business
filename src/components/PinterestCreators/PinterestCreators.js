import { useEffect } from "react";
import { useState } from "react";
import "./pinterestcreators.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images Imports
import pc_hero_image from "../../images/pinterest-creators/pc-hero-image.png"
import pc_simpletools_image from "../../images/pinterest-creators/pc-simpletools-image.png"
import pc_creatorsresources_image1 from "../../images/pinterest-creators/pc-creatorsresources/pc-creatorsresources-image1.png"
import pc_creatorsresources_image2 from "../../images/pinterest-creators/pc-creatorsresources/pc-creatorsresources-image2.png"
import pc_creatorsresources_image3 from "../../images/pinterest-creators/pc-creatorsresources/pc-creatorsresources-image3.png"
import pc_creatorsresources_image4 from "../../images/pinterest-creators/pc-creatorsresources/pc-creatorsresources-image4.png"
import pc_spotlight_image1 from "../../images/pinterest-creators/pc-spotlight/pc-spotlight-image1.png"
import pc_spotlight_image2 from "../../images/pinterest-creators/pc-spotlight/pc-spotlight-image2.png"
import pc_spotlight_image3 from "../../images/pinterest-creators/pc-spotlight/pc-spotlight-image3.png"
import pc_spotlight_image4 from "../../images/pinterest-creators/pc-spotlight/pc-spotlight-image4.png"

// Next UI Imports
import { Collapse, Text } from "@nextui-org/react";

import { BsPlusLg } from "react-icons/bs"
import { BiPlus } from "react-icons/bi"
import { FiArrowRight } from "react-icons/fi"

const PinterestCreators = () => {
    AOS.init({
        duration: 400,
        easing: 'ease',
    });

    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");


    const changeCombination = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 0 && window.scrollY <= 908) {
            setCombinationNumber("combinationOne");
        }
        else if (window.scrollY >= 908 && window.scrollY <= 1745) {
            setCombinationNumber("combinationTwo");
        }
        else if (window.scrollY >= 1745 && window.scrollY <= 2389) {
            setCombinationNumber("combinationThree");
        }
        else if (window.scrollY >= 2389 && window.scrollY <= 3500) {
            setCombinationNumber(`combination${num}`);
        }
        else if (window.scrollY >= 3500 && window.scrollY <= 5700) {
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

    const [inspirationData, setInspirationData] = useState({
        src: "https://images.ctfassets.net/h67z7i6sbjau/1X4d91Zjp8a4uYHWfDrEMh/a0389e4b008669504a1b90a51bc2d006/biz-site-creatorsLP-accordion1-392x540_2x.png?fm=webp&q=85",
        width: "392px",
        height: "540px"
    })

    const inspirationCollapseImages = [
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/1X4d91Zjp8a4uYHWfDrEMh/a0389e4b008669504a1b90a51bc2d006/biz-site-creatorsLP-accordion1-392x540_2x.png?fm=webp&q=85",
            width: "392px",
            height: "540px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/wM0bhP3PQ9uL7Jg2E8pol/8f4560d6b1532f101554ea83de55032d/biz-site-creatorsLP-accordion3-392x540_2x.png?fm=webp&q=85",
            width: "392px",
            height: "595px"
        },
    ]

    const changeInspirationCollapseImages = (index) => {
        console.log(inspirationCollapseImages[index].src);
        setInspirationData({
            src: inspirationCollapseImages[index].src,
            width: inspirationCollapseImages[index].width,
            height: inspirationCollapseImages[index].height,
        })
    }

    const [spotlightOption, setSpotlightOption] = useState("thatcrazydoodler");

    const spotlightRightHandler = (optionName) => {
        switch (optionName) {
            case "thatcrazydoodler":
                return <ThatCrazyDoodler />;
            case "giakashyap":
                return <GiaKashyap />;
            case "dassanavegrecipes":
                return <DassanaVegRecipes />;
            case "preethiprabhu":
                return <PreethiPrabhu />
            default:
        }
        console.log(spotlightOption)
    }

    const [num, setNum] = useState("Four")

    const changeOptionAndCombination = (option, combination) => {
        setNum(combination)
        setSpotlightOption(option)
    }

    // useEffect(() => {
    //     console.log(flag)
    // }, [flag])

    return (
        <div className={`pc_${combinationNumber}`}>
            <div
                className={classNames(`pc_navbar_${combinationNumber}`, "pc_navbar")}
            >
                <div className="pc_navbar_logo">Business</div>
                <div className="pc_navbar_items">
                    <div class="pc_navbar_dropdown">
                        <p class="pc_navbar_dropbtn">Why pinterest?</p>
                        <div
                            className={classNames(
                                `pc_navbar_dropdown_content_${combinationNumber}`,
                                "pc_navbar_dropdown_content"
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
                    <div class="pc_navbar_dropdown">
                        <p className={classNames("pc_navbar_dropbtn", `${path === "/creators" ? "navbar_active" : ""}`)}>Create content</p>
                        <div
                            className={classNames(
                                `pc_navbar_dropdown_content_${combinationNumber}`,
                                "pc_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/creators")} className={path === "/creators" ? "navbar_active" : ""}>
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
                    <div className="pc_navbar_dropdown">
                        <p className="pc_navbar_dropbtn">Insights</p>
                        <div
                            className={classNames(
                                `pc_navbar_dropdown_content_${combinationNumber}`,
                                "pc_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-predicts")}>
                                Pinterest predicts
                            </p>
                        </div>
                    </div>
                    <div class="pc_navbar_dropdown">
                        <p className="pc_navbar_dropbtn">Resources</p>
                        <div
                            className={classNames(
                                `pc_navbar_dropdown_content_${combinationNumber}`,
                                "pc_navbar_dropdown_content"
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
                            `pc_navbar_login_${combinationNumber}`,
                            "pc_navbar_login"
                        )}
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </div>
                    <div
                        className={classNames(
                            `pc_navbar_signup_${combinationNumber}`,
                            "pc_navbar_signup"
                        )}
                        onClick={() => navigate("/create")}
                    >
                        Sign up
                    </div>
                </div>
            </div>
            <div className="pc_hero">
                <div className="pc_hero_left">
                    <h1>It’s different here</h1>
                    <div className="pc_hero_left_para">
                        <p>Create in a space that's made for you and your</p>
                        <p>authentic ideas—without the pressure to be perfect.</p>

                    </div>
                    <div className="pc_hero_left_button" onClick={() => navigate("/create")}>
                        Create account
                    </div>
                </div>
                <div className="pc_hero_right">
                    <img src={pc_hero_image} width="625px" height="576px" style={{ objectFit: "cover" }} />
                </div>
            </div>
            <div className="pc_inspiration">
                <div className="pc_inspiration_accordion" data-aos="fade-up">
                    <div className="pc_inspiration_accordion_content">
                        <h1>Inspiration is the</h1>
                        <h1>new influence</h1>
                        <Collapse.Group style={{ marginTop: "2rem" }}>
                            <Collapse title="Grow an inspired audience" expanded arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(73, 0, 167)", padding: "1rem 0" }} onClick={() => changeInspirationCollapseImages("0")}>
                                <Text style={{ color: "rgb(73, 0, 167)", fontSize: "18px", lineHeight: "24px" }}>
                                    People engage more meaningfully on Pinterest. You inspire them to try new things, shop and create their own take on your ideas. The more people engage with or share your content, the more your ideas show up across Pinterest for millions of others to discover.
                                </Text>
                            </Collapse>
                            <Collapse title="Make your ideas last forever" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(73, 0, 167)", padding: "1rem 0" }} onClick={() => changeInspirationCollapseImages("1")}>
                                <Text style={{ color: "rgb(73, 0, 167)", fontSize: "18px", lineHeight: "24px" }}>
                                    Content doesn’t disappear on Pinterest, so your hard work has a longer payoff. People can find your ideas the moment you post them or well beyond that.
                                </Text>
                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>
                <div className="pc_inspiration_image" data-aos="fade-up">
                    <img src={inspirationData.src} width={inspirationData.width} height={inspirationData.height} style={{ objectFit: "contain", marginLeft: "5rem" }} />
                </div>

            </div>
            <div className="pc_simpletools">
                <div className="pc_simpletools_left" data-aos="fade-up">
                    <img src={pc_simpletools_image} width="410px" height="495px" style={{ objectFit: "cover" }} />
                </div>
                <div className="pc_simpletools_right">
                    <h2>Simple tools for</h2>
                    <h2>creating</h2>
                    <div className="pc_simpletools_right_list">
                        <ul>
                            <li>Create and edit your content right in the app</li>
                            <li>Customise Idea Pins with video, music controls and interactive stickers</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pc_creatorsfirst">
                <h1>On Pinterest, we put your well-being as a Creator first. The</h1>
                <h1><span>Creator Code</span> is our commitment to inclusive and inspiring</h1>
                <h1>content. We’re also introducing comment moderation</h1>
                <h1>tools that help to keep Pinterest a safer, more positive</h1>
                <h1>place to create.</h1>
            </div>
            <div className="pc_spotlight" style={{ width: "1496px", height: "796px" }}>
                <div className="pc_spotlight_left">
                    <p>Creator Spotlight</p>
                    <div className="pc_spotlight_left_option" onClick={() => changeOptionAndCombination("thatcrazydoodler", "Seven")}>
                        <div className={classNames(`pc_spotlight_left_optionunderline_${combinationNumber}`, "pc_spotlight_left_optionunderline")} style={{ width: `${spotlightOption === "thatcrazydoodler" ? "60%" : "0"}` }}></div>
                        <h1>ThatCrazyDoodler<span className={classNames(`pc_spotlight_optionunderline_${combinationNumber}`, "pc_spotlight_optionunderline")}></span></h1>
                        <span style={{ display: `${spotlightOption === "thatcrazydoodler" ? "block" : "none"}` }}><FiArrowRight /></span>
                    </div>
                    <div className="pc_spotlight_left_option" onClick={() => changeOptionAndCombination("giakashyap", "Eight")}>
                        <div className={classNames(`pc_spotlight_left_optionunderline_${combinationNumber}`, "pc_spotlight_left_optionunderline")} style={{ width: `${spotlightOption === "giakashyap" ? "43%" : "0"}` }}></div>
                        <h1>Gia Kashyap<span className={classNames(`pc_spotlight_optionunderline_${combinationNumber}`, "pc_spotlight_optionunderline")}></span></h1>
                        <span style={{ display: `${spotlightOption === "giakashyap" ? "block" : "none"}` }}><FiArrowRight /></span>
                    </div>
                    <div className="pc_spotlight_left_option" onClick={() => changeOptionAndCombination("dassanavegrecipes", "Nine")}>
                        <div className={classNames(`pc_spotlight_left_optionunderline_${combinationNumber}`, "pc_spotlight_left_optionunderline")} style={{ width: `${spotlightOption === "dassanavegrecipes" ? "70%" : "0"}` }}></div>
                        <h1>Dassana Veg Recipes<span className={classNames(`pc_spotlight_optionunderline_${combinationNumber}`, "pc_spotlight_optionunderline")}></span></h1>
                        <span style={{ display: `${spotlightOption === "dassanavegrecipes" ? "block" : "none"}` }}><FiArrowRight /></span>
                    </div>
                    <div className="pc_spotlight_left_option" onClick={() => changeOptionAndCombination("preethiprabhu", "Ten")}>
                        <div className={classNames(`pc_spotlight_left_optionunderline_${combinationNumber}`, "pc_spotlight_left_optionunderline")} style={{ width: `${spotlightOption === "preethiprabhu" ? "47%" : "0"}` }}></div>
                        <h1>Preeti Prabhu<span className={classNames(`pc_spotlight_optionunderline_${combinationNumber}`, "pc_spotlight_optionunderline")}></span></h1>
                        <span style={{ display: `${spotlightOption === "preethiprabhu" ? "block" : "none"}` }}><FiArrowRight /></span>
                    </div>
                </div>

                <div className="pc_spotlight_rightmain">
                    {spotlightRightHandler(spotlightOption)}
                    <div className={classNames(`pc_spotlight_rightmain_button_${combinationNumber}`, "pc_spotlight_rightmain_button")}>
                        See their pins
                    </div>
                </div>

            </div>
            <div className="pc_tools">
                <h1>Tools to guide you</h1>
                <div className="pc_tools_content">
                    <div className="pc_tools_content_box">
                        <svg viewBox="0 0 91 54" style={{ width: "86px", height: "86px" }}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M89.87 5.346A3 3 0 0086.13.654L53.004 27.065l-26.526-8.769-14.1 17.08-9.922 1.832a3 3 0 001.09 5.9l2.89-.533-5.38 6.515a3 3 0 004.628 3.82l9.93-12.03 17.839-3.293 35.002 10.596 20.77-11.458a3 3 0 10-2.898-5.254L67.772 41.708 33.796 31.422l-12.238 2.26 6.934-8.4 25.713 8.5L89.87 5.346z" fill="#2C0066">
                            </path>
                        </svg>
                        <h2>Creator hub</h2>
                        <p>See the latest Creator news, your analytics,</p>
                        <p>monetisation opportunities and more. You’ll</p>
                        <p>find the Creator hub on your profile page in the</p>
                        <p>Pinterest app.</p>
                    </div>
                    <div className="pc_tools_content_box">
                        <svg viewBox="0 0 54 55" style={{ width: "65px", height: "65px" }}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 0c12.703 0 23 10.297 23 23a22.904 22.904 0 01-5.106 14.45c.033.029.065.059.096.09l12.02 12.02a3 3 0 11-4.242 4.243l-12.021-12.02a3.038 3.038 0 01-.186-.204A22.898 22.898 0 0123 46C10.297 46 0 35.703 0 23S10.297 0 23 0zm0 6C13.611 6 6 13.611 6 23s7.611 17 17 17 17-7.611 17-17S32.389 6 23 6zm4.5 7v3H25v14h2.5v3h-8v-3H22V16h-2.5v-3z" fill="#2C0066">
                            </path>
                        </svg>
                        <h2>Pinterest Trends</h2>
                        <p>Pinterest Trends shows what people are</p>
                        <p>searching for right now. Use these insights to</p>
                        <p>create timely and relevant content.</p>
                    </div>
                    <div className="pc_tools_content_box">
                        <svg viewBox="0 0 160 74" style={{ width: "95px", height: "95px", marginTop: "-2rem" }}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M33.17 42.842c3.708 0 7.22.584 10.537 1.753-6.513 7.839-10.393 17.93-10.532 28.8L33.17 74H0c.976-17.332 15.61-31.158 33.17-31.158zm93.66 0c17.385 0 31.901 13.551 33.137 30.64L160 74h-33.17c0-11.1-3.903-21.421-10.537-29.405 3.317-1.169 6.829-1.753 10.536-1.753zM80 35.052c21.249 0 38.673 17.178 39.02 38.307l.004.641H40.976c0-21.421 17.56-38.947 39.024-38.947zM33.17 15.58c5.464 0 9.757 4.284 9.757 9.737s-4.293 9.737-9.756 9.737-9.756-4.285-9.756-9.737 4.292-9.737 9.756-9.737zm93.66 0c5.463 0 9.755 4.284 9.755 9.737s-4.292 9.737-9.756 9.737c-5.463 0-9.756-4.285-9.756-9.737s4.293-9.737 9.756-9.737zM80 0c7.61 0 13.659 6.037 13.659 13.632 0 7.594-6.05 13.631-13.659 13.631s-13.659-6.037-13.659-13.631C66.341 6.037 72.391 0 80 0z" fill="#2C0066">
                            </path>
                        </svg>
                        <h2>Audience Insights</h2>
                        <p>Audience Insights show what your current and</p>
                        <p>potential followers are engaging with. This</p>
                        <p>helps you to plan your content.</p>
                    </div>
                </div>
            </div>
            <div className="pc_creatorsresources">
                <h1>Creator resources</h1>
                <div className="pc_creatorsresources_content">
                    <div className="pc_creatorsresources_content_box">
                        <img src={pc_creatorsresources_image1} width="464px" height="348px" style={{ objectFit: "cover" }} data-aos="fade-up" />
                        <p>Creator newsletter</p>
                    </div>
                    <div className="pc_creatorsresources_content_box">
                        <img src={pc_creatorsresources_image2} width="464px" height="348px" style={{ objectFit: "cover" }} data-aos="fade-up" />
                        <p>Pinterest blog</p>
                    </div>
                    <div className="pc_creatorsresources_content_box">
                        <img src={pc_creatorsresources_image3} width="464px" height="348px" style={{ objectFit: "cover" }} data-aos="fade-up" />
                        <p>Pinterest Business Community</p>
                    </div>
                    <div className="pc_creatorsresources_content_box">
                        <img src={pc_creatorsresources_image4} width="464px" height="348px" style={{ objectFit: "cover" }} data-aos="fade-up" />
                        <p>Follow us on Pinterest</p>
                    </div>
                </div>
            </div>
            <div className="pc_getstarted">
                <h1>Get started</h1>
                <div className="pc_getstarted_buttons">
                    <div className="pc_getstarted_button">
                        Create account
                    </div>
                    <div className="pc_getstarted_button" onClick={() => navigate("/create")}>
                        Create idea pin
                    </div>
                </div>
            </div>
            <div className="pc_footer">
                <div className="pc_footer_bottom">
                    <div className="pc_footer_bottom_left">
                        <h1>Pinterest</h1>
                        <select name="language" id="language">

                            <option value="English(India)">English(India)</option>
                            <option value="English(US)">English(US)</option>
                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                            <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                        </select>
                        <span>©️ 2022 Pinterest</span>
                    </div>
                    <div className="pc_footer_bottom_right">
                        <div className="pc_footer_bottom_right_column">
                            <h4>About</h4>
                            <ul>
                                <li>Our Pinterest Profile</li>
                                <li>Newsroom</li>
                                <li>Career</li>
                                <li>Brand guidelines</li>
                            </ul>
                        </div>
                        <div className="pc_footer_bottom_right_column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Business Community</li>
                                <li>For developers</li>
                                <li>For investors</li>
                            </ul>
                        </div>
                        <div className="pc_footer_bottom_right_column">
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

const ThatCrazyDoodler = () => {
    return (
        <div className = "pc_spotlight_rightinner" data-aos="fade-up">
            <img src={pc_spotlight_image1} width="648px" height="441px" style={{ objectFit: "cover" }} />
            <div className="pc_spotlight_rightinner_para">
                <p>"Pinterest is a powerhouse of inspiration for</p>
                <p>creators and I feel so happy to share a slice of</p>
                <p>my creativity with this beautiful community."</p>
            </div>
            <span>Vinita, That Crazy Doodler</span>
        </div>
    )
}

const GiaKashyap = () => {
    return (
        <div className="pc_spotlight_rightinner" data-aos="fade-up">
            <img src={pc_spotlight_image2} width="648px" height="441px" style={{ objectFit: "cover" }} />
            <div className="pc_spotlight_rightinner_para">
                <p>"Pinterest has been that one platform I have</p>
                <p>used ever since I began my blogging journey a</p>
                <p>decade ago. It’s creative, uplifting and</p>
                <p>undoubtedly inspiring."</p>
            </div>
            <span>Gia Kashyap , Owner of Gia Creative Studio</span>
        </div>
    )
}

const DassanaVegRecipes = () => {
    return (
        <div className="pc_spotlight_rightinner" data-aos="fade-up">
            <img src={pc_spotlight_image3} width="648px" height="441px" style={{ objectFit: "cover" }} />
            <div className="pc_spotlight_rightinner_para">
                <p>"I like to create content on Pinterest as it gives a</p>
                <p>very flexible visual platform for everyone to</p>
                <p>make their own collections of recipes. Like I get</p>
                <p>nspired from the beautiful videos and images, I</p>
                <p>am sure others are inspired with my vegetarian</p>
                <p>cooking."</p>
            </div>
            <span>Dassana Amit, Dassana’s Veg Recipes</span>
        </div>
    )
}

const PreethiPrabhu = () => {
    return (
        <div className="pc_spotlight_rightinner" data-aos="fade-up">
            <img src={pc_spotlight_image4} width="648px" height="441px" style={{ objectFit: "cover" }} />
            <div className="pc_spotlight_rightinner_para">
                <p>"Decorating and Styling is not a talent that you</p>
                <p>are born with. It’s a skill that anyone can learn</p>
                <p>and master with constant application and</p>
                <p>Pinterest is the best place to start."</p>
            </div>
            <span>Preethi Prabhu, Chief Minion, Transforminions Design Studio</span>
        </div>
    )
}

export default PinterestCreators;