import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Timeline.css';
import { Link } from 'react-router-dom';
import { GoLinkExternal } from 'react-icons/go';
import { BiLinkExternal } from 'react-icons/bi';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: 1,
    title: 'Cyber Security Intern',
    company: 'Eyesec Cyber Security Solutions Pvt. Ltd."',
    period: 'Dec 2024 – Apr 2025',
    description: 'Completed 640 hours (16 weeks) of internship on Cyber Security. Worked on real-world security concepts as per DTE, Bengaluru guidelines.',
    link: "https://ik.imagekit.io/cblndrocc/Dharmapal%20achiv/Eyesec%20cyber%20security.pdf"
  },
  {
    id: 2,
    title: '🥇 1st Place – Bug Hunt',
    company: 'DevXcel 2024-25 | Shri Vasantrao Potdar Polytechnic',
    period: 'March 2025',
    description: 'Secured 1st place in Bug Hunt event at National Level Technical Fest organized by Dept. of CSE, Belagavi.',
    link: "https://ik.imagekit.io/cblndrocc/Dharmapal%20achiv/1st.jpg"
  },
  {
    id: 3,
    title: 'Certificate of Merit – Idea Presentation',
    company: 'Technovision-24 | Hirasugar Institute of Technology',
    period: 'April 2024',
    description: 'Participated in Project Exhibition / Idea Presentation competition and secured a prize at the national level fest.',
    link: "https://ik.imagekit.io/cblndrocc/Dharmapal%20achiv/2nd.jpg"

  },
  {
    id: 4,
    title: 'National Hackathon Finalist',
    company: 'India Innovates 2026 | Bharat Mandapam, New Delhi"',
    period: 'March 2026',
    description: 'Selected as a finalist in the prestigious India Innovates Hackathon, showcasing innovative solutions to national challenges at Bharat Mandapam, New Delhi.',

  },
];

export default function Timeline() {
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Animate timeline items on scroll
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            markers: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={timelineRef} className="timeline">
      <h3 className="timeline__title">Achievements</h3>
      <div className="timeline__container">
        <div className="timeline__line" />
        <div className="timeline__items">
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              ref={el => itemsRef.current[index] = el}
              className={`timeline__item timeline__item--${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline__dot" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h4 className="timeline__job">{item.title}</h4>
                  <span className="timeline__company">{item.company}</span>
                </div>
                <span className="timeline__period">{item.period}</span>
                <p className="timeline__description">{item.description}</p>
                <Link className='timeline__link' to={item.link} > <BiLinkExternal style={{ fontWeight: "bold" }} /> </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
