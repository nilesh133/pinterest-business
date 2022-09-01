import { useEffect } from "react";
import { useState } from "react";
import "./pinterestpredicts.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { Collapse, Text } from "@nextui-org/react";
import { BiPlus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { border } from "@mui/system";

const PinterestPredicts = () => {
    AOS.init({
        duration: 400,
        easing: 'ease',
    });

    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");

    const changeCombination = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 0 && window.scrollY <= 2347) {
            setCombinationNumber("combinationOne");
        }
        else if (window.scrollY >= 2347 && window.scrollY <= 10360) {
            setCombinationNumber("combinationTwo");
        }
        else {
            setCombinationNumber("combinationOne");
        }
    };

    useEffect(() => {
        changeCombination();
        window.addEventListener("scroll", changeCombination);
    });

    const trendsData = [
        {
            trendName: 'Curve appeal',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/4wyNmfiYwQUufu7kxz7Rlf/a6161168ec43183b937f7277ce6f900e/pinterestpredicts_curveappeal_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Dopamine dressing',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/4RvrOXKN3ZEp9F9bcbNDlp/097d5135d9e752198277ee0619c99fd3/pinterestpredicts_dopaminedressing_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Night moves',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/7kxMWhTyqoeLXg5NdbaSw3/23cbec14737f854d2514f84984675e92/pinterestpredicts_nightmoves_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Relation-tips',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/1p8LGkgOFLd26e3thLKbLn/60a32b188516acc6c4c342904df9b7a0/pinterestpredicts_relation-tips_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Puff love',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/5E1iP1KZV988BWKhIuCh16/946d40ea4a221b13bf5611f25589c7e1/pinterestpredicts_puff_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Oh my goth',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/525npF3THFNzcrIey6Cz84/c3298bf77fb33c49275b84a8baab8b03/pinterestpredicts_ohmygoth_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Be jewelled',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/683I8adhYj4jrpMf0V1boT/1b301d628d5f0e978c5e3af75ea90683/pinterestpredicts_bejeweled_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Hot horology',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/5DMKP63qpZdjOZJgfgkkyG/1fe12c115bea860927a230d8ca35a2de/pinterestpredicts_hothorology_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Emotional escape rooms',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/CoawnDT1ARKu9dBjGAM7t/c7449605523b652e37ff6c8d6b7353a9/pinterestpredicts_emotionalescaperooms_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Pearlcore',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/0rPEIUUmASUv1IZ3BWELv/4ccd45e7e5326aaa1cbfedc961ae7b86/pinterestpredicts_pearlcore_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Rebel cuts',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/1i4f2iMXV3q6hemVlPTcSN/2fc1b91b89fbce6c0d63d3c6e7461308/pinterestpredicts_rebelcuts_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Lounge erie',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/2bVpugPSYSIpgyX81nhfxj/fa1d10c0c869f80ccd91d5ddb98061ab/pinterestpredicts_lounge-erie_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Flexercise',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/2vCT6RGD8MqbOQzBfGpgWq/d912cb6ddabb9e3914f1fc72d48db878/pinterestpredicts_flexercise_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Chequer yourself',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/47Rb4QO1TqF9c4SSTyDQFg/fd545fbfdf57a0f85517ce594fcfefa8/pinterestpredicts_checkyourself_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Dont quit your yay job',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/2TYYzNLuORldOgiqsPdxB8/db520eeef7c1edd1d22d3edf417d25ae/pinterestpredicts_don___tquityouryayjob_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Cuppa time',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/5wPlPX6PayShz3ZqGsyD8W/6781fddbab382762b948e6f779cf5ea8/pinterestpredicts_cuppatime_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Hotter wheels',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/gPPGrGSb5oZuMd2aS6v56/60b55b1f033daf08589aa1fa6c9d4a73/pinterestpredicts_hotterwheels_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Mindful menstuation',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/69x6fTYeIDvzq4siob2PcK/1f94a02ac483efd7141399da579018d8/pinterestpredicts_mindfulmenstruation_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Hellenistic revival',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/59UYIW3bgR2oro21CMTRIn/4d450e8fa6cc29f11a49fab4c51bb08d/pinterestpredicts_hellenisticrevival_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Lake it til you make it',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/1LSanjBN72YdKJNF9KG4dP/b8b0c559d37ff45d38f9f493a1f35693/pinterestpredicts_lakeittilyoumakeit_540x720px_2x_NO.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Celestial celebrations',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/1Ua5E3KDbbjLHeC5sRO30C/51774a1c0a0eeeb66953b5afe7addcfa/pinterestpredicts_celestialcelebrations_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Finpowerment',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/7DjU0g0bYgCL2i94MuZNTa/16869bb0e96037b0bd59bb5ff4580315/pinterestpredicts_finpowerment_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Pet palace',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/5iU0lUUbIT0n1WUIpS8wfs/87e3295edf1d5f20f0a989336690fbf4/pinterestpredicts_barkitecture_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Nailscapes',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/3uo1Zi58RZEEHSkaXWbC5k/1000bee250c8fa05ebf929eab88f53df/pinterestpredicts_nailscapes_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Calming classrooms',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/1HEt8hKd4cAqo0xJcR4HSf/5e0ba4c98a64e8566f48fdb89a90cd23/pinterestpredicts_calmingclassrooms_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Bestie aesthetic',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/5vOLpKLaraUyQBA3gBotBq/ff89589ab6f0a8d7ffabc6fe1574c92b/pinterestpredicts_bestieaesthetic_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Altbashes',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/Ljlu9yPgl2oI8smR8Fj9I/19dca7760ae010c0bcfe3b9047a605d2/pinterestpredicts_altbashes_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Store decor',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/4R9F3fCDP2BspefH89dNOy/9d68b68a01c572886217c55f9f76b398/pinterestpredicts_storedecor_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Energy healing',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/13cACJ027pwL5vJUXmKcc0/a0acc15daa0dc965f3b7fa328e5f67b3/pinterestpredicts_higherfrequency_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Limitless luxe',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/3cMWxXxrqE4PWgJtMizg22/f650810e9eeb3ef8d94737c07c884877/pinterestpredicts_limitlessluxe_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Ancestral eats',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/4Nb0Q9hS3OE8A2OOpx4eaN/bee3be241ad8e1fee654058b37cde770/pinterestpredicts_ancestraleats_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'The last resort',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/7vp73RNR4JoaQJ3lkJV8FB/9375242291903b5b7a9bbbdf775e8811/pinterestpredicts_thelastresort_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Kidding around',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/7oHR9d8khpedEFyH5c8XKC/8097e2fe03a37203ed772966152ab06f/pinterestpredicts_kiddingaround_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Batter up',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/7DYvZO3LLoKm21P17P4Fb9/3c5d7fb0631dc0b5c0ad59b8e5779cd6/pinterestpredicts_batterup_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
        {
            trendName: 'Biophilic design',
            trendImage: 'https://images.ctfassets.net/h67z7i6sbjau/1FpKhQC0ZUZWOO4zde8sdl/43fe18affb40c1202a4debf061b6884e/pinterestpredicts_biophilicdesign_540x720px.png?fm=webp&q=85&w=1216&h=1216'
        },
    ]


    return (
        <div className={`pp_${combinationNumber}`}>
            <div
                className={classNames(`pp_navbar_${combinationNumber}`, "pp_navbar")}
            >
                <div className="pp_navbar_logo">Business</div>
                <div className="pp_navbar_items">
                    <div class="pp_navbar_dropdown">
                        <p className={classNames("pp_navbar_dropbtn")}>Why pinterest?</p>
                        <div
                            className={classNames(
                                `pp_navbar_dropdown_content_${combinationNumber}`,
                                "pp_navbar_dropdown_content"
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
                    <div class="pp_navbar_dropdown">
                        <p className="pp_navbar_dropbtn">Create content</p>
                        <div
                            className={classNames(
                                `pp_navbar_dropdown_content_${combinationNumber}`,
                                "pp_navbar_dropdown_content"
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
                    <div class="pp_navbar_dropdown">
                        <p className={classNames("ar_navbar_dropbtn", `${path === "/pinterest-predicts" ? "navbar_active" : ""}`)}>Insights</p>
                        <div
                            className={classNames(
                                `pp_navbar_dropdown_content_${combinationNumber}`,
                                "pp_navbar_dropdown_content"
                            )}
                        >
                            <p className={path === "/pinterest-predicts" ? "navbar_active" : ""} onClick={() => navigate("/pinterest-predicts")}>
                                Pinterest predicts
                            </p>
                        </div>
                    </div>
                    <div class="pp_navbar_dropdown">
                        <p className="pp_navbar_dropbtn">Resources</p>
                        <div
                            className={classNames(
                                `pp_navbar_dropdown_content_${combinationNumber}`,
                                "pp_navbar_dropdown_content"
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
                            `pp_navbar_login_${combinationNumber}`,
                            "pp_navbar_login"
                        )}
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </div>
                    <div
                        className={classNames(
                            `pp_navbar_signup_${combinationNumber}`,
                            "pp_navbar_signup"
                        )}
                        onClick={() => navigate("/create")}
                    >
                        Sign up
                    </div>
                </div>
            </div>
            <div className="pp_hero">
                <h1>Pinterest Predicts</h1>
                <h1>2022</h1>
            </div>
            <div className="pp_youtubevideo">
                <iframe style={{ border: "none" }} width="100%" height="1080px" src="https://www.youtube.com/embed/MzkavEhAV-M?controls=0&modestbranding=1&mute=1&playsinline=1&rel=0&enablejsapi=1&origin=https%3A%2F%2Fbusiness.pinterest.com&widgetid=1">
                </iframe>
            </div>
            <div className="pp_before">
                <h1>Before you see it everywhere, see it here.</h1>
                <div className="pp_before_para">
                    <p>People use Pinterest to plan for the future. This means</p>
                    <p>that we know what’s next. In fact, 8 out of 10 of our</p>
                    <p>predictions for 2021 came true.¹ This isn't another year-</p>
                    <p>end trend report. This is a not-yet-trending report—a</p>
                    <p>window into the future, from the place where people go</p>
                    <p>to plan it.² Let's look forward to 2022.</p>
                </div>
                <h2>This is Pinterest Predicts.</h2>
            </div>
            <div className="pp_trends">
                <p>Filter 2022 trends by</p>
                <div className="pp_trends_audience">
                    <h3>Audience</h3>
                    <h3>Category</h3>
                    {/* 394 526 */}
                </div>
                <div className="pp_trends_content">
                    {
                        trendsData.map((data) => (
                            <div className="pp_trends_content_box">
                                <img src={data.trendImage} width="394px" height="526px" style={{ objectFit: "cover" }} />
                                <span className="pp_trends_content_box_heading">{data.trendName}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="pp_getstarted">
                <h1>Dive deeper into Pinterest Predicts</h1>
                <div className="pp_getstarted_buttons">
                    <div className="pp_getstarted_button">
                        Audience behind the trends
                    </div>
                    <div className="pp_getstarted_button">
                        Download the full report in a PDF
                    </div>
                </div>
            </div>
            <div className="pp_footer">
                <div className="pp_footer_collapse">
                    <Collapse.Group>
                        <Collapse title="Footnotes" style={{ color: "rgb(0, 17, 38)" }} arrowIcon={<BiPlus />}>
                            <div className="pp_footer_collapse_contentcontainer">
                                <div className="pp_footer_collapse_content">
                                    <span>1</span>
                                    <p>Pinterest, search data, global, analysis period Oct</p>
                                    <p>2019–Sept 2021</p>
                                </div>
                                <div className="pp_footer_collapse_content">
                                    <span>2</span>
                                    <p>All 2022 trends come from global Pinterest search</p>
                                    <p>data for the analysis period of Oct 2019–Sept 2021.</p>
                                    <p>Please note that Pinterest’s Advertising Guidelines</p>
                                    <p>prohibit the targeting of any audience based on race,</p>
                                    <p>ethnicity, religious beliefs and sexual orientation,</p>
                                    <p>among other things. For more information, please</p>
                                    <p>see our Advertising Guidelines.</p>
                                </div>
                            </div>
                        </Collapse>
                    </Collapse.Group>
                </div>
                <div className="pp_footer_bottom">
                    <div className="pp_footer_bottom_left">
                        <h1>Pinterest</h1>
                        <select name="language" id="language">

                            <option value="English(India)">English(India)</option>
                            <option value="English(US)">English(US)</option>
                            <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                            <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                        </select>
                        <span>©️ 2022 Pinterest</span>
                    </div>
                    <div className="pp_footer_bottom_right">
                        <div className="pp_footer_bottom_right_column">
                            <h4>About</h4>
                            <ul>
                                <li>Our Pinterest Profile</li>
                                <li>Newsroom</li>
                                <li>Career</li>
                                <li>Brand guidelines</li>
                            </ul>
                        </div>
                        <div className="pp_footer_bottom_right_column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Business Community</li>
                                <li>For developers</li>
                                <li>For investors</li>
                            </ul>
                        </div>
                        <div className="pp_footer_bottom_right_column">
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

export default PinterestPredicts;