import React from 'react'
import styles from './styles.css'
import Thumbnail from '../../../components/Thumbnail/'
import Footer from '../../../components/Footer/'
import ContactItem from '../../../components/ContactItem/'
import SkillItem from '../../../components/SkillItem/'
import WorksItem from '../../../components/WorksItem/'
import EducationItem from '../../../components/EducationItem/'
import ProjectItem from '../../../components/ProjectItem/'
import Sectoin from '../../../components/Section'

let projects = [
    {
        title: `<a target='_blank' href='http://52.198.240.184:8080/'>Personal Calendar</a>`,
        desc: `
            A personal schedule management system.
            <br />
            ✔ FrontEnd: ReactJS + Redux<br />
            ✔ UI Framework: Bootstrap<br />
            ✔ Tool: Webpack
        `
    },
    {
        title: `<a target='_blank' href='http://jack5241027.github.io/lunchChoser/'>Lunch Chooser</a>`,
        desc: `
            This project could let user to add favorite restaurant's food, and he could decide what he want to eat by playing the slot machine.
            <br />
            ✔ FrontEnd: AngularJS<br />
            ✔ UI Framework: Semantic UI<br />
            ✔ Tool: Gulp + Browserfiy
        `
    }
]

let eduHistory = [
    {
        duration: '2011<em>-</em>2013',
        desc: `
            Master<br /> - Automatic Control Engineering-Feng Chia University.
        `
    },
    {
        duration: '2007<em>-</em>2011',
        desc: `
            Bachelor<br /> - Automatic Control Engineering-Feng Chia University.
        `
    }
]

let workHistory = [
    {
        duration: '2016/08<em>-</em>NOW',
        title: 'EZTABLE',
        desc: `
            ● Code HTML-CSS layout to produce RWD web site.<br />
            ● Produced Email-DirectMarketing template.<br />
            ● Integrated social platform’s share APIs, i.e. Facebook, Line.<br />
            ● Collaborated with Backend Developers for the integration of APIs.
        `
    },
    {
        duration: '2015/04<em>-</em>2016/07',
        title: '春樹科技',
        desc: `
            ● Code PSD into HTML-CSS layout to produce RWD web site.<br />
            ● Worked as a main developer and build several front-end of projects.<br />
            ● Produced multiple functional module with JavaScript to make development more smoothly.<br />
            ● Collaborated with Backend Developers for the integration of APIs.<br />
            ● Write the MVC controller to communicate to back end.<br />
            ● Integrated social platform’s authentication and APIs, i.e. Facebook.<br />
            ● Introduction and setup new web technical  to engineers team, such as AngularJS and ReactJS.
        `
    }
]

class Index extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <main className={styles.index}>
                    <div className={styles.col}>
                        <Thumbnail />
                        <Sectoin title='CONTACT'>
                            <ContactItem
                                title='EMAIL'
                                subtitle='jack5241027@gmail.com'
                            />
                            <ContactItem
                                title='PHONE'
                                subtitle='0972351738'
                            />
                        </Sectoin>
                        <Sectoin title='SKILLS'>
                            <p className={styles.divider}>Client-Side</p>
                            <SkillItem title='JavaScript (Es6)' />
                            <SkillItem title='HTML5' />
                            <SkillItem title='CSS3 + Sass' />

                            <p className={styles.divider}>Lib & Framework</p>
                            <SkillItem title='ReactJS + Alt / Redux' />
                            <SkillItem title='AngularJS' />
                            <SkillItem title='jQuery' />

                            <p className={styles.divider}>React Test</p>
                            <SkillItem title='Mocha' />
                            <SkillItem title='Chia' />
                            <SkillItem title='Enzyme' />

                            <p className={styles.divider}>Tool</p>
                            <SkillItem title='webpack' />
                            <SkillItem title='Gulp' />
                            <SkillItem title='Bower' />
                            <SkillItem title='Docker' />

                            <p className={styles.divider}>Server-Side</p>
                            <SkillItem title='C# + MVC' />
                            <SkillItem title='NodeJs + Express' />
                        </Sectoin>
                    </div>
                    <div className={styles.col}>
                        <Sectoin title='PROFILE'>
                            <p className={styles.profile}>
                                I am a Front-End Web Developer, whom is a passionate self-learner with about 2 year web development experience.
                                I enjoy coding and learning new web technologies and love to work in Agile development environments.
                            </p>
                            <p className={styles.profile}>
                                ► 2+ years experience in Open Source.<br />
                                ► Experienced in Object-Oriented JavaScript and Responsive Web Design.<br />
                                ► Currently focus on Functional Programming in JavaScript and React.js(+Es6) development.
                            </p>
                        </Sectoin>
                        <Sectoin title='WORK EXPERIENCE'>
                            {
                                workHistory.map(
                                    ({duration, title, desc}) =>
                                        <WorksItem
                                            duration={duration}
                                            title={title}
                                            desc={desc}
                                        />
                                )
                            }
                        </Sectoin>
                        <Sectoin title='PROJECTS'>
                            {
                                projects.map(
                                    ({title, desc}) =>
                                        <ProjectItem
                                            title={title}
                                            desc={desc}
                                        />
                                )
                            }
                        </Sectoin>
                        <Sectoin title='EDUCATIONS'>
                            {
                                eduHistory.map(
                                    ({duration, desc}) =>
                                        <EducationItem
                                            duration={duration}
                                            desc={desc}
                                        />
                                )
                            }
                        </Sectoin>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}
export default Index
