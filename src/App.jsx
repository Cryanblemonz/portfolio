import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import MobileProjects from "./MobileProjects";
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
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <div>
            <Header />
            <Technologies />
            {isSmallScreen ? <MobileProjects /> : <Projects />}
            <Contact />
        </div>
    );
}

export default App;
