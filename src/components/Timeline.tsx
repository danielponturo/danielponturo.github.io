import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
    return (
        <div id='history'>
            <div className='items-container'>
                <h1>Career History</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date='2022 - present'
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                        <h3 className='vertical-timeline-element-title'>Associate Software Engineer, Ivanti</h3>
                        <h4 className='vertical-timeline-element-subtitle'>Daresbury, United Kingdom</h4>
                        <p>
                            Full-stack Web Development, DevOps
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className='vertical-timeline-element--work'
                        date='2020 - 2022'
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                        <h3 className='vertical-timeline-element-title'>Software Engineer Intern, Ivanti</h3>
                        <h4 className='vertical-timeline-element-subtitle'>Daresbury, United Kingdom</h4>
                        <p>
                            Full-stack Web Development, DevOps
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;