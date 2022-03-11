import styles from './styles.module.css'

const Footer = () => {
    return(
        <div className={styles.container}>
            <h1>New Items</h1>
            <div className={styles.footerItems}>
                <p>NEW RELEASE</p>
                <p>MOVIES</p>
                <p>TV SERIES</p>
                <p>CARTOONS</p>
            </div>
        </div>
    )
}

export default Footer