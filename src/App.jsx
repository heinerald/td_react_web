import { useState } from "react";
import "./styles/custom.scss";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import NavBar from "./layouts/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
