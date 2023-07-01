import { useState, useLayoutEffect } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Technologies from "./Technologies";
import Projects from "./Projects";
import MediumProjects from "./MediumProjects";
import MobileProjects from "./MobileProjects";
import Contact from "./Contact";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

function App() {
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    
  
  
    return (
        <div className="container">
            <section className="section">
                <Header />
            </section>
            <section className="section">
                <Technologies />
            </section>
            <section className="section">
                {isSmallScreen ? (
                    <MobileProjects />
                ) : isMediumScreen ? (
                    <MediumProjects />
                ) : (
                    <Projects />
                )}
            </section>
            <section className="section">
                <Contact />
            </section>
        </div>
    );
}

export default App;
