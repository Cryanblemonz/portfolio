import Grid from "@mui/material/Grid";
import { gsap } from "gsap";
import Language from './Language';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Technologies() {

        useEffect(() => {
                gsap.utils.checkPrefix("transform");
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".technologies",
                        start: "center bottom", 

                    }
                });
                tl.to(".technologies", { opacity: 1, duration: 2 }) 
            }, []);



    return (
        <div className="technologies">
            <h1>My Tools</h1>
            <div className="languages">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Language img="src\images\javascript.png" text="JavaScript" />
                    </Grid>
                    <Grid item xs={4}>
                        <Language img="src\images\react.png" text="React.JS" />
                    </Grid>
                    <Grid item xs={4}>
                        <Language img="src\images\node.png" text="Node.JS / Express" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop: "20px"}}>
                    <Grid item xs={3}>
                        <Language img="src\images\MongoDB.png" text="MongoDB" />
                    </Grid>
                    <Grid item xs={3}>
                        <Language img="src\images\jquery.png" text="jQuery" />
                    </Grid>
                    <Grid item xs={3}>
                        <Language img="src\images\html.png" text="HTML" />
                    </Grid>
                    <Grid item xs={3}>
                        <Language img="src\images\css.png" text="CSS" />
                    </Grid>




                </Grid>
                <Grid container spacing={2} style={{marginTop: "20px"}}>

                    <Grid item xs={3}>
                        <Language img="src\images\sqlLite.png" text="SQLite" />
                    </Grid>
                    <Grid item xs={3}>
                        <Language img="src\images\MUI.png" text="Material UI" />
                    </Grid>
                    <Grid item xs={3}>
                        <Language img="src\images\gsap.png" text="GSAP" />
                    </Grid>
                    <Grid item xs={3}>
                        <Language img="src\images\Bootstrap.png" text="Bootstrap" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Technologies;
