import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";


function App() {
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route exact path="" element={<Home/>}> </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/write" element={<Write/>}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/post/:postid" element={<Single/>}></Route>
        </Routes>
      
    </Router>
  );
}

export default App;
