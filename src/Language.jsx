import Grid from "@mui/material/Grid";

function Language(props){
        return(
                <div className={props.className}>
                        <img src={props.img} className="language-img"></img>
                        <h2>{props.text}</h2>
                </div>
        )
}

export default Language;