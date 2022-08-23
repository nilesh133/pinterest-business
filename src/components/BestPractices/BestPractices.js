import { useEffect } from "react";
import { useState } from "react";
import "./bestpractices.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { Collapse, Text } from "@nextui-org/react";
import {BiPlus} from "react-icons/bi";
import {BsPlusLg} from "react-icons/bs";

// Images Import
import best_practices_hero_image1 from "../../images/best-practices/best-practices-hero/best-practices-hero-image1.png"
import best_practices_hero_image2 from "../../images/best-practices/best-practices-hero/best-practices-hero-image2.png"
import best_practices_hero_image3 from "../../images/best-practices/best-practices-hero/best-practices-hero-image3.png"
import best_practices_hero_image4 from "../../images/best-practices/best-practices-hero/best-practices-hero-image4.png"

const BestPractices = () =>{
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

    const[pinData, setPinData] = useState({
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

    return(
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
                <div className="bp_hero_images">
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
                <div className="bp_pins_image">
                    <img src={pinData.src} width={pinData.width} height={pinData.height} style={{ objectFit: "contain", marginLeft: "5rem" }} />
                </div>
                <div className="bp_pins_accordion">
                    <div className="bp_pins_accordion_content">
                        <h1>Standard pins</h1>
                        <Collapse.Group style={{ marginTop: "2rem" }}>
                            <Collapse title="Pick a vertical image" expanded arrowIcon={<BsPlusLg />} style = {{borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0"}} onClick = {() => changePinCollapseImage("0")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px"}}>
                                Use high-quality, vertical images that will stand out in people’s feeds. We recommend a 2:3 aspect ratio (e.g. 1,000 x 1,500 pixels). Other ratios may cause your Pin to truncate, or may negatively impact performance.
                                </Text>
                            </Collapse>
                            <Collapse title="Make your brand the focal point" arrowIcon={<BsPlusLg />} style = {{borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0"}} onClick = {() => changePinCollapseImage("1")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px"}}>
                                Put your product or service front and centre. Avoid using abstract images or lifestyle imagery that doesn’t showcase your brand.
                                </Text>
                            </Collapse>
                            <Collapse title="Include your logo" arrowIcon={<BsPlusLg />} style = {{borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0"}} onClick = {() => changePinCollapseImage("2")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px"}}>
                                Put a logo on every Pin that you make, but keep it subtle. Avoid the lower-right corner, since that spot gets covered up by our product icons.
                                </Text>
                            </Collapse>
                            <Collapse title="Add text overlay" arrowIcon={<BsPlusLg />} style = {{borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0"}} onClick = {() => changePinCollapseImage("3")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px"}}>
                                Text overlay is the copy that goes on your Pin image to make it stand out. Keep your copy concise for readability on mobile devices. You should create separate Pins for each country that you target, so they can be translated into the local language.
                                </Text>
                            </Collapse>
                            <Collapse title="Optimise your Pin copy" arrowIcon={<BsPlusLg />} style = {{borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0"}} onClick = {() => changePinCollapseImage("4")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px"}}>
                                Clear titles and descriptions help your Pin to get discovered in search. You can use up to 100 characters for your title and up to 500 characters for your description.
                                </Text>
                            </Collapse>
                            <Collapse title="Check your links" arrowIcon={<BsPlusLg />} style = {{borderBottom: "1px solid rgb(0, 92, 98)", padding: "1rem 0"}} onClick = {() => changePinCollapseImage("5")}>
                                <Text style={{ color: "rgb(0, 92, 98)", fontSize: "18px", lineHeight: "24px"}}>
                                If your Pin includes a link, check that the link is active and loads quickly. Your Pin’s creative tells people what to expect when they click. Make sure that it matches your destination site’s topic and imagery.
                                </Text>
                            </Collapse>
                        </Collapse.Group>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BestPractices;