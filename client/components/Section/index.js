import styles from './styles.css'
import React, {PropTypes} from 'react'

class Section extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.object.isRequired
    };

    render() {
        let {title, children} = this.props
        return (
            <section className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.contentwrap}>
                    {children}
                </div>
            </section>
        )
    }
}
export default Section
