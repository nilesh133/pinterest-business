import { useEffect, useState } from "react"
import "./howpinterestworks.css"
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import hpw_image1 from "../../images/how-pinterest-works/how-pinterest-works-1.png"
import hpw_image2 from "../../images/how-pinterest-works/how-pinterest-works-2.png"
import hpw_image3 from "../../images/how-pinterest-works/how-pinterest-works-3.png"
import hpw_image4 from "../../images/how-pinterest-works/how-pinterest-works-4.png"
import right_audience from "../../images/right-audience.png"
import brand_and_creator_1 from "../../images/brands-and-creators/brand-and-creators-1.png"
import brand_and_creator_2 from "../../images/brands-and-creators/brand-and-creators-2.png"

// MUI Imports
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Next UI Imports
import { Collapse, Text } from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai"

const HowPinterestWorks = () => {
    const navigate = useNavigate();
    const [combinationNumber, setCombinationNumber] = useState("combinationOne")

    const changeCombination = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 884 && window.scrollY <= 2250) {
            setCombinationNumber("combinationTwo")
        }
        else if (window.scrollY >= 2250 && window.scrollY <= 3688) {
            setCombinationNumber("combinationThree")
        }
        else if (window.scrollY >= 3688 && window.scrollY <= 4660) {
            setCombinationNumber("combinationFour")
        }
        else if (window.scrollY >= 4660 && window.scrollY <= 6590) {
            setCombinationNumber("combinationTwo")
        }
        else if (window.scrollY >= 6590 && window.scrollY <= 7890) {
            setCombinationNumber("combinationThree")
        }
        else if (window.scrollY >= 7890) {
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
        <div className={`hpw_${combinationNumber}`}>
            <div className={classNames(`hpw_navbar_${combinationNumber}`, "hpw_navbar")}>
                <div className="hpw_navbar_logo">Business</div>
                <div className="hpw_navbar_items" >
                    <div class="hpw_navbar_dropdown">
                        <p className="hpw_navbar_dropbtn">Why pinterest?</p>
                        <div className={classNames(`hpw_navbar_dropdown_content_${combinationNumber}`, "hpw_navbar_dropdown_content")}>
                            <p onClick={() => navigate("/how-pinterest-works")}>How pinterest works</p>
                            <p onClick={() => navigate("/getting-started")}>Getting started</p>
                            <p onClick={() => navigate("/pinterest-audience")}>The Pinterest audience</p>
                            <p onClick={() => navigate("/success-story")}>Success story</p>
                        </div>
                    </div>
                    <div class="hpw_navbar_dropdown">
                        <p className="hpw_navbar_dropbtn">Create content</p>
                        <div className={classNames(`hpw_navbar_dropdown_content_${combinationNumber}`, "hpw_navbar_dropdown_content")}>
                            <p onClick={() => navigate("/creators")}>Pinterest for creators</p>
                            <p onClick={() => navigate("/how-to-make-pins")}>Making pins: Tips and Tricks</p>
                            <p onClick={() => navigate("/creative-best-practices")}>Best practices</p>

                        </div>
                    </div>
                    <div class="hpw_navbar_dropdown">
                        <p className="hpw_navbar_dropbtn">Insights</p>
                        <div className={classNames(`hpw_navbar_dropdown_content_${combinationNumber}`, "hpw_navbar_dropdown_content")}>
                            <p onClick={() => navigate("/pinterest-predicts")}>Pinterest predicts</p>
                        </div>
                    </div>
                    <div class="hpw_navbar_dropdown">
                        <p className="hpw_navbar_dropbtn">Resources</p>
                        <div className={classNames(`hpw_navbar_dropdown_content_${combinationNumber}`, "hpw_navbar_dropdown_content")}>
                            <p onClick={() => navigate("/pinterest-business-partners")}>Pinterest Business Partners</p>
                            <p onClick={() => navigate("/agency-resources")}>Agency Resources</p>
                            <p onClick={() => navigate("/guides-and-education")}>Guides and Education</p>
                        </div>
                    </div>
                    <div className={classNames(`hpw_navbar_login_${combinationNumber}`, "hpw_navbar_login")} onClick={() => navigate("/login")}>
                        Log in
                    </div>
                    <div className={classNames(`hpw_navbar_signup_${combinationNumber}`, "hpw_navbar_signup")} onClick={() => navigate("/create")}>
                        Sign up
                    </div>
                </div>
            </div>
            <div className="hpw_hero">
                <div className="hpw_hero_images">
                    <div className="hpw_hero_images_leftcol">
                        <img src={hpw_image1} width="289px" height="346px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                        <img src={hpw_image2} width="289px" height="346px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                    </div>
                    <div className="hpw_hero_images_rightcol">
                        <img src={hpw_image3} width="289px" height="346px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                        <img src={hpw_image4} width="289px" height="346px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                    </div>
                </div>
                <div className="hpw_hero_content">
                    <h1>Pinterest gives</h1>
                    <h1>people their next</h1>
                    <h1>great idea</h1>
                    <p>It’s a one-stop shop for inspiration, new products and new</p>
                    <p>possibilities.</p>
                    <div className="hpw_hero_button" onClick={() => navigate("/create")}>
                        Create account
                    </div>
                </div>
            </div>
            <div className="hpw_howitworks">
                <h1>How it works</h1>
                <div className="hpw_howitworks_para">
                    <p>Pinterest is the app for inspiration. It helps people to find useful, relevant ideas—and then bring</p>
                    <p>them to life.</p>
                </div>
                <div className="hpw_howitworks_para">
                    <p>People don’t always have the words to describe what they’re looking for. But, they’ll know it</p>
                    <p>when they see it. As they browse Pinterest content (called ‘Pins’), they fine-tune their tastes</p>
                    <p>and find the perfect idea.</p>
                </div>
            </div>
            <div className="hpw_firstvideo">
                <video controls autoPlay loop>
                    <source src="https://v.pinimg.com/videos/mc/720p/40/a8/74/40a8744d575bbf9cba8123ee1209c15d.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="hpw_pin">
                <h1>Every Pin is a possibility</h1>
                <p>People on Pinterest are looking to take action. They’re here to spice up their everyday lives</p>
                <p>(dinner recipes, homework tips), celebrate special moments (birthday parties, bucket-list trips)</p>
                <p>and plan for what’s next (home renovations, university, a new baby).</p>
            </div>
            <div className="hpw_secondvideo">
                <div className="hpw_secondvideo_accordion">
                    <div className="hpw_secondvideo_accordion_content">
                        <h1>A guide to thee</h1>
                        <h1>perfect find</h1>
                        <Collapse.Group style={{ marginTop: "2rem" }}>
                            <Collapse title="Browsing for inspiration" arrowIcon={<AiOutlinePlus />}>
                                <Text style={{ color: "rgb(0, 70, 83)" }}>
                                    As people scroll, they gather ideas for what to try next. The more they use Pinterest, the better their personalised recommendations become.
                                </Text>
                            </Collapse>
                            <Collapse title="Learning new skills" expanded arrowIcon={<AiOutlinePlus />}>
                                <Text style={{ color: "rgb(0, 70, 83)" }}>
                                    Some Pins contain videos or tutorials to teach new skills and activities. From recipes to DIY projects to workouts, people love seeing creative ideas and tips.
                                </Text>
                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>
                <div className="hpw_secondvideo_video">
                    <video controls autoPlay loop>
                        <source src="https://v.pinimg.com/videos/mc/720p/8c/30/00/8c30009a86c2042137a9056cd18e7c6e.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="hpw_rightaudience">
                <div className="hpw_rightaudience_left">
                    <div className="hpw_rightaudience_left_image"></div>
                    <div className={classNames(`hpw_rightaudience_left_card_${combinationNumber}`, "hpw_rightaudience_left_card")}>
                        <h1>400M</h1>
                        <p>More than 400 million</p>
                        <p>people use Pinterest every</p>
                        <p>month <sup>1</sup></p>
                    </div>
                </div>
                <div className="hpw_rightaudience_right">
                    <h1>Right audience.</h1>
                    <h1>Right place.</h1>
                    <h1>Right time.</h1>
                    <div className="hpw_rightaudience_right_para">
                        <p>You’ll find your most passionate, loyal audience on Pinterest.</p>
                        <p>Everyone wants to try new things—and this means that Pinterest</p>
                        <p>appeals to everybody. From Gen Z students to millennial men and</p>
                        <p>travel-obsessed retirees, they’re all here for inspiring, actionable</p>
                        <p>ideas.</p>
                    </div>
                    <div className="hpw_rightaudience_right_button" onClick={() => navigate("/pinterest-audience")}>
                        See audience stats
                    </div>
                </div>
            </div>
            <div className="hpw_fitin">
                <h1>How you fit in</h1>
                <div className="hpw_fitin_para">
                    <p>People are here to discover new ideas and products – so they actively want to hear from you.</p>
                    <p>That translates into meaningful results and strong relationships with your target audience.</p>
                </div>
                <div className="hpw_fitin_para">
                    <p>To get started, sign up for a free business account. You’ll get extra features such as analytics,</p>
                    <p>ads and exclusive Pin formats, all designed to help you hit your goals.</p>
                </div>
                <div className="hpw_fitin_button" onClick={() => navigate("/create")}>
                    Create account
                </div>
            </div>
            <div className="hpw_brands">
                <h1>Brands and Creators see strong results</h1>
                <div className="hpw_brands_content_container">
                    <div className="hpw_brands_content">
                        <img src={brand_and_creator_1} />
                        <h2>MVMT grew their sales</h2>
                        <div className="hpw_brands_content_para">
                            <p>Pinterest trends helped them to create fresh, eye-catching</p>
                            <p>creative, bringing in 4x lower cost per acquisition</p>
                            <p>compared to their internal benchmark<sup>1</sup></p>
                        </div>
                        <div className="hpw_brands_content_button">
                            Read story
                        </div>
                    </div>
                    <div className="hpw_brands_content">
                        <img src={brand_and_creator_2} />
                        <h2>Jomely Breton grew her audience</h2>
                        <div className="hpw_brands_content_para">
                            <p>Pinterest helped the fashion and travel expert to add 148%</p>
                            <p>more followers in a month, connecting her with a deeply</p>
                            <p>engaged audience<sup>3</sup></p>
                        </div>
                        <div className="hpw_brands_content_button">
                            See her profile
                        </div>
                    </div>
                </div>
            </div>
            <div className="hpw_questions">
                <h1>Some common questions</h1>
                <div className="hpw_questions_container">
                    <div className="hpw_question">
                        <h2>Why should I get a Pinterest business account?</h2>
                        <p>Business accounts help brands, Creators and merchants to get more out of Pinterest. You’ll get access to analytics, ads and exclusive content formats. Business accounts are free, and it’s quick to sign up.</p>
                    </div>
                    <div className="hpw_question">
                        <h2>I’m a content creator. What type of account should I sign up for?</h2>
                        <p>Creators should get a Pinterest business account to take advantage of special tools such as exclusive content formats and analytics. It’s called a ‘business account’, but it’s meant for Creators, too. <span onClick={() => navigate("/create")}>You can sign up for a new account</span>, or <span>convert your personal account to a business account.</span></p>
                    </div>
                    <div className="hpw_question">
                        <h2>I’m already using other platforms. How is Pinterest different?</h2>
                        <p>On Pinterest, content isn’t chronological – it’s personal. Your content shows up right as people are looking for something to try, buy or do.</p>
                        <p>People are here to find new ideas and take action, rather than simply liking other people’s posts or scrolling through the latest news. This means that they’re actively seeking content from brands, merchants and Creators. </p>
                    </div>
                    <div className="hpw_question">
                        <h2>I’m a content creator. What type of account should I sign up for?</h2>
                        <p>Absolutely! You don’t need your own website to publish content on Pinterest. All you need is a Pinterest business account to get started. You can upload assets, create Idea Pins and more right in the Pinterest app. You can also <span>connect your accounts from social networks </span>to Pinterest so that it’s easier to share content across platforms.</p>
                    </div>
                    <div className="hpw_question">
                        <h2>How do I decide what to publish on Pinterest?</h2>
                        <p>Your audience is using Pinterest to find fresh, original ideas. Wow them with a <span onClick={() => navigate("/creative-best-practices")}>visually captivating story</span>, or use <span>Pinterest trends</span> to create content based on what people want to try next.</p>
                        <p>The best news? Your content lives forever on Pinterest. It doesn’t disappear after a set time, so people can keep discovering it long after you publish the Pin.</p>
                    </div>
                    <div className="hpw_question">
                        <h2>How do I get started on Pinterest?</h2>
                        <p>Hey, thanks for asking. First, <span onClick={() => navigate("/create")}>get a free business account</span>. Then, take a look at our <span onClick={() => navigate("/getting-started")}>guide to getting started</span> with business tools and features.</p>
                    </div>
                </div>

            </div>
            <div className="hpw_getstarted">
                <h1>Get started</h1>
                <div className="hpw_getstarted_button">
                    Create account
                </div>
            </div>
            <div className="hpw_footer">
                <div className="hpw_footer_collapse">
                    <Collapse.Group>
                        <Collapse title="Footnotes" arrowIcon={<AiOutlinePlus />} style={{ color: "rgb(250, 237, 162)" }}>
                            <div className="hpw_footer_collapse_contentcontainer">
                                <div className="hpw_footer_collapse_content">
                                    <span>1</span>
                                    <p>Pinterest, global analysis, June 2021</p>
                                </div>
                                <div className="hpw_footer_collapse_content">
                                    <span>2</span>
                                    <p>MVMT data, 2019</p>
                                </div>
                                <div className="hpw_footer_collapse_content">
                                    <span>3</span>
                                    <p>Pinterest, internal data, 2021</p>
                                </div>
                            </div>
                        </Collapse>
                    </Collapse.Group>
                </div>
                <div className="hpw_footer_bottom">
                    <div className="hpw_footer_bottom_left">
                        <h1>Pinterest</h1>
                        <select name="language" id="language">

                            <option value="English(India)">English(India)</option>
                            <option value="English(US)">English(US)</option>
                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                            <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                        </select>
                        <span>©️ 2022 Pinterest</span>
                    </div>
                    <div className="hpw_footer_bottom_right">
                        <div className="hpw_footer_bottom_right_column">
                            <h4>About</h4>
                            <ul>
                                <li>Our Pinterest Profile</li>
                                <li>Newsroom</li>
                                <li>Career</li>
                                <li>Brand guidelines</li>
                            </ul>
                        </div>
                        <div className="hpw_footer_bottom_right_column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Business Community</li>
                                <li>For developers</li>
                                <li>For investors</li>
                            </ul>
                        </div>
                        <div className="hpw_footer_bottom_right_column">
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

export default HowPinterestWorks;