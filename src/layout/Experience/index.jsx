import * as React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work'; 
import SchoolIcon from '@mui/icons-material/School'; 

const Experience = () => {
  return (
    <div className="bg-[#C84747] w-screen min-h-screen relative pb-20" id="experience">
      <div className="flex justify-between p-20">
        <h1 className="text-5xl font-bold text-white">Experiences</h1>
        <img src="/boo.svg" alt="boo" className="w-12 h-12" />
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FFFFFF', color: '#C84747' }}
          contentArrowStyle={{ borderRight: '7px solid #FFFFFF' }}
          date={<span className="text-3xl font-medium text-white">Present</span>} 
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-3xl">Magnus</h3>
          <h4 className="vertical-timeline-element-subtitle">Freelance QA Manual</h4>
          <p>
            Jira, Testcase, Regression testing, E2E testing,  Bug report
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FFFFFF', color: '#C84747' }}
          contentArrowStyle={{ borderRight: '7px solid #FFFFFF' }}
          date={<span className="text-3xl font-medium text-white">2024</span>} 
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-3xl">Cilsy Fiolution</h3>
          <h4 className="vertical-timeline-element-subtitle ">Freelance QA Automation</h4>
          <p>
            Cypress, Gitlab, Javascript
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#FFFFFF', color: '#C84747' }}
          contentArrowStyle={{ borderRight: '7px solid #FFFFFF' }}
          date={<span className="text-3xl font-medium text-white">2023 - 2024</span>} 
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-3xl">RevoU</h3>
          <h4 className="vertical-timeline-element-subtitle ">Fullstack Online Course</h4>
          <p>
            HTML, CSS, Javascript,Github, React, Nextjs, Python, Flask, Mysql
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FFFFFF', color: '#C84747' }}
          contentArrowStyle={{ borderRight: '7px solid #FFFFFF' }}
          date={<span className="text-3xl font-medium text-white">2022 - 2023</span>} 
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-3xl">Edgeworks</h3>
          <h4 className="vertical-timeline-element-subtitle ">QA Engineer</h4>
          <p>
            Cypress, Javascript, Regression testing, Linear, Qase.io, E2E testing 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#FFFFFF', color: '#C84747' }}
          contentArrowStyle={{ borderRight: '7px solid #FFFFFF' }}
          date={<span className="text-3xl font-medium text-white">2022</span>} 
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-3xl">Sekolah QA</h3>
          <h4 className="vertical-timeline-element-subtitle ">QA Engineer Online Course</h4>
          <p>
            Testcase, Selenium, Katalon studio, Bug report
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
