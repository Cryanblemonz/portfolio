import Grid from "@mui/material/Grid";
import { gsap } from "gsap";
import Language from "./Language";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Technologies() {
    useEffect(() => {
        gsap.utils.checkPrefix("transform");
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".javascript",
                start: "top bottom",
                delay: 0.2,
            },
        });
        tl1.to(".javascript", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.5,
        });
        tl1.to(
            ".react",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 1.2,
            },
            "-=1"
        );
        tl1.to(
            ".node",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 1.2,
            },
            "-=1"
        );
    }, []);
    useEffect(() => {
        gsap.utils.checkPrefix("transform");
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".mongo",
                start: "top bottom",
            },
        });
        tl2.to(".mongo", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.5,
        });
        tl2.to(
            ".jquery",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 1.2,
            },
            "-=1"
        );
        tl2.to(
            ".html",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 1.2,
            },
            "-=1"
        );
        tl2.to(
                ".css",
                {
                    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                },
                "-=1"
            );
    }, []);
    useEffect(() => {
        gsap.utils.checkPrefix("transform");
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sqlite",
                start: "top bottom",
            },
        });
        tl3.to(".sqlite", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: .5,
        });
        tl3.to(
            ".mui",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 1.2,
            },
            "-=1"
        );
        tl3.to(
            ".gsap",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 1.2,
            },
            "-=1"
        );
        tl3.to(
                ".bootstrap",
                {
                    "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                },
                "-=1"
            );
    }, []);

    return (
        <div className="technologies">
            <h1>My Tools</h1>
            <div className="languages">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Language
                            img="src\images\javascript.png"
                            text="JavaScript"
                            className="language javascript"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Language
                            img="src\images\react.png"
                            text="React.JS"
                            className="language react"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Language
                            img="src\images\node.png"
                            text="Node.JS / Express"
                            className="language node"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item xs={3}>
                        <Language
                            img="src\images\MongoDB.png"
                            text="MongoDB"
                            className="language mongo"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="src\images\postgresql.png"
                            text="PostgreSQL"
                            className="language sqlite"
                        />
                                            </Grid>

                    <Grid item xs={3}>
                        <Language
                            img="src\images\jquery.png"
                            text="jQuery"
                            className="language jquery"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="src\images\gsap.png"
                            text="GSAP"
                            className="language gsap"
                        />
                    </Grid> 
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item xs={3}>
                        <Language
                            img="src\images\MUI.png"
                            text="Material UI"
                            className="language mui"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="src\images\html.png"
                            text="HTML"
                            className="language html"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="src\images\css.png"
                            text="CSS"
                            className="language css"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="src\images\Bootstrap.png"
                            text="Bootstrap"
                            className="language bootstrap"
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Technologies;
