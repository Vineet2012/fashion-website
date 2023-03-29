import { ThemeProvider } from "@mui/system";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterTopBlock from "./Footer/FooterTopBlock";
import HomePage from "./Homepage/homePage";
import MensFashionImage from "./NewArrivalPartyWear/MensFashionImage";
import SignUpForFree from "./NewArrivalPartyWear/SpecialOffer/SignUpForFree";
import NextPage1 from "./PAGE1/NextPage1/nextPage1";

// Root element for the app
// Router docs at: https://reactrouter.com/docs/en/v6/getting-started/tutorial

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nextPage1" element={<NextPage1 />} />
        <Route path="/MensFashionImage" element={<MensFashionImage />} />
        <Route path="/SignUpForFree" element={<SignUpForFree />} />
      </Routes>
      <FooterTopBlock />
    </Router>
  );
}

export default App;
