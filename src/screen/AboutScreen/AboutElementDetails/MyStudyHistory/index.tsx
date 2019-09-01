import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const MyStudyHistory = () => {
  return(
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019.9 - present"
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">東京外国語大学</h3>
        <h4 className="vertical-timeline-element-subtitle">国際社会学部東アジア地域中国語専攻</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018.9 - 2019.6"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Tamkang University</h3>
        <h4 className="vertical-timeline-element-subtitle">Information&Communication </h4>
        <p>台湾に交換留学</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2016.4 - 2018.8"
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">東京外国語大学</h3>
        <h4 className="vertical-timeline-element-subtitle">国際社会学部東アジア地域中国語専攻</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015.4 - 2016.3"
        iconStyle={{ background: 'rgb(20, 204, 82)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">浪人</h3>
        <h4 className="vertical-timeline-element-subtitle">希望大学進学に向けて一年間浪人</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015.4 - 2016.3"
        iconStyle={{ background: 'rgb(66, 204, 82)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">東京都私立城北高校 卒業</h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}