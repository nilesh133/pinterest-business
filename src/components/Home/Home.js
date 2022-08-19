import { useEffect } from "react";
import { useState } from "react";
import "./home.css"
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    // const combination1 = {
    //     background_color: "#00422C",
    //     color: "#CDF9CD"
    // }

    // const combination2 = {
    //     background_color: "#FFFEDB",
    //     color: "#00422C"
    // }

    // const combination3 = {
    //     background_color: "#FFE376",
    //     color: "#00422C"
    // }

    // const [bgColor, setBgColor] = useState("#00422C");
    // const [color, setColor] = useState("#CDF9CD")

    const [combinationNumber, setCombinationNumber] = useState("combinationOne")

    const changeCombination = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 2343 && window.scrollY <= 4186) {
            setCombinationNumber("combinationTwo")
            // setBgColor(combination2.background_color)
            // setColor(combination2.color)
        }
        else if (window.scrollY >= 4187 && window.scrollY <= 4950) {
            setCombinationNumber("combinationThree")
            // setBgColor(combination3.background_color)
            // setColor(combination3.color)
        }
        else {
            setCombinationNumber("combinationOne")
            // setBgColor(combination1.background_color)
            // setColor(combination1.color)
        }
    }

    useEffect(() => {
        changeCombination()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeCombination)
    })

    return (
        <div className={`${combinationNumber}`}>
            <div className={classNames(`navbar_${combinationNumber}`, "navbar")}>
                <div className="navbar_logo">Business</div>
                <div className="navbar_items" >
                    <div class="navbar_dropdown">
                        <p className="navbar_dropbtn">Why pinterest?</p>
                        <div className={classNames(`navbar_dropdown_content_${combinationNumber}`, "navbar_dropdown_content")}>
                            <p onClick={() => navigate("/how-pinterest-works")}>How pinterest works</p>
                            <p onClick={() => navigate("/getting-started")}>Getting started</p>
                            <p onClick={() => navigate("/pinterest-audience")}>The Pinterest audience</p>
                            <p onClick={() => navigate("/success-stories")}>Success story</p>
                        </div>
                    </div>
                    <div class="navbar_dropdown">
                        <p className="navbar_dropbtn">Create content</p>
                        <div className={classNames(`navbar_dropdown_content_${combinationNumber}`, "navbar_dropdown_content")}>
                            <p onClick={() => navigate("/creators")}>Pinterest for creators</p>
                            <p onClick={() => navigate("/how-to-make-pins")}>Making pins: Tips and Tricks</p>
                            <p onClick={() => navigate("/creative-best-practices")}>Best practices</p>
                            
                        </div>
                    </div>
                    <div class="navbar_dropdown">
                        <p className="navbar_dropbtn">Insights</p>
                        <div className={classNames(`navbar_dropdown_content_${combinationNumber}`, "navbar_dropdown_content")}>
                            <p onClick={() => navigate("/pinterest-predicts")}>Pinterest predicts</p>
                        </div>
                    </div>
                    <div class="navbar_dropdown">
                        <p className="navbar_dropbtn">Resources</p>
                        <div className={classNames(`navbar_dropdown_content_${combinationNumber}`, "navbar_dropdown_content")}>
                            <p onClick={() => navigate("/pinterest-business-partners")}>Pinterest Business Partners</p>
                            <p onClick={() => navigate("/agency-resources")}>Agency Resources</p>
                            <p onClick={() => navigate("/guides-and-education")}>Guides and Education</p>
                        </div>
                    </div>
                    <div className={classNames(`navbar_login_${combinationNumber}`, "navbar_login")} onClick={() => navigate("/login")}>
                        {/* style={{ color: color, border: `2px solid ${color}` }} */}
                        Log in
                    </div>
                    <div className={classNames(`navbar_signup_${combinationNumber}`, "navbar_signup")} onClick={() => navigate("/create")}>
                        {/* style={{ color: bgColor, backgroundColor: color }} */}
                        Sign up
                    </div>
                </div>
            </div>
            <div className="hero">
                <h1>It's different here</h1>
                <div>
                    <p>On Pinterest, people feel safe to explore new ideas and try new things. They’re looking</p>
                    <p>for inspiration—and they’re looking for you. To get started, you’ll need a Pinterest</p>
                    <p>business account. It’s free to sign up and you’ll get access to special content formats,</p>
                    <p>custom analytics and more.</p>
                </div>
                <div className="hero_button" onClick={() => navigate("/create")}>
                    Create account
                </div>
            </div>
            <div className="home_second_image">

            </div>
            <div className="slider">
                <div className="slider1">
                    <div className="slider1_left">
                        <h1>Upload your</h1>
                        <h1>products Unlock</h1>
                        <h1>results.</h1>
                        <div className="slider1_button">
                            Get started with catalogues
                        </div>
                    </div>
                    <div className="slider1_right"></div>
                </div>
                {/* <div className = "slider2">
                    <div className = "slider2_left">
                        <h1>People on Pinterest</h1>
                        <h1>Need your fresh ideas</h1>
                        <div className = "slider2_button">
                            Get started
                        </div>
                    </div>
                    <div className = "slider2_right"></div>
                </div>
                <div className = "slider3">
                    <div className = "slider3_left">
                        <h1>The 2022 trends that</h1>
                        <h1>your audience will</h1>
                        <h1>love</h1>
                        <div className = "slider3_button">
                            Explore the 2022 report
                        </div>
                    </div>
                    <div className = "slider3_right"></div>
                </div> */}

            </div>

            <div className="action">
                <h1>Actions speak louder than likes</h1>
                <div>
                    <p>Forget vanity metrics. The people on Pinterest actually want to try your ideas or shop in your</p>
                    <p>store. It’s a deeper, more meaningful kind of engagement than you’ll find on other platforms.</p>
                    <p>Get in front of the 433 million people using Pinterest every month and find your best audience</p>
                    <p>yet.<sup>1</sup></p>
                </div>
                <div className="action_button" onClick={() => navigate("/how-pinterest-works")}>
                    Learn the basics
                </div>
            </div>
            <div className="home_fourth_image">

            </div>
            <div className="goals">
                <h1>Your goals, your way</h1>
                <div>
                    <p>Build a community of people who share your passions and make money by doing what</p>
                    <p>you love. Content on Pinterest never expires, so you’ll keep on reaching new people</p>
                    <p>over time.</p>

                </div>
                <div className="goals_button" onClick={() => navigate("/creators")}>
                    Explore creator resources
                </div>
            </div>
            <div className="getstarted">
                <h1>Get started today</h1>
                <div className="getstarted_button" onClick={() => navigate("/create")}>
                    Create account
                </div>
            </div>
            <div className="footer">
                <div className="footer_left">
                    <h1>Pinterest</h1>
                    <select name="language" id="language">

                        <option value="English(India)">English(India)</option>
                        <option value="English(US)">English(US)</option>
                        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                        <option value="Bahasa Malaysia">Bahasa Malaysia</option>

                    </select>
                    <span>©️ 2022 Pinterest</span>
                </div>
                <div className="footer_right">
                    <div className="footer_right_column">
                        <h4>About</h4>
                        <ul>
                            <li>Our Pinterest Profile</li>
                            <li>Newsroom</li>
                            <li>Career</li>
                            <li>Brand guidelines</li>
                        </ul>
                    </div>
                    <div className="footer_right_column">
                        <h4>Resources</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>Business Community</li>
                            <li>For developers</li>
                            <li>For investors</li>
                        </ul>
                    </div>
                    <div className="footer_right_column">
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
    )
}

export default Home