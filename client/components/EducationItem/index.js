import styles from './styles.css'
import React, {PropTypes} from 'react'

class EducationItem extends React.Component {

    static propTypes = {
        duration: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    };

    render() {
        let {
            duration,
            desc
        } = this.props

        return (
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <span
                        className={styles.duration}
                        dangerouslySetInnerHTML={{__html: duration}}
                    />
                </div>
                <div className={styles.contentRight}>
                    <p
                        className={styles.desc}
                        dangerouslySetInnerHTML={{__html: desc}}
                    />
                </div>
            </div>
        )
    }
}
export default EducationItem
