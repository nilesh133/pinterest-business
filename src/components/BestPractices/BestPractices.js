import { useEffect } from "react";
import { useState } from "react";
import "./bestpractices.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { Collapse, Text } from "@nextui-org/react";
import { BiPlus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

// Images Import
import best_practices_hero_image1 from "../../images/best-practices/best-practices-hero/best-practices-hero-image1.png"
import best_practices_hero_image2 from "../../images/best-practices/best-practices-hero/best-practices-hero-image2.png"
import best_practices_hero_image3 from "../../images/best-practices/best-practices-hero/best-practices-hero-image3.png"
import best_practices_hero_image4 from "../../images/best-practices/best-practices-hero/best-practices-hero-image4.png"
import best_practices_specs from "../../images/best-practices/best-practices-specs.png"

import AOS from 'aos';
import 'aos/dist/aos.css';

const BestPractices = () => {
    AOS.init({
        duration: 400,
        easing: 'ease',
    });

    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");

    const changeCombination = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 0 && window.scrollY <= 1160) {
            setCombinationNumber("combinationOne");
        }
        else if (window.scrollY >= 1160 && window.scrollY <= 4784) {
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

    const [pinData, setPinData] = useState({
        src: "https://images.ctfassets.net/h67z7i6sbjau/4hF6N4apVh4A14ZRlff4n6/cc818737e0c8fe099b9469b91a223755/7aee88b2017f246ddcb34adad5988f0b.png?fm=webp&q=85",
        width: "384px",
        height: "434px"
    })

    const pinsCollapseImages = [
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/4hF6N4apVh4A14ZRlff4n6/cc818737e0c8fe099b9469b91a223755/7aee88b2017f246ddcb34adad5988f0b.png?fm=webp&q=85",
            width: "384px",
            height: "434px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/1p403AxNBNdp69vfQvG397/e40d494114f89ef6f866e6c65578508c/545e83e2abad1301fa5513863ec0c7f0.png?fm=webp&q=85",
            width: "280px",
            height: "460px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/6khizUZIb4Uqg5JrX1l0nW/1727ec1c913ab83135e91ea28d210ab1/2401424b7440018b229fe153d436ee68.png?fm=webp&q=85",
            width: "280px",
            height: "460px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/7iOd1ypgKUlxBMTyjuF2tQ/c13ce0f48123b08ca2f3245f77a1c253/18e38a09bbfcfb028d9d93361b54024a.png?fm=webp&q=85",
            width: "280px",
            height: "460px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/5Xtpf2kvjdlEkoOF5EzIQx/8c08b3be2d03fbacfef09de785fbaae8/CBP_Standard-Pins-06_236x445_2x.png?fm=webp&q=85",
            width: "236px",
            height: "445px"

        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/6rCHkUFJaYdNNxVZV5xtP/8536142a8b1f017e96f964e5d11d0650/CBP_Standard-Pins-06_236x445_2x.png?fm=webp&q=85",
            width: "236px",
            height: "445px"
        }
    ]

    const changePinCollapseImage = (index) => {
        console.log(pinsCollapseImages[index].src);
        setPinData({
            src: pinsCollapseImages[index].src,
            width: pinsCollapseImages[index].width,
            height: pinsCollapseImages[index].height,
        })
    }

    const [videoPinData, setVideoPinData] = useState({
        src: "https://images.ctfassets.net/h67z7i6sbjau/78nWA2fcj3kUbJOYVRjn6q/0e32bc541d787a23be29273dd1f90ffb/howtopin_module04_video_a-startstrong_2x.gif?fm=webp&q=85",
        width: "410px",
        height: "410px"
    })

    const videoPinImages = [
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/78nWA2fcj3kUbJOYVRjn6q/0e32bc541d787a23be29273dd1f90ffb/howtopin_module04_video_a-startstrong_2x.gif?fm=webp&q=85",
            width: "410px",
            height: "410px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/54BfIP8wNCgUmYirNoNtGr/501d4fb003cf2dd88943bb608c5a1eb2/howtopin_module04_video_b-rightlength_2x.gif?fm=webp&q=85",
            width: "410px",
            height: "410px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/2x8umnBIiNpZugTkVs2epS/0a5459a2069168e6c647ddab80987dda/howtopin_module04_video_c-show_2x.gif?fm=webp&q=85",
            width: "410px",
            height: "410px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/4sUdBlIMFDVlqTZBDGya9a/c5fac96e58ab5222fc775bfac38d82c0/2554b6cc0d5f40929a320c460251135d.png?fm=webp&q=85",
            width: "384px",
            height: "384px"
        },
        {
            src: "https://images.ctfassets.net/h67z7i6sbjau/6Tum4G9BavJ7PS49OHPS0e/443fa9a10b81f77fefc6a5a1a5dfedb0/CBP_Video-Pins-05_392x540_2x.png?fm=webp&q=85",
            width: "392px",
            height: "540px"
        }
    ]

    const changeVideoPinImage = (index) => {
        console.log(videoPinImages[index].src);
        setVideoPinData({
            src: videoPinImages[index].src,
            width: videoPinImages[index].width,
            height: videoPinImages[index].height,
        })
    }

    const [ideaPinData, setIdeaPinData] = useState({
        tag: "video",
        src: "https://v.pinimg.com/videos/mc/720p/1e/f3/d0/1ef3d0c34a8a3faca2eb561be1f8adae.mp4",
        width: "410px",
        height: "565px"
    })

    const ideaPinImages = [
        {
            tag: "video",
            src: "https://v.pinimg.com/videos/mc/720p/1e/f3/d0/1ef3d0c34a8a3faca2eb561be1f8adae.mp4",
            width: "410px",
            height: "565px"
        },
        {
            tag: "video",
            src: "https://v.pinimg.com/videos/mc/720p/1e/f3/d0/1ef3d0c34a8a3faca2eb561be1f8adae.mp4",
            width: "410px",
            height: "565px"
        },
        {
            tag: "img",
            src: "https://images.ctfassets.net/h67z7i6sbjau/6lEemtqcPyJGUOXKLAHBYY/78e461ad3e589f810aa48262adbf9155/CBP_IdeaPins_Pin-2_2x.png?fm=webp&q=85",
            width: "375px",
            height: "667px"
        },
        {
            tag: "img",
            src: "https://images.ctfassets.net/h67z7i6sbjau/3NTz1cP8K4jpMluEtg8f3Q/d61bc59e7c189ff4c1cc9fd634efbc8c/StoryPin_2_2x.png?fm=webp&q=85",
            width: "375px",
            height: "667px"
        },
        {
            tag: "img",
            src: "https://images.ctfassets.net/h67z7i6sbjau/3vwhQ75fG8lQUZtf03LWpM/5553ffd349c3334fff5375ced6c5394b/CBP_IdeaPins_Pin-4_2x.png?fm=webp&q=85",
            width: "375px",
            height: "667px"
        },
        {
            tag: "img",
            src: "https://images.ctfassets.net/h67z7i6sbjau/7U2pkvXN9gWWsYP96CXtr/6aaac2a53752596a895f2f244912052b/CBP_IdeaPins_Pin-5_2x.png?fm=webp&q=85",
            width: "375px",
            height: "667px"
        }
    ]

    const changeIdeaPinImage = (index) => {
        setIdeaPinData({
            tag: ideaPinImages[index].tag,
            src: ideaPinImages[index].src,
            width: ideaPinImages[index].width,
            height: ideaPinImages[index].height,
        })
    }

    return (
        <div className={`bp_${combinationNumber}`}>
            <div
                className={classNames(`bp_navbar_${combinationNumber}`, "bp_navbar")}
            >
                <div className="bp_navbar_logo">Business</div>
                <div className="bp_navbar_items">
                    <div class="bp_navbar_dropdown">
                        <p className={classNames("bp_navbar_dropbtn")}>Why pinterest?</p>
                        <div
                            className={classNames(
                                `bp_navbar_dropdown_content_${combinationNumber}`,
                                "bp_navbar_dropdown_content"
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
                    <div class="bp_navbar_dropdown">
                        <p className="bp_navbar_dropbtn">Create content</p>
                        <div
                            className={classNames(
                                `bp_navbar_dropdown_content_${combinationNumber}`,
                                "bp_navbar_dropdown_content"
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
                    <div class="bp_navbar_dropdown">
                        <p className="bp_navbar_dropbtn">Insights</p>
                        <div
                            className={classNames(
                                `bp_navbar_dropdown_content_${combinationNumber}`,
                                "bp_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-predicts")}>
                                Pinterest predicts
                            </p>
                        </div>
                    </div>
                    <div class="bp_navbar_dropdown">
                        <p className={classNames("ar_navbar_dropbtn", `${path === "/guides-and-education" ? "navbar_active" : ""}`)}>Resources</p>
                        <div
                            className={classNames(
                                `bp_navbar_dropdown_content_${combinationNumber}`,
                                "bp_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-business-partners")}>
                                Pinterest Business Partners
                            </p>
                            <p onClick={() => navigate("/agency-resources")}>
                                Agency Resources
                            </p>
                            <p className={path === "/guides-and-education" ? "navbar_active" : ""} onClick={() => navigate("/guides-and-education")}>
                                Guides and Education
                            </p>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            `bp_navbar_login_${combinationNumber}`,
                            "bp_navbar_login"
                        )}
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </div>
                    <div
                        className={classNames(
                            `bp_navbar_signup_${combinationNumber}`,
                            "bp_navbar_signup"
                        )}
                        onClick={() => navigate("/create")}
                    >
                        Sign up
                    </div>
                </div>
            </div>
            <div className="bp_hero">
                <div className="bp_hero_images" data-aos="fade-up">
                    <div className="bp_hero_images_leftcol">
                        <img src={best_practices_hero_image1} width="289px" height="433px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                        <img src={best_practices_hero_image2} width="289px" height="433px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                    </div>
                    <div className="bp_hero_images_rightcol">
                        <img src={best_practices_hero_image3} width="289px" height="433px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                        <img src={best_practices_hero_image4} width="289px" height="433px" style={{ objectFit: "cover", borderRadius: "2rem", padding: "0.6rem" }} />
                    </div>
                </div>
                <div className="bp_hero_content">
                    <h1>Make Pins that</h1>
                    <h1>perform</h1>
                    <p>The best Pins are visually compelling, tell a good story and</p>
                    <p>make people want to learn more. It’s easy to make great</p>
                    <p>Pins – just follow these tips.</p>
                </div>
            </div>
            <div className="bp_pins">
                <div className="bp_pins_image" data-aos="fade-up">
                    <img src={pinData.src} width={pinData.width} height={pinData.height} style={{ objectFit: "contain", marginLeft: "5rem" }} />
                </div>
                <div className="bp_pins_accordion" data-aos="fade-up">
                    <div className="bp_pins_accordion_content">
                        <h1>Standard pins</h1>
                        <Collapse.Group style={{ marginTop: "2rem" }}>
                            <Collapse title="Pick a vertical image" expanded arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changePinCollapseImage("0")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Use high-quality, vertical images that will stand out in people’s feeds. We recommend a 2:3 aspect ratio (e.g. 1,000 x 1,500 pixels). Other ratios may cause your Pin to truncate, or may negatively impact performance.
                                </Text>
                            </Collapse>
                            <Collapse title="Make your brand the focal point" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changePinCollapseImage("1")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Put your product or service front and centre. Avoid using abstract images or lifestyle imagery that doesn’t showcase your brand.
                                </Text>
                            </Collapse>
                            <Collapse title="Include your logo" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changePinCollapseImage("2")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Put a logo on every Pin that you make, but keep it subtle. Avoid the lower-right corner, since that spot gets covered up by our product icons.
                                </Text>
                            </Collapse>
                            <Collapse title="Add text overlay" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changePinCollapseImage("3")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Text overlay is the copy that goes on your Pin image to make it stand out. Keep your copy concise for readability on mobile devices. You should create separate Pins for each country that you target, so they can be translated into the local language.
                                </Text>
                            </Collapse>
                            <Collapse title="Optimise your Pin copy" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changePinCollapseImage("4")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Clear titles and descriptions help your Pin to get discovered in search. You can use up to 100 characters for your title and up to 500 characters for your description.
                                </Text>
                            </Collapse>
                            <Collapse title="Check your links" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changePinCollapseImage("5")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    If your Pin includes a link, check that the link is active and loads quickly. Your Pin’s creative tells people what to expect when they click. Make sure that it matches your destination site’s topic and imagery.
                                </Text>
                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>

            </div>
            <div className="bp_videopins">
                <div className="bp_videopins_accordion" data-aos="fade-up">
                    <div className="bp_videopins_accordion_content">
                        <h1>Video pins</h1>
                        <Collapse.Group style={{ marginTop: "2rem" }}>
                            <Collapse title="Stay strong and make it accessible" expanded arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeVideoPinImage("0")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Lead with a clear hook within the first few seconds to capture people’s attention.
                                </Text>
                            </Collapse>
                            <Collapse title="Choose the right length" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeVideoPinImage("1")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Make sure that your videos clearly and succinctly communicate your ideas. For organic content, we recommend videos between 15 seconds and 1 minute long. For video ads, 6–15 seconds works best.
                                </Text>
                            </Collapse>
                            <Collapse title="Show, don't tell" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeVideoPinImage("2")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Some Pinners watch video with the sound off, so don’t rely on audio or dialogue. Use text overlay or captions to help tell your story.
                                </Text>
                            </Collapse>
                            <Collapse title="Pick a strong cover image" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeVideoPinImage("3")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Select a cover image when you upload your video so that people can understand what your video is about with just one glance.
                                </Text>
                            </Collapse>
                            <Collapse title="Optimise your Pin copy" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeVideoPinImage("4")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Clear titles and descriptions help your video to get discovered in search. You can use up to 100 characters for your title and up to 500 characters for your description.
                                </Text>
                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>
                <div className="bp_videopins_image" data-aos="fade-up">
                    <img src={videoPinData.src} width={videoPinData.width} height={videoPinData.height} style={{ objectFit: "contain", marginLeft: "5rem" }} />
                </div>
            </div>
            <div className="bp_ideapins">

                <div className="bp_ideapins_image" data-aos="fade-up">
                    {
                        ideaPinData.tag === "video" ?
                            <video controls autoPlay loop>
                                <source src= {ideaPinData.src} type="video/mp4" width={ideaPinData.width} height={ideaPinData.height}/>
                            </video>
                            :
                            <img src={ideaPinData.src} width={ideaPinData.width} height={ideaPinData.height} style={{ objectFit: "contain", marginLeft: "5rem" }} />

                    }
                </div>
                <div className="bp_ideapins_accordion" data-aos="fade-up">
                    <div className="bp_ideapins_accordion_content">
                        <h1>Idea Pins</h1>
                        <Collapse.Group style={{ marginTop: "2rem" }}>
                            <Collapse title="What's an idea pin?" expanded arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeIdeaPinImage("0")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Idea Pins are a multi-page canvas to share your ideas. They last forever, and help you to grow your audience.
                                </Text>
                            </Collapse>
                            <Collapse title="Think video first" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeIdeaPinImage("1")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Video is great for telling a story and helps you to connect with your audience. Start with a video on your first page to stand out in people’s feeds. Just make sure that you add text overlay, since some people watch with the sound off.
                                </Text>
                            </Collapse>
                            <Collapse title="Include your logo" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeIdeaPinImage("2")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Plan your content like a real story, with a true beginning, middle and end. Make sure to include everything that people need to act on your idea.
                                </Text>
                                <br />
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Idea Pins are for your original content. Content that’s clearly watermarked or repurposed doesn’t perform well with people who are on Pinterest to look for new, original ideas. And of course, only use content that you have permission to use.
                                </Text>
                            </Collapse>
                            <Collapse title="Show tour personality" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeIdeaPinImage("3")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Create your own community by sharing personal step-by-step guides and how-to videos.
                                </Text>
                            </Collapse>
                            <Collapse title="Share the right details" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeIdeaPinImage("4")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Fill in the details page so that people can make your idea happen. You can list ingredients, supplies, etc. Before publishing, make sure that you tag relevant topics so that your content reaches the right people.
                                </Text>
                            </Collapse>
                            <Collapse title="Check, check, check" arrowIcon={<BsPlusLg />} style={{ borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0" }} onClick={() => changeIdeaPinImage("5")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px" }}>
                                    Do a quick quality review before publishing. Always aim for crisp, clean and high-quality. Things to check:
                                    <br />
                                    - Are the screen edges covered? If not, pinch to resize.
                                    <br />
                                    - How’s the lighting? Natural light does wonders.
                                    <br />
                                    - Do the videos and images fit together? If not, try adding some filters.
                                </Text>
                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>

            </div>
            <div className="bp_specs">
                <div className="bp_specs_left">
                    <h1>Check the specs</h1>
                    <p>See creative specs and requirements, from file types to character</p>
                    <p>counts</p>
                    <div className="bp_specs_left_button">
                        See specs
                    </div>
                </div>
                <div className="bp_specs_right" data-aos="fade-up">
                    <img src={best_practices_specs} width = "392px" height= "640px" style={{objectFit: "cover"}}/>
                </div>
            </div>
            <div className="bp_getstarted">
                <h1>Get started</h1>
                <div className="bp_getstarted_buttons">
                    <div className="bp_getstarted_button">
                        Create pin
                    </div>
                    <div className="bp_getstarted_button">
                        See more examples
                    </div>
                </div>
            </div>
            <div className="bp_footer">
                <div className="bp_footer_collapse">
                    <Collapse.Group style={{ color: "rgb(255, 228, 193)" }}>
                        <Collapse title="Footnotes" arrowIcon={<BiPlus />}>
                            <div className="bp_footer_collapse_contentcontainer">
                                <div className="bp_footer_collapse_content">
                                    <span>1</span>
                                    <p>Nielsen Path to Purchase Research 2019/2020, UK;</p>
                                    <p>GlobalWebIndex 2019 Q1-Q4, UK</p>
                                </div>
                                <div className="bp_footer_collapse_content">
                                    <span>2</span>
                                    <p>*Pinterest Ads are available to business accounts in</p>
                                    <p>specific countries. Please refer to our Help Centre for</p>
                                    <p>more information.</p>
                                </div>
                            </div>
                        </Collapse>
                    </Collapse.Group>
                </div>
                <div className="bp_footer_bottom">
                    <div className="bp_footer_bottom_left">
                        <h1>Pinterest</h1>
                        <select name="language" id="language">

                            <option value="English(India)">English(India)</option>
                            <option value="English(US)">English(US)</option>
                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                            <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                        </select>
                        <span>©️ 2022 Pinterest</span>
                    </div>
                    <div className="bp_footer_bottom_right">
                        <div className="bp_footer_bottom_right_column">
                            <h4>About</h4>
                            <ul>
                                <li>Our Pinterest Profile</li>
                                <li>Newsroom</li>
                                <li>Career</li>
                                <li>Brand guidelines</li>
                            </ul>
                        </div>
                        <div className="bp_footer_bottom_right_column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Business Community</li>
                                <li>For developers</li>
                                <li>For investors</li>
                            </ul>
                        </div>
                        <div className="bp_footer_bottom_right_column">
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

export default BestPractices;