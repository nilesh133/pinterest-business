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

const PinterestPredicts = () => {
    AOS.init({
        duration: 400,
        easing: 'ease',
    });

    const navigate = useNavigate();
    const path = window.location.pathname;

    const [combinationNumber, setCombinationNumber] = useState("combinationOne");

    const changeCombination = () => {
        // console.log(window.scrollY);
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

    const data = [
        {
            id: "1",
            heading: "Heading1",
            description: "Desription1",
            category: ["Trend1", "Trend2", "Trend3"]
        },
        {
            id: "2",
            heading: "Heading2",
            description: "Desription1",
            category: ["Trend2"]
        },
        {
            id: "3",
            heading: "Heading3",
            description: "Desription1",
            category: ["Trend3", "Trend1", "Trend4"]
        },
        {
            id: "4",
            heading: "Heading4",
            description: "Desription2",
            category: ["Trend2", "Trend5"]
        },
        {
            id: "5",
            heading: "Heading5",
            description: "Desription3",
            category: ["Trend1"]
        },
    ]

    const [res, setRes] = useState(data)
    const [all, setAll] = useState(true)

    const present = []
    const handleTrend = (e, trend) => {
        if (e.target.checked === true) {

            for (let cdata of data) {
                const newData = []
                let present = false;
                if (cdata.category.includes(trend)) {
                    // res.filter((rData) => {
                    //     if (rData.id === cdata.id) {
                    //         present = true;
                    //     }
                    // })
                    for (let rData of res) {
                        if (rData.id === cdata.id) {
                            present = true;
                        }
                    }
                    if (present === false) {
                        newData.push(cdata)
                        // setRes(res => [...res, {
                        //     id: cdata.id,
                        //     heading: cdata.heading,
                        //     description: cdata.description,
                        //     category: cdata.category
                        // }])
                    }
                }
                setRes(newData)
            }
            // data.filter((cdata) => {
            //     const newData = []
            //     let present = false;
            //     if (cdata.category.includes(trend)) {
            //         res.filter((rData) => {
            //             if (rData.id === cdata.id) {
            //                 present = true;
            //             }
            //         })
            //         if (present === false) {
            //             newData.push(cdata)
            //             // setRes(res => [...res, {
            //             //     id: cdata.id,
            //             //     heading: cdata.heading,
            //             //     description: cdata.description,
            //             //     category: cdata.category
            //             // }])
            //         }
            //     }
            //     setRes(newData)
            // })

        }
        else {
            const newData = []
            res.filter((rData, i) => {
                if (rData.category !== trend) {
                    newData.push(rData)
                }
            })
            setRes(newData)
        }
        console.log(res)
    }

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
                        <p className="pp_navbar_dropbtn">Insights</p>
                        <div
                            className={classNames(
                                `pp_navbar_dropdown_content_${combinationNumber}`,
                                "pp_navbar_dropdown_content"
                            )}
                        >
                            <p onClick={() => navigate("/pinterest-predicts")}>
                                Pinterest predicts
                            </p>
                        </div>
                    </div>
                    <div class="pp_navbar_dropdown">
                        <p className={classNames("ar_navbar_dropbtn", `${path === "/guides-and-education" ? "navbar_active" : ""}`)}>Resources</p>
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
                            <p className={path === "/guides-and-education" ? "navbar_active" : ""} onClick={() => navigate("/guides-and-education")}>
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

            <div className="pp_trends">
                <div className="pp_trends_options" style={{ display: "flex" }}>
                    <div style={{ padding: "1rem", cursor: "pointer", backgroundColor: "#000" }}>
                        <input type="checkbox" onClick={(e) => handleTrend(e, "Trend1")} />
                        <span>Trend1</span>
                    </div>
                    <div style={{ padding: "1rem", cursor: "pointer", backgroundColor: "#000" }}>
                        <input type="checkbox" onClick={(e) => handleTrend(e, "Trend2")} />
                        <span>Trend2</span>
                    </div>
                    <div style={{ padding: "1rem", cursor: "pointer", backgroundColor: "#000" }}>
                        <input type="checkbox" onClick={(e) => handleTrend(e, "Trend3")} />
                        <span>Trend3</span>
                    </div>
                    <div style={{ padding: "1rem", cursor: "pointer", backgroundColor: "#000" }}>
                        <input type="checkbox" onClick={(e) => handleTrend(e, "Trend4")} />
                        <span>Trend4</span>
                    </div>
                    <div style={{ padding: "1rem", cursor: "pointer", backgroundColor: "#000" }}>
                        <input type="checkbox" onClick={(e) => handleTrend(e, "Trend5")} />
                        <span>Trend5</span>
                    </div>
                    {/* <p onClick={() => handleTrend("Trend1")} style = {{padding: "1rem", cursor: "pointer", backgroundColor: "#000"}}>Trend1</p>
                    <p onClick={() => handleTrend("Trend2")} style = {{padding: "1rem", cursor: "pointer", backgroundColor: "#000"}}>Trend2</p>
                    <p onClick={() => handleTrend("Trend3")} style = {{padding: "1rem", cursor: "pointer", backgroundColor: "#000"}}>Trend3</p>
                    <p onClick={() => handleTrend("Trend4")} style = {{padding: "1rem", cursor: "pointer", backgroundColor: "#000"}}>Trend4</p>
                    <p onClick={() => handleTrend("Trend5")} style = {{padding: "1rem", cursor: "pointer", backgroundColor: "#000"}}>Trend5</p> */}
                </div>
                <div style={{ display: "flex" }}>
                    {
                        res?.map((resData) => (
                            <div style={{ marginRight: "1rem" }}>
                                <p>{resData.id}</p>
                                <br />
                                <h1>{resData.heading}</h1>
                                <br />
                                <p>{resData.description}</p>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PinterestPredicts;