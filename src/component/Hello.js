import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
    return (
        <>
            <h1 style={
                {
                    color: "red",
                    borderTop: '10px solid',
                    borderRight : '50px solid',
                    borderLeft : '50px solid',
                    borderBottom : '10px solid',
                    marginBottom : '50px',
                    opacity: 1,
                    backgroundColor: 'black',
                }
            }> Hello !
            </h1>
            <div className={styles.box}>hello</div>
        </>
    );
}