import { Route, Routes } from "react-router-dom"
import About from "../components/About"
import Projects from "../components/Projects"
import Achievments from "../components/Achievments"
import Medals from "../components/Medals"
import Banner from "../components/Banner"


const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievments />} />
        <Route path="/medals" element={<Medals />} />
    </Routes>
  )
}

export default Router
