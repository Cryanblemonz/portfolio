import Grid from "@mui/material/Grid";
import Language from "./Language";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Technologies() {
    useEffect(() => {
        gsap.utils.checkPrefix("transform");
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".technologies",
                start: "top center",
            },
        });
        tl1.to(".technologies", {
            x: 0,
            opacity: 1,
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 1.3,
            ease: "power2.out"
        });

        tl1.to(".javascript", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.4,
        });
        tl1.to(
            ".react",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            },
            "-=0.8"
        );
        tl1.to(
            ".node",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            },
            "-=0.8"
        );
        tl1.to(
            ".mongo",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            },
            "-=0.8"
        );
        tl1.to(
            ".postgres",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            },
            "-=0.8"
        );
        tl1.to(
            ".jquery",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            },
            "-=0.8"
        );
        tl1.to(
            ".gsap",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            },
            "-=0.8"
        );
        tl1.to(
            ".mui",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            },
            "-=0.8"
        );
        tl1.to(
            ".html",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            },
            "-=0.8"
        );
        tl1.to(
            ".css",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            },
            "-=0.8"
        );
        tl1.to(
            ".bootstrap",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
            },
            "-=0.8"
        );
    }, []);

    return (
        <div className="technologies">
            <h1>My Tools</h1>
            <div className="languages">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Language
                            img="public\images\javascript.png"
                            text="JavaScript"
                            className="language javascript"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Language
                            img="public\images\react.png"
                            text="React.JS"
                            className="language react"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Language
                            img="public\images\node.png"
                            text="Node.JS / Express"
                            className="language node"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\MongoDB.png"
                            text="MongoDB"
                            className="language mongo"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\postgresql.png"
                            text="PostgreSQL"
                            className="language postgres"
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <Language
                            img="public\images\jquery.png"
                            text="jQuery"
                            className="language jquery"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\gsap.png"
                            text="GSAP"
                            className="language gsap"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\MUI.png"
                            text="Material UI"
                            className="language mui"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\html.png"
                            text="HTML"
                            className="language html"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\css.png"
                            text="CSS"
                            className="language css"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Language
                            img="public\images\Bootstrap.png"
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
