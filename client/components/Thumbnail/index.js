import styles from './styles.css'
import React from 'react'
import Path from 'path'

class Thumbnail extends React.Component {
    render() {
        return (
            <figure className={styles.thumbnail}>
                <img src={`.${Path.join(__dirname, 'assets', 'images')}/jack.png`} className={styles.pic} />
                <h2 className={styles.name}>Jack Chan</h2>
                <p className={styles.intro}>
                    Front-End Web Developer.
                </p>
            </figure>
        )
    }
}
export default Thumbnail
