import Grid from "@mui/material/Grid";
import { gsap } from "gsap";
import { TypeAnimation } from "react-type-animation";
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

function animate() {

    let tl = gsap.timeline();
    tl.from(".headshot", { x: 900, opacity: 0, duration: 1.5 });
    tl.to(
        ".header-h1s",
        {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        },
        "-=.4"
    );
    tl.to(
        ".header-para",
        {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        },
        "-=1.3"
    );
    tl.to(
        ".headshot",
        { boxShadow: "5px 5px 5px #6464ff", x: -10, y: -10, duration: 0.9 },
        "-=.8"
    );
}

function Header() {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div className="header-div">
            <div className="headshot-div" onLoad={animate}>
                {!isSmallScreen ? (
                    <Grid container>
                        <Grid item sm={5} style={{ margin: "25px" }}>
                            <div className="headshot-headings">
                                <h1 className="header-h1s">
                                    Hi, I'm Bryan.&nbsp;
                                </h1>
                                <h1 className="header-h1s">
                                    <TypeAnimation
                                        sequence={[
                                            2000,
                                            " I'm a Web Developer.",
                                            2000,
                                            " I'm a Problem-Solver.",
                                            2000,
                                            " I'm a Cool Guy.",
                                        ]}
                                        wrapper="span"
                                        speed={1}
                                        repeat={Infinity}
                                    />
                                </h1>
                            </div>
                        </Grid>
                        <Grid item sm={5}>
                            <img
                                className="headshot"
                                src="\images\headshot.png"></img>
                        </Grid>
                    </Grid>
                ) : (
                    <div>
                            <img
                                className="headshot"
                                src="public\images\headshot.png"></img>
                                                                <h1 className="header-h1s">
                                    Hi, I'm Bryan.&nbsp;
                                </h1>
                                <h1 className="header-h1s">
                                    <TypeAnimation
                                        sequence={[
                                            2000,
                                            " I'm a Web Developer.",
                                            2000,
                                            " I'm a Problem-Solver.",
                                            2000,
                                            " I'm a Cool Guy.",
                                        ]}
                                        wrapper="span"
                                        speed={1}
                                        repeat={Infinity}
                                    />
                                </h1>
                    </div>

                )}
                <div className="header-para">
                    <p>
                        <strong className="full-stack">Full-Stack</strong> web
                        developer bringing a mix of technical skills and a
                        business background to add maximum value to your project
                        or organization.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;
