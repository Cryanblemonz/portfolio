import { useState } from "react";
import { gsap } from "gsap";
import Language from "./Language";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useLayoutEffect } from "react";




const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1536,
        },
    },
});

let rescueRoadDescription = {
    header: "Rescue Road",
    text: "Tinder for animal rescue! Users can view pets available for adoption and choose to like or dislike them, or choose to upload their own pet in need of a home. If a user likes a pet, they are provided contact information to move forward with giving the pet their forever home. Equipped with filters to ensure potential adopters only see pets that fit their home. Pictures are ran through an image recognition software to ensure that only animals are uploaded to the site.",
    madeWith: ["javascript", "react", "MongoDB", "node"],
};

let gymGenieDescription = {
    header: "GymGenie",
    text: "An all-in-one fitness platform, in which users can track daily exercise / calories / water intake, build custom workout routines through an API connection to a database of exercises, and log their workouts to track their progress.",
    madeWith: ["javascript", "jquery", "MongoDB", "node"],
};

let snakeDescription = {
    header: "Snake",
    text: "Feeling nostalgic about your old Nokia 6110? Try this remastered snake game! It has all of the features of the classic version, plus scorekeeping and difficulty controls. If you ever feel like becoming enraged, give nightmare mode a try!",
    madeWith: ["javascript", "html", "css"],
};

let fitnessDescription = {
    header: "Webb Fitness",
    text: "A simple but slick business website for a local personal trainer. Made to showcase information about the trainer's fitness programs, encourage clients to get in touch, and funnel her client's questionaire answers to her email.",
    madeWith: ["javascript", "html", "css"],
};

function Projects() {
    const [project, setProject] = useState({});
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.checkPrefix("transform");
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".grid",
                start: "top center",
            },
        });
        tl1.from(".grid", {x:'-140vw', rotate: -720, duration: 3})
        });
        return () => ctx.revert(); 
      }, []);




    function unTransform() {
        gsap.to(".top-left", {
            x: 0,
            y: 0,
            height: "20vw",
            width: "20vw",
            duration: 0.3,
            borderRadius: "9999 0 0 0",
        });
        gsap.to(".top-right", {
            x: 0,
            y: 0,
            height: "20vw",
            width: "20vw",
            duration: 0.3,
            borderRadius: "0 9999 0 0",
        });
        gsap.to(".bottom-right", {
            x: 0,
            y: 0,
            height: "20vw",
            width: "20vw",
            duration: 0.3,
            borderRadius: "0 0 9999 0",
        });
        gsap.to(".bottom-left", {
            x: 0,
            y: 0,
            height: "20vw",
            width: "20vw",
            duration: 0.3,
            borderRadius: "0 0 0 9999 ",
        });
        gsap.to(".project-description", {
            fontSize: "0",
            opacity: 0,
            duration: 0.3,
        });
        gsap.to(".project-description-p", {
            fontSize: "0",
            opacity: 0,
            duration: 0.3,
        });
        gsap.to(".grid", {height: "41vw", y: 0, x: 0, duration: 0.3})

    }

    async function transformTL() {
        gsap.to(
            ".top-left",
            { borderRadius: "25 0 0 0", duration: 0.6 },
            "-=1"
        );
        gsap.to(".top-left", { height: "25vw", width: "25vw", duration: 0.3 });

        gsap.to(".top-right", {
            y: "20vw",
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        gsap.to(".bottom-right", {
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        gsap.to(".bottom-left", {
            x: "20vw",
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        setProject(rescueRoadDescription);
        gsap.to(".project-description", {
            fontSize: "1.3rem",
            opacity: 1,
            duration: 0.3,
        });
        gsap.to(".project-description-p", {
            fontSize: "1.3rem",
            opacity: 1,
            duration: 0.3,
        });
        gsap.to(".grid", {height: "31vw", duration: 0.3})
    }

    function transformTR() {
        gsap.to(".top-left", {
            y: "20vw",
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        gsap.to(".top-right", { height: "25vw", width: "50vw", duration: 0.3 });
        gsap.to(
            ".top-right",
            { borderRadius: "0 25 0 0", duration: 0.3 },
            "-=2"
        );
        gsap.to(".bottom-right", {
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        gsap.to(".bottom-left", { height: "5vw", width: "5vw", duration: 0.3 });
        setProject(gymGenieDescription);
        gsap.to(".project-description", {
            fontSize: "1.3rem",
            opacity: 1,
            duration: 0.3,
        });
        gsap.to(".project-description-p", {
            fontSize: "1.3rem",
            opacity: 1,
            duration: 0.3,
        });
        gsap.to(".grid", {height: "31vw", duration: 0.3})

    }

    function transformBR() {
        gsap.to(".top-left", {
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        gsap.to(".top-right", {
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        gsap.to(".bottom-right", {
            height: "25vw",
            width: "50vw",
            duration: 0.3,
        });
        gsap.to(
            ".bottom-right",
            { borderRadius: "0 0 25 0", duration: 0.3 },
            "-=2"
        );
        gsap.to(".bottom-left", {
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        setProject(fitnessDescription);
        gsap.to(".project-description", {
            fontSize: "1.3rem",
            opacity: 1,
            duration: 0.3,
        });
        gsap.to(".project-description-p", {
            fontSize: "1.3rem",
            opacity: 1,
            duration: 0.3,
        });
        gsap.to(".grid", {height: "31vw", duration: 0.3})

    }

    function transformBL() {
        gsap.to(".top-left", {
            x: "40vw",
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        gsap.to(".top-right", { height: "5vw", width: "5vw", duration: 0.3 });
        gsap.to(".bottom-right", {
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        gsap.to(".bottom-left", {   
            height: "25vw",
            width: "45vw",
            duration: 0.3,
        });
        gsap.to(
            ".bottom-left",
            { borderRadius: "0 0 0 25", duration: 0.7 },
            "-=2"
        );
        gsap.to(".bottom-right", {
            height: "5vw",
            width: "5vw",
            duration: 0.3,
        });
        setProject(snakeDescription);
        gsap.to(".project-description", {
            fontSize: "1.3rem",
            opacity: 1,
            duration: 0.3,
        });
        gsap.to(".project-description-p", {
            fontSize: "1.3rem",
            opacity: 1,
            duration: 0.3,
        });
        gsap.to(".grid", {height: "31vw", duration: 0.3})

    }
    return (
        <div className="projects">
            <h1>My Work</h1>

            <div className="grid">
                <div
                    className="project top-left"
                    onMouseEnter={transformTL}
                    onMouseLeave={unTransform}></div>
                <div
                    className="project top-right"
                    onMouseEnter={transformTR}
                    onMouseLeave={unTransform}></div>
                <div
                    className="project bottom-left"
                    onMouseEnter={transformBL}
                    onMouseLeave={unTransform}></div>
                <div
                    className="project bottom-right"
                    onMouseEnter={transformBR}
                    onMouseLeave={unTransform}></div>
            </div>
            <div className="project-description">
                <h2>{project.header}</h2>
                <p className="project-description-p">{project.text}</p>
                <div className="made-with-icons">
                    <Grid container columnGap={2}>
                        {project.madeWith &&
                            project.madeWith.map((item, index) => (
                                <Grid item>
                                    <img
                                        src={`public/images/${item}.png`}
                                        alt={item}
                                        style={{ height: "50px" }}
                                    />
                                </Grid>
                            ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Projects;
