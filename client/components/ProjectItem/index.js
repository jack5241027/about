import styles from './styles.css'
import React, {PropTypes} from 'react'

class ProjectItem extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    };

    render() {
        let {
            title,
            desc
        } = this.props

        return (
            <div className={styles.content}>
                <h3
                    dangerouslySetInnerHTML={{__html: title}}
                />
                <p
                    className={styles.desc}
                    dangerouslySetInnerHTML={{__html: desc}}
                />
            </div>
        )
    }
}
export default ProjectItem
