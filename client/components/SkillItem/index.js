import React, {PropTypes} from 'react'
import styles from './styles.css'

const SkillItem = ({
    title
}) => {
    let stylePath1 = {
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeDasharray: 100,
        opacity: 1,
        strokeDashoffset: 0
    }

    let stylePath2 = {
        opacity: 1
    }

    return (
        <div className={styles.item}>
            <span className={styles.tick}>
                <svg className='list--tick_ok' width='23' height='22' viewBox='1677.791 809.128 23 22' preserveAspectRatio='xMidYMid meet'>
                    <path
                        d='M1697.73,818.083c0.085,0.514,0.13,1.042,0.13,1.581c0,5.266-4.269,9.535-9.535,9.535c-5.266,0-9.534-4.269-9.534-9.535c0-5.266,4.269-9.535,9.534-9.535c1.672,0,3.244,0.431,4.609,1.187'
                        id='path'
                        fill='none'
                        stroke='#986a70'
                        strokeMiterlimit='10'
                        strokeDashoffset='10'
                     />
                    <path
                        d='M1700.08,809.291c-5.812,4.399-11.387,10.284-11.387,10.284l-4.018-3.611l-1.678,1.709c1.65,1.552,5.477,5.651,6.77,7.187c3.643-6.085,7.429-10.622,11.023-14.771L1700.08,809.291z'
                        id='tick'
                        fill='#9CBC34'
                        transform='matrix(1,0,0,1,0,0)'
                    />
                </svg>
            </span>
            <span>
                {title}
            </span>
        </div>
    )
}

SkillItem.propTypes = {
    title: PropTypes.string.isRequired
}

export default SkillItem
