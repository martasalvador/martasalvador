import { Routes, Route } from "react-router-dom"
import AboutMePage from "../pages/AboutMe/AboutMePage"
import HomePage from "../pages/Home/HomePage"

const WebRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMePage />} />
            {/* <Route path="/designer" element={<UXUIPage />} />
            <Route path="/development" element={<DevelopmentPage />} /> */}
        </Routes>
    )
}

export default WebRoutes