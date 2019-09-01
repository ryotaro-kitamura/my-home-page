import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface skill {
  name: string
  //img:
}

export const Programming = () => {
  return(
      <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019.7 - present"
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">React/Typescript/Redux/ReactNative</h3>
        <h4 className="vertical-timeline-element-subtitle">インターン先の開発で使用。個人での勉強もReactが中心に。</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019.5 - 2019.6"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Ruby/Rails</h3>
        <h4 className="vertical-timeline-element-subtitle">独学してオリジナルアプリを作成</h4>
        <p></p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019.5 - 2019.5"
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">WordPress</h3>
        <h4 className="vertical-timeline-element-subtitle">過去に学んだ言語でWordPressテーマを自作</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019.4 - 2019.4"
        iconStyle={{ background: 'rgb(20, 204, 82)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Javascript/jQuery</h3>
        <h4 className="vertical-timeline-element-subtitle">簡単なゲームなどを作る</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019.2 - 2019.4"
        iconStyle={{ background: 'rgb(66, 204, 82)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">HTML/CSS/Bootstrap</h3>
        <h4 className="vertical-timeline-element-subtitle">興味本位で始める。</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}