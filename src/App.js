// import Switcher from "./Switcher";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Menu from "./Pages/Menu/Menu";
function App() {
  return (
    /* <div className="App bg-white dark:bg-black">
      <p className="text-black dark:text-white">Hello world</p>
      <Switcher />
    </div> */
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
