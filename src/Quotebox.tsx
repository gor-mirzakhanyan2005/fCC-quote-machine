import styles from "./Quotebox.module.scss";
import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

interface Props{
    quote: String;
    author: String;
    function: MouseEventHandler<HTMLButtonElement>;
}

const QuoteBox : React.FC<Props> = (props) => {
    return (
        <div className={styles.quoteBoxBackground}>
            <div id="quote-box" className={styles.quoteBox}>
                <h2 id="text" className={styles.quote}>
                    "{props.quote}"
                </h2>
                <h2 id="author" className={styles.author}>{props.author}</h2>
                <button id="new-quote" className={styles.quoteButton} onClick={props.function}>Give me a quote</button>
                <a className={styles.faTwitter} id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${props.quote}`}><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
        </div>
    )
}

export default QuoteBox;