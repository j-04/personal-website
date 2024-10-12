import { SectionProps } from '../layout';

import SectionHeader from './section-header';

import styles from '../../styles/About.module.css';

import frontendIcon from '../../../public/images/react-javascript-js-framework-facebook-svgrepo-com.png';
import backendIcon from '../../../public/images/java.png';
import databaseIcon from '../../../public/images/database-svgrepo-com.png';
import devopsIcon from '../../../public/images/devops.png';

import Image from 'next/image';

export default function About({ id }: SectionProps) {
  return (
    <section id={id} className={styles.about}>
      <SectionHeader title="ABOUT ME" secondTitle="WHO AM I?" />
      <div className={styles.summary}>
        <p className={styles['summary__item']}>
          <strong>Hi there! My name is Sergey. </strong>I have over three years
          of experience as a Java developer specializing in backend development
          of enterprise applications.
        </p>
        <p className={styles['summary__item']}>
          During my career, I have worked on various aspects of application
          development, ranging from building user interfaces using React
          framework to creating infrastructure for log collection and
          microservices monitoring.
        </p>
        <p className={styles['summary__item']}>
          When it comes to developing applications, my approach is strategic. I
          take a holistic view of the entire system, ensuring that it is
          reliable, scalable, and easy to support. This means paying attention
          to both the overall architecture and the individual components.
        </p>
      </div>
      <div className={styles['area-list']}>
        <div className={`${styles['area-list__item']} ${styles['reveal-1']}`}>
          <Image
            className={styles['area-list__item--icon']}
            src={frontendIcon}
            sizes=""
            alt=""
          />
          <div className={styles['area-list__item--text']}>FRONTEND</div>
        </div>
        <div className={`${styles['area-list__item']} ${styles['reveal-2']}`}>
          <Image
            className={styles['area-list__item--icon']}
            src={backendIcon}
            sizes=""
            alt=""
          />
          <div className={styles['area-list__item--text']}>BACKEND</div>
        </div>
        <div className={`${styles['area-list__item']} ${styles['reveal-3']}`}>
          <Image
            className={styles['area-list__item--icon']}
            src={databaseIcon}
            sizes=""
            alt=""
          />
          <div className={styles['area-list__item--text']}>DATABASES</div>
        </div>
        <div className={`${styles['area-list__item']} ${styles['reveal-4']}`}>
          <Image
            className={styles['area-list__item--icon']}
            src={devopsIcon}
            sizes=""
            alt=""
          />
          <div className={styles['area-list__item--text']}>DEVOPS</div>
        </div>
      </div>
    </section>
  );
}
