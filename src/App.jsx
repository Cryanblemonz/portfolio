import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Technologies from "./Technologies";
import Projects from "./Projects";
import MediumProjects from "./MediumProjects";
import MobileProjects from "./MobileProjects";
import Contact from "./Contact";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";

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
        <div>
            <Header />
            <Technologies />
            {isSmallScreen ?  <MobileProjects /> : isMediumScreen ? <MediumProjects /> : <Projects />}
            <Contact />
        </div>
    );
}

export default App;
