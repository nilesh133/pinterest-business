import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"

import Home from "./components/Home/Home"
import HowPinterestWorks from "./components/HowPinterestWorks/HowPinterestWorks";
import GettingStarted from "./components/GettingStarted/GettingStarted";
import PinterestAudience from "./components/PinterestAudience/PinterestAudience";
import SuccessStories from "./components/SuccessStories/SuccessStories";
import PinterestCreators from "./components/PinterestCreators/PinterestCreators";
import HowToMakePins from "./components/HowToMakePins/HowToMakePins";
import BestPractices from "./components/BestPractices/BestPractices";
import PinterestPredicts from "./components/PinterestPredicts/PinterestPredicts";
import BusinessPartners from "./components/BusinessPartners/BusinessPartners";
import AgencyResources from "./components/AgencyResources/AgencyResources";
import GuidesEducation from "./components/GuidesEducation/GuidesEducation";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/create" exact element={<Signup />} />
        <Route path="/how-pinterest-works" exact element={<HowPinterestWorks />} />
        <Route path="/getting-started" exact element={<GettingStarted />} />
        <Route path="/pinterest-audience" exact element={<PinterestAudience />} />
        <Route path="/success-stories" exact element={<SuccessStories />} />
        <Route path="/creators" exact element={<PinterestCreators />} />
        <Route path="/how-to-make-pins" exact element={<HowToMakePins />} />
        <Route path="/creative-best-practices" exact element={<BestPractices />} />
        <Route path="/pinterest-predicts" exact element={<PinterestPredicts />} />
        <Route path="/pinterest-business-partners" exact element={<BusinessPartners />} />
        <Route path="/agency-resources" exact element={<AgencyResources />} />
        <Route path="/guides-and-education" exact element={<GuidesEducation />} />
      </Routes>
    </Router>
  );
}

export default App;
