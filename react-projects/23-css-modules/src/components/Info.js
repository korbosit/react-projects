import "./Info.css";
import styles from "./Info.module.css";

console.log(styles);

function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from the Info component</h1>
            <h2>Heading in the info component</h2>
            <button className={styles.myOtherButton}>
                Click me in the Info component
            </button>
        </div>
    );
}

export default Info;
