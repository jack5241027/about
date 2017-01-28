import styles from './styles.css'
import React, {PropTypes} from 'react'

class WorksItem extends React.Component {

    static propTypes = {
        duration: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    };

    render() {
        let {
            duration,
            title,
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
                <div className={styles.contentMiddle}>
                    <div className={styles.circle} />
                    <div className={styles.diverder} />
                </div>
                <div className={styles.contentRight}>
                    <h3>{title}</h3>
                    <p
                        className={styles.desc}
                        dangerouslySetInnerHTML={{__html: desc}}
                    />
                </div>
            </div>
        )
    }
}
export default WorksItem
