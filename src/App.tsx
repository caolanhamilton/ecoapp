import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WhatWeDo from "./pages/WhatWeDo";
import WhatWeThink from "./pages/WhatWeThink";
import WhoWeAre from "./pages/WhoWeAre";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/whatwedo" element="<WhatWeDo />"></Route>
          <Route path="/whatwethink" element="<WhatWeThink />"></Route>
          <Route path="/whoweare" element="<WhoWeAre />"></Route>
        </Route>
      </Routes>
    </Router>
  );
}
