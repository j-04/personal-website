import Image from 'next/image';
import { ReactElement } from 'react';

import { SectionProps } from '../layout';

import styles from '../../styles/Experience.module.css';
import SectionHeader from './section-header';

import circleIcon from '../../../public/images/circle-svgrepo-com.png';

interface Experience {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date | string;
  description: string;
  achivements?: Array<string>;
}

const experience: Array<Experience> = [
  {
    role: 'Senior Java Software Engineer',
    company: 'T1-Consulting',
    startDate: new Date('April 2021'),
    endDate: 'present',
    description:
      'Development of a High-Load project that links all banking logic in one subsystem to standardize business processes and improve the speed and quality of providing banking services to customers.',
    achivements: [
      'Designed and implemented the Logging, Tracing and Monitoring infrastructure for the microservice according to requirements.',
      'Helped 3 other teams on the implementation of Logging, Tracing and Monitoring in their microservices.',
      'Designed, implemented a library that standardizes the process of integrating microservices with the audit subsystem. 4 other teams decided to use the library in their microservices.',
      'Increased the number of requests per second per instance of the microservice by 2 times from 100 up to 200 on average by reducing numbers of unnecessary requests with Redis and code optimizations.',
      'Reduced the load on the database by over 30% using Hibernate Cache and SQL optimizations.',
    ],
  },
  {
    role: 'Full Stack Java Software Engineer',
    company: 'ANO "AIR"',
    startDate: new Date('June 2020'),
    endDate: new Date('April 2021'),
    description:
      'Development of a reference system of state support measures to attract investment in the economy of the state regions.',
    achivements: [
      'Developed a library of components that utilized in the project using TypeScript, ReactJS, Material UI.',
      'Developed one of the three core microservice that I was responsible for. The work includes implementation of the service API, the business behavior, and the entity schema.',
      "Designed and implemented the system's users notification microservice.",
      'Designed and implemented the dynamic entity builder and the real-time entity schema editor on the backend side based on jsonb data type in PostgreSQL.',
    ],
  },
];

export default function Experience({ id }: SectionProps) {
  return (
    <section id={id} className={styles.experience}>
      <SectionHeader title="EXPERIENCE" secondTitle="WORK EXPERIENCE" />
      <div className={styles['timeline-container']}>
        {experience.map((exp: Experience) => (
          <div className={styles['timeline-container__item']}>
            <header className={styles['timeline-container__item__company']}>
              {exp.company?.toUpperCase()}
            </header>
            <header className={styles['timeline-container__item__role']}>
              {buildHeader(exp)}
            </header>
            <p>{exp.description}</p>
            <ul>
              {exp.achivements?.map((ach: string) => (
                <li>
                  <Image src={circleIcon} height={30} width={30} alt=">" />{' '}
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles['timeline-container__end']}></div>
      </div>
    </section>
  );
}

function buildHeader(exp: Experience): ReactElement {
  return (
    <header>
      {exp.role.toUpperCase()},{' '}
      {exp.startDate.toLocaleDateString('en-us', {
        month: 'short',
        year: 'numeric',
      })}
      {' - '}
      {typeof exp.endDate == 'string'
        ? exp.endDate
        : exp.endDate.toLocaleDateString('en-us', {
            month: 'short',
            year: 'numeric',
          })}
    </header>
  );
}
