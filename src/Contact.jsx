import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import ReplayIcon from "@mui/icons-material/Replay";
import { Block } from "@mui/icons-material";

const rootStyles = {
    border: "1px solid #001d3d",
    color: "white",
};

function Contact() {
    const [contactName, setContactName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);

    async function send() {
        try {
            const response = await axios.post("/send", {
                contactName,
                email,
                message,
            });
            setIsSent(true);
        } catch (error) {
            console.error("Error sending message", error);
        }
    }

    function transformForm() {
        gsap.to(".inputs", {
            opacity: 0,
            y: -100,
            "clip-path": "polygon(0 100%, 100% 100%, 0% 100%, 0% 100%)",
            duration: 1,
        });
    }
    function openSentMessage() {
        gsap.to(".message-sent-div", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            x: 0,
            duration: 1.2,
        });
    }

    useEffect(() => {
        if (isSent) {
            openSentMessage();
        }
    }, [isSent]);

    useEffect(() => {
        gsap.utils.checkPrefix("transform");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".want-to",
                start: "top center",
            },
        });
        tl.to(".want-to", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            x: 0,
            duration: 1.2,
        });
        tl.to(".hire", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            x: 0,
            duration: 1.2,
        });
        tl.to(".help", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            x: 0,
            duration: 1.2,
        });
        tl.to(".consult", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            x: 0,
            duration: 1.2,
        });
        tl.to(".chess", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            x: 0,
            duration: 1.2,
        });
        tl.to(
            ".chess-img",
            {
                "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                opacity: 1,
                x: 0,
                duration: 1.2,
            },
            "-=1.2"
        );
        tl.to(".contact-form", {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            opacity: 1,
            y: 0,
            duration: 1.2,
        });
    }, []);



    return (
        <div className="contact">
            <h1>Lets talk</h1>
            <Grid container spacing={0}>
                <Grid item md={6} xs={12} className="want-to-grid">
                    <div className="want-to-box">
                        <h3 className="want-to contact-element">Want to... </h3>
                            <li className="hire contact-element">Hire me?</li>
                            <li className="help contact-element">
                                Get help with your project?
                            </li>
                            <li className="consult contact-element">
                                Consult?
                            </li>
                            <Grid container spacing={1}>
                                <Grid item xs={8} sm={5} md={5}>
                                    <li className="chess contact-element">
                                        Play chess?
                                    </li>
                                </Grid>
                                <Grid item xs={2}>
                                    <img
                                        className="chess-img contact-element"
                                        src="\images\chess.gif"></img>
                                </Grid>
                            </Grid>
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    {!isSent ? (
                        <form
                            className="contact-form"
                            onSubmit={(event) => {
                                event.preventDefault();
                                transformForm();
                                send();
                            }}>
                            <div className="inputs">
                                <h3>Send me a message!</h3>
                                <TextField
                                    variant="outlined"
                                    label="Name"
                                    fullWidth
                                    size="medium"
                                    onChange={(event) => {
                                        setContactName(event.target.value);
                                        console.log(contactName);
                                    }}
                                    InputLabelProps={{
                                        sx: {
                                            color: "white",
                                        },
                                    }}></TextField>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    label="Email"
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                        console.log(email);
                                    }}
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
                                    onChange={(event) => {
                                        setMessage(event.target.value);
                                        console.log(message);
                                    }}
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

                            <Fab
                                variant="extended"
                                className="fab-button"
                                type="submit">
                                <SendIcon /> &nbsp;Send
                            </Fab>
                        </form>
                    ) : (
                        <div className="message-sent-div">
                            <h3>Message Sent! </h3>
                        </div>
                    )}
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;
