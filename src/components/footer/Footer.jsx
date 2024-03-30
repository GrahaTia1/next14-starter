import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>lamadev</div>
            <div className={styles.text}>
                Tokaku creative Thoughts Agency @All rights reserved.
            </div>
        </div>
    )
}

export default Footer