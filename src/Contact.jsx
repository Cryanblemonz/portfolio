import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";

const rootStyles = {
    border: "1px solid #001d3d",
    color: "white",
};

function Contact() {
        



    useEffect(() => {
        gsap.utils.checkPrefix("transform");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".want-to",
                start: "top bottom",
            },
        });
        tl.to(".want-to", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        });
        tl.to(".hire", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        });
        tl.to(".help", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        });
        tl.to(".consult", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        });
        tl.to(".chess", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        });
        tl.to(".chess-img", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        }, "-=.5");
        tl.to(".inputs", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        });
    }, []);

    function showFab(){
        gsap.to(".fab-button", {
                x: 0,
                rotate: -1080,
                duration: 1,
                ease: "power2.out"
        })
    }

    return (
        <div className="contact">
            <h1>Lets talk</h1>
            <div className="want-to-box">
                <h3 className="want-to contact-element">Want to... </h3>
                <ul>
                    <li className="hire contact-element">Hire me?</li>
                    <li className="help contact-element">
                        Get help with your project?
                    </li>
                    <li className="consult contact-element">Consult?</li>
                    <li className="chess contact-element">Play chess?</li>
                    <img
                        className="chess-img contact-element"
                        src="src\images\chess.gif"></img>
                </ul>
            </div>
            <form className="contact-form">
                <div className="inputs contact-element">
                <h3>Send me a message!</h3>
                <TextField
                    variant="outlined"
                    label="Name"
                    onClick={showFab}
                    fullWidth
                    size="medium"
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}></TextField>
                <TextField
                    type="text"
                    variant="outlined"
                    label="Your Email"
                    fullWidth
                    margin="dense"
                    size="medium"
                    sx={{ ...rootStyles }}
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}></TextField>
                <TextField
                    type="text"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows="5"
                    margin="dense"
                    size="medium"
                    className="textfield-input"
                    InputLabelProps={{
                        sx: {
                            color: "white",
                        },
                    }}></TextField>
                </div>
                
                    <Fab variant="extended" className="fab-button">
                        <SendIcon /> &nbsp;Send
                    </Fab>
            </form>
        </div>
    );
}

export default Contact;
