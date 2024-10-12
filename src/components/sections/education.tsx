import { useState } from 'react';

import { SectionProps } from '../layout';

import styles from '../../styles/Education.module.css';
import SectionHeader from './section-header';

export default function Education({ id }: SectionProps) {
  return (
    <section id={id} className={styles.education}>
      <SectionHeader title="EDUCATION" secondTitle="EDUCATION" />
      <section className={styles['education-list']}>
        <Card title="BACHELOR'S DEGREE IN COMPUTER SOFTWARE ENGINEERING">
          <ul>
            <li>
              <header>MIREA Russian Technological University</header>
            </li>
            <li>Bachelor's degree in Computer Software Engineering</li>
            <li>Sep 2017 - Aug 2021</li>
          </ul>
        </Card>
        <Card title="JAVASCRIPT BOOTCAMP">
          <ul>
            <li>
              <header>Udemy</header>
            </li>
            <li>
              <span>Credential URL - </span>
              <a href="https://ude.my/UC-8ccad535-c63f-4e65-a342-74fd0e589a85">
                https://ude.my/UC-8ccad535-c63f-4e65-a342-74fd0e589a85
              </a>
            </li>
            <li>Credential ID: UC-8ccad535-c63f-4e65-a342-74fd0e589a85</li>
            <li>May 2023</li>
          </ul>
        </Card>
        <Card title="REACT BOOTCAMP">
          <ul>
            <li>
              <header>Udemy</header>
            </li>
            <li>
              <span>Credential URL - </span>
              <a href="https://ude.my/UC-15925274-0c75-4385-8795-c409c54b192d">
                https://ude.my/UC-15925274-0c75-4385-8795-c409c54b192d
              </a>
            </li>
            <li>Credential ID: UC-15923274-0075-4383-8795-0409cb46192d</li>
            <li>May 2023</li>
          </ul>
        </Card>
      </section>
    </section>
  );
}

const Card = ({ children, title }: { children: any; title: string }) => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = () => {
    setIsActive((state) => !state);
  };

  return (
    <div className={styles['education-list__item']}>
      <div
        className={`${styles['education-list__item--accordion']} ${
          isActive ? styles['accordion-active'] : ''
        }`}
        onClick={onClickHandler}
      >
        <div>{title}</div>
        <div className={styles['education-list__item--accordion__icon']}>
          {isActive ? '-' : '+'}
        </div>
      </div>
      <div
        className={`${styles['education-list__item--panel']} ${
          isActive ? styles['panel-active'] : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};
