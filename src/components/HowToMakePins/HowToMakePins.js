import { useEffect } from "react";
import { useState } from "react";
import "./howtomakepins.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

// Images Import
import htmp_hero_image from "../../images/how-to-make-pins/htmp-hero-image.png"
import htmp_publish_image from "../../images/how-to-make-pins/htmp-publish-image.png"
import htmp_work_image from "../../images/how-to-make-pins/htmp-work-image.png"

// Next UI Imports
import { Collapse, Text } from "@nextui-org/react";

import {BsPlusLg} from "react-icons/bs"
import {BiPlus} from "react-icons/bi"

const HowToMakePins = () => {
    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");

    const changeCombination = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 0 && window.scrollY <= 604) {
            setCombinationNumber("combinationOne");
        }
        else if (window.scrollY >= 604 && window.scrollY <= 1996) {
            setCombinationNumber("combinationTwo");
        }
        else if (window.scrollY >= 1996 && window.scrollY <= 4200) {
            setCombinationNumber("combinationThree");
        }
        else if (window.scrollY >= 4200 && window.scrollY <= 5216) {
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

    const [discoveredData, setDiscoveredData] = useState({
        src: "https://images.ctfassets.net/h67z7i6sbjau/2E2FAztytPJLBEQlN9tFng/c6bb1bcf96f141aeb21a7b5c30cedf1d/2x_enGB_home.png?fm=webp&q=85",
        width: "384px",
        height: "434px"
    })

    const discoveresCollapseImages = [
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/2E2FAztytPJLBEQlN9tFng/c6bb1bcf96f141aeb21a7b5c30cedf1d/2x_enGB_home.png?fm=webp&q=85",
            width: "375px",
            height: "812px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/7DNB4wTqDvxiVPMRLsgwll/3cab8fa194d24ae386cb34782b5203ea/2x_enGB_1.png?fm=webp&q=85",
            width: "375px",
            height: "812px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/3fBuEme9Tcrrgio7f4N8D7/b117c6c82aef7003c8639283fa959f7a/howcontentgetsdiscovered_relatedpins_2x.png?fm=webp&q=85",
            width: "392px",
            height: "540px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/60Lz5wLT0n84epblP1QVjc/1cfc641c20e48bfa6a6f6cc5e39f6811/howcontentgetsdiscovered_shopping_2x.png?fm=webp&q=85",
            width: "392px",
            height: "540px"
        },
    ]

    const changeDiscoveredCollapseImage = (index) => {
        setDiscoveredData({
            src: discoveresCollapseImages[index].src,
            width: discoveresCollapseImages[index].width,
            height: discoveresCollapseImages[index].height,
        })
    }


    return (
        <div className={`htmp_${combinationNumber}`}>
            <div
                className={classNames(`htmp_navbar_${combinationNumber}`, "htmp_navbar")}
            >
                <div className="htmp_navbar_logo">Business</div>
                <div className="htmp_navbar_items">
                    <div class="htmp_navbar_dropdown">
                        <p className={classNames("htmp_navbar_dropbtn", `${path === "/getting-started" ? "navbar_active" : ""}`)}>Why pinterest?</p>
                        <div
                            className={classNames(
                                `htmp_navbar_dropdown_content_${combinationNumber}`,
                                "htmp_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/how-pinterest-works")}>
                                How pinterest works
                            </p>
                            <p onClick={() => navigate("/getting-started")} className = {path === "/getting-started" ? "navbar_active" : ""}>
                                Getting started
                            </p>
                            <p onClick={() => navigate("/pinterest-audience")}>
                                The Pinterest audience
                            </p>
                            <p onClick={() => navigate("/success-stories")}>Success story</p>
                        </div>
                    </div>
                    <div class="htmp_navbar_dropdown">
                        <p className="htmp_navbar_dropbtn">Create content</p>
                        <div
                            className={classNames(
                                `htmp_navbar_dropdown_content_${combinationNumber}`,
                                "htmp_navbar_dropdown_content"
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
                    <div class="htmp_navbar_dropdown">
                        <p className="htmp_navbar_dropbtn">Insights</p>
                        <div
                            className={classNames(
                                `htmp_navbar_dropdown_content_${combinationNumber}`,
                                "htmp_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-predicts")}>
                                Pinterest predicts
                            </p>
                        </div>
                    </div>
                    <div class="htmp_navbar_dropdown">
                        <p className="htmp_navbar_dropbtn">Resources</p>
                        <div
                            className={classNames(
                                `htmp_navbar_dropdown_content_${combinationNumber}`,
                                "htmp_navbar_dropdown_content"
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
                            `htmp_navbar_login_${combinationNumber}`,
                            "htmp_navbar_login"
                        )}
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </div>
                    <div
                        className={classNames(
                            `htmp_navbar_signup_${combinationNumber}`,
                            "htmp_navbar_signup"
                        )}
                        onClick={() => navigate("/create")}
                    >
                        Sign up
                    </div>
                </div>
            </div>
            <div className="htmp_hero">
                <div className="htmp_hero_left">
                    <h1>Show the</h1>
                    <h1>possibilities</h1>
                    <div className="htmp_hero_left_para">
                    <p>Create Pins to share your ideas, give tutorials or sell</p>
                    <p>your products. Every Pin includes an image or video,</p>
                    <p>plus a link to your site or shop.</p>
                    </div>
                    <div className="htmp_hero_left_button">
                       Create pin
                    </div>
                </div>
                <div className="htmp_hero_right">
                    <img src={htmp_hero_image} width = "625px" height= "388px" style={{objectFit: "cover"}}/>
                </div>
            </div>
            <div className="htmp_perfect" style={{width: "1496px", height: "1260px"}}>

            </div>
            <div className="htmp_publish">
                <div className="htmp_publish_left">
                    <img src={htmp_publish_image} width="317px" height="640px" style={{ objectFit: "contain", marginLeft: "5rem" }} />
                </div>
                <div className="htmp_publish_right">
                    <h1>Easy ways to</h1>
                    <h1>publish content</h1>
                    <h2>Upload images or videos</h2>
                    <p>Create and edit Pins right from our app or desktop site. You can</p>
                    <p>make one Pin at a time, or upload assets in bulk.</p>
                </div>

            </div>
            <div className="htmp_discovered">
                <div className="htmp_discovered_accordion">
                    <div className="htmp_discovered_accordion_content">
                        <h1>How content gets</h1>
                        <h1>discovered</h1>
                        <Collapse.Group style={{ marginTop: "2rem" }}>
                            <Collapse title="Home feed" expanded arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(44, 0, 102)", padding: "1rem 0" }} onClick={() => changeDiscoveredCollapseImage("0")}>
                                <Text style={{ color: "rgb(44, 0, 102)", fontSize: "18px", lineHeight: "24px" }}>
                                People browse their feeds for new ideas.
                                </Text>
                            </Collapse>
                            <Collapse title="Search" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(44, 0, 102)", padding: "1rem 0" }} onClick={() => changeDiscoveredCollapseImage("1")}>
                                <Text style={{ color: "rgb(44, 0, 102)", fontSize: "18px", lineHeight: "24px" }}>
                                Keyword and visual searches bring people closer to decisions.
                                </Text>
                            </Collapse>
                            <Collapse title="Related pins" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(44, 0, 102)", padding: "1rem 0" }} onClick={() => changeDiscoveredCollapseImage("2")}>
                                <Text style={{ color: "rgb(44, 0, 102)", fontSize: "18px", lineHeight: "24px" }}>
                                When people take a closer look at Pins that they like, we display similar Pins nearby.
                                </Text>
                            </Collapse>
                            <Collapse title="Shopping" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(44, 0, 102)", padding: "1rem 0" }} onClick={() => changeDiscoveredCollapseImage("3")}>
                                <Text style={{ color: "rgb(44, 0, 102)", fontSize: "18px", lineHeight: "24px" }}>
                                Shopping features and product Pins help people to discover new products, and then easily check out.
                                </Text>
                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>
                <div className="htmp_discovered_image">
                    <img src={discoveredData.src} width={discoveredData.width} height={discoveredData.height} style={{ objectFit: "contain", marginLeft: "5rem" }} />
                </div>
            </div>
            <div className="htmp_work">
                <div className="htmp_work_left">
                    <h1>Work with</h1>
                    <h1>experts</h1>
                    <div className="htmp_work_left_para">
                    <p>Find a third-party partner to create Pins, manage your</p>
                    <p>content strategy or build a stronger presence on</p>
                    <p>Pinterest.</p>
                    </div>
                    <div className="htmp_work_left_button">
                       Find a partner
                    </div>
                </div>
                <div className="htmp_work_right">
                    <img src={htmp_work_image} width = "625px" height= "560px" style={{objectFit: "cover"}}/>
                </div>
            </div>
            <div className = "htmp_winning">
                <h1>A winning Pin strategy</h1>
                <div className="htmp_winning_content">
                    <div className="htmp_winning_content_box">
                        <svg>
                            <g transform="translate(2 2)" stroke="#FFE4C1" stroke-width="3" fill="none" fill-rule="evenodd">
                                <rect fill="#2C0066" width="30.931" height="46.232" rx="5"></rect>
                                <rect fill="#2C0066" x="15.069" y="8.768" width="30.931" height="46.232" rx="5"></rect>
                            </g>
                        </svg>
                        <h2>Create regularly</h2>
                        <p>Create new, original Pins at least once a week, for</p>
                        <p>a steady stream of content.</p>
                    </div>
                    <div className="htmp_winning_content_box">
                        <svg viewBox="0 0 55 55">
                            <g stroke="#2C0066" stroke-width="4" fill="none" fill-rule="evenodd">
                                <circle cx = "27.5" cy = "27.5" r = "25.5"></circle>
                               <path d="M26.5 16.59v11.82M41.77 35.833L27 30" stroke-linecap = "round"></path>
                            </g>
                        </svg>
                        <h2>Schedule your Pins</h2>
                        <p>Put your Pin uploads on autopilot using our</p>
                        <p>scheduling tool.</p>
                    </div>
                    <div className="htmp_winning_content_box">
                        <svg viewBox="0 0 70 54">
                            <path d = "M62.96 0H7C3.13 0 0 3.13 0 7v39.45c0 3.87 3.13 7 7 7h55.96c3.87 0 7-3.13 7-7V7c0-3.87-3.13-7-7-7zM31.07 5.83c1.61 0 2.92 1.31 2.92 2.92 0 1.61-1.31 2.92-2.92 2.92-1.61 0-2.92-1.31-2.92-2.92 0-1.61 1.31-2.92 2.92-2.92zm-10.66 0c1.61 0 2.92 1.31 2.92 2.92 0 1.61-1.31 2.92-2.92 2.92-1.61 0-2.92-1.31-2.92-2.92 0-1.61 1.31-2.92 2.92-2.92zm-10.66 0c1.61 0 2.92 1.31 2.92 2.92 0 1.61-1.31 2.92-2.92 2.92-1.61 0-2.92-1.31-2.92-2.92 0-1.61 1.31-2.92 2.92-2.92zm53.38 37.89c0 1.6-1.3 2.9-2.9 2.9H9.74c-1.6 0-2.9-1.3-2.9-2.9V16.59h56.28v27.13h.01z" fill="#2C0066" fill-rule="nonzero"></path>
                        </svg>
                        <h2>Add a URL</h2>
                        <p>Make every Pin actionable by adding a URL that</p>
                        <p>drives traffic back to your site.</p>
                    </div>
                    <div className="htmp_winning_content_box">
                        <svg viewBox="0 0 80 48">
                            <g fill="#2C0066" fill-rule="evenodd">
                                <rect fill="#2C0066" width="36" height="48" rx="8"></rect>
                                <path d= "M52 28h20a8 8 0 018 8v12H44V36a8 8 0 018-8zM52 20h20a8 8 0 008-8V0H44v12a8 8 0 008 8z"></path>
                            </g>
                        </svg>
                        <h2>Organise Pins into well-named boards</h2>
                        <p>Give boards clear and descriptive titles, such as</p>
                        <p>‘Easy no-bake dinners’ to help with search.</p>
                    </div>
                </div>
            </div>
            <div className="htmp_create">
                <h1>Create Pins that get noticed</h1>
                <div className="htmp_create_buttons">
                    <div className="htmp_create_button">
                        See best practices
                    </div>
                    <div className="htmp_create_button">
                        Create pin
                    </div>
                </div>
            </div>
            <div className="htmp_footer">
                <div className="htmp_footer_collapse">
                    <Collapse.Group style={{ color: "rgb(255, 228, 193)" }}>
                        <Collapse title="Footnotes" arrowIcon={<BiPlus />}>
                            <div className="htmp_footer_collapse_contentcontainer">
                                <div className="htmp_footer_collapse_content">
                                    <span>1</span>
                                    <p>Nielsen Path to Purchase Research 2019/2020, UK;</p>
                                    <p>GlobalWebIndex 2019 Q1-Q4, UK</p>
                                </div>
                                <div className="htmp_footer_collapse_content">
                                    <span>2</span>
                                    <p>*Pinterest Ads are available to business accounts in</p>
                                    <p>specific countries. Please refer to our Help Centre for</p>
                                    <p>more information.</p>
                                </div>
                            </div>
                        </Collapse>
                    </Collapse.Group>
                </div>
                <div className="htmp_footer_bottom">
                    <div className="htmp_footer_bottom_left">
                        <h1>Pinterest</h1>
                        <select name="language" id="language">

                            <option value="English(India)">English(India)</option>
                            <option value="English(US)">English(US)</option>
                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                            <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                        </select>
                        <span>©️ 2022 Pinterest</span>
                    </div>
                    <div className="htmp_footer_bottom_right">
                        <div className="htmp_footer_bottom_right_column">
                            <h4>About</h4>
                            <ul>
                                <li>Our Pinterest Profile</li>
                                <li>Newsroom</li>
                                <li>Career</li>
                                <li>Brand guidelines</li>
                            </ul>
                        </div>
                        <div className="htmp_footer_bottom_right_column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Business Community</li>
                                <li>For developers</li>
                                <li>For investors</li>
                            </ul>
                        </div>
                        <div className="htmp_footer_bottom_right_column">
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

export default HowToMakePins;