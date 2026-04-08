import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './WorkExp.css';
import { SiReact } from 'react-icons/si';

const WorkExp = () => {
  return (
    <>
      <div className="work" id='experience'>
        <div className="container work-exp">
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                WORK EXPERIENCE
                </h2>
                <hr />
                <VerticalTimeline lineColor='#1e1e2c'>
                    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2023 - 2024"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<SiReact />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Sukibhavan Properties</h4>
    <p>
  Built responsive web applications using HTML, JavaScript, Express, and
MongoDB.
Integrated frontend-backend workflows and assisted in deployment and
debugging.
Optimized database queries and improved application performance.
</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021 - 2023"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<SiReact />}
  >
    <h3 className="vertical-timeline-element-title">Marketing Executive</h3>
    <h4 className="vertical-timeline-element-subtitle">Harika Pharma & Surgical Distributors</h4>
    <p>
  Developed communication and problem-solving skills through client
interactions.
Assisted in data-driven decision making and process optimization
</p>
  </VerticalTimelineElement>
                
                    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2017 - 2021"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<SiReact />}
  >
    <h3 className="vertical-timeline-element-title">Edge Banding Machine Operator</h3>
    <h4 className="vertical-timeline-element-subtitle">Merino Industries Limited</h4>
    <p>
 Gained discipline and attention to detail, contributing to smooth operations.
</p>
  </VerticalTimelineElement>
                </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp
