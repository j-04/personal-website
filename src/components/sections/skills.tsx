import { SectionProps } from '../layout';

import styles from '../../styles/Skills.module.css';
import SectionHeader from './section-header';

import circleIcon from '../../../public/images/circle-svgrepo-com.png';
import Image from 'next/image';

const technologies: Object = {
  frontend: ['TypeScript', 'React.js', 'Redux Toolkit', 'Next.js', 'CSS'],
  backend: ['Java', 'Spring Boot', 'Hibernate', 'Prometheus', 'Grafana'],
  databases: ['PostgreSQL', 'Redis'],
  devops: ['Docker', 'Kubernetes', 'Jenkins'],
};

export default function Skills({ id }: SectionProps) {
  return (
    <section id={id} className={styles.skills}>
      <SectionHeader title="SKILLS" secondTitle="MY SKILLS" />
      <p className={styles.summary}>
        I have strong expertise of building various parts of applications with
        various complexity using modern solutions.
      </p>
      <section className={styles['skills-list']}>
        {Object.entries(technologies).map((entry) => (
          <div
            key={entry[0] + entry[1]}
            className={styles['skills-list__item']}
          >
            <header>{entry[0].toUpperCase()}</header>
            <ul>
              {entry[1].map((tech: string) => (
                <li key={tech}>
                  <Image src={circleIcon} height={30} width={30} alt=">" />{' '}
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
}
