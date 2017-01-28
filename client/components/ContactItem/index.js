import React, {PropTypes} from 'react'
import styles from './styles.css'

const ContactItem = ({
    title,
    subtitle
}) => {
    let icon
    switch (title) {
        case 'PHONE':
            icon = (
                <svg id='mobile' viewBox='0 0 32 32' width='100%' height='100%'>
                    <path
                        d='M23 0h-14c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 1.5h8v1h-8v-1zM16 30c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM24 24h-16v-20h16v20z'
                        fill='#9CBC34'
                    />
                </svg>
            )
            break
        case 'EMAIL':
            icon = (
                <svg id='mail' viewBox='0 0 32 32' width='100%' height='100%'>
                    <path
                        d='M26.667 0h-21.333c-2.934 0-5.334 2.4-5.334 5.334v21.332c0 2.936 2.4 5.334 5.334 5.334h21.333c2.934 0 5.333-2.398 5.333-5.334v-21.332c0-2.934-2.399-5.334-5.333-5.334zM26.667 4c0.25 0 0.486 0.073 0.688 0.198l-11.355 9.388-11.355-9.387c0.202-0.125 0.439-0.198 0.689-0.198h21.333zM5.334 28c-0.060 0-0.119-0.005-0.178-0.013l7.051-9.78-0.914-0.914-7.293 7.293v-19.098l12 14.512 12-14.512v19.098l-7.293-7.293-0.914 0.914 7.051 9.78c-0.058 0.008-0.117 0.013-0.177 0.013h-21.333z'
                        fill='#9CBC34'
                    />
                </svg>
            )
            break
    }
    return (
        <div className={styles.item}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.contentwrap}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <span className={styles.subtitle}>
                    {subtitle}
                </span>
            </div>
        </div>
    )
}

ContactItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default ContactItem
