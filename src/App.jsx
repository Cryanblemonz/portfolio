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
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    
    if(isLargeScreen){
      useLayoutEffect(() => {
        const sections = gsap.utils.toArray('.section');
        gsap.to(sections, {
            yPercent: -100 * (sections.length - 1),
            ease: "none",
            duration: 0.3,
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                snap: {
                  snapTo: 1 / (sections.length - 1),
                },
                end: () => "+=" + document.querySelector(".container").offsetHeight
            }
        });

        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
    }, []);
    }

  
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
