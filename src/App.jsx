import { useState } from "react";
import "./styles/custom.scss";
import { Route, Routes } from "react-router-dom";

// views
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Layout from "./layouts/layout";
import Internet from "./views/internet";
import Television from "./views/television";
import Faq from "./views/faq";
import Jobs from "./views/jobs";
import Empresas from "./views/empresas";
import Legal from "./views/legal";
import Block from "./views/block";
import Support from "./views/support";
import Error from "./views/error";

import ReactGA from "react-ga4";

//function
function App() {
  const [count, setCount] = useState(0);

  const TRAKING_ID ='G-9LQ89Y7X3D'
  ReactGA.initialize(TRAKING_ID);
  // Multiple products (previously known as trackers)
  // Send pageview with a custom path
  // Send a custom event

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="internet" element={<Internet />} />
          <Route path="television" element={<Television />} />
          <Route path="faq" element={<Faq />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="empresas" element={<Empresas />} />
          <Route path="legal" element={<Legal />} />
          <Route path="block" element={<Block />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

