import Image from 'next/image';

import profilePhoto from '../../../public/images/profile-photo.png';

import styles from '../../styles/NavBar.module.css';
import NavBarItem from './navbar-item';

const sections = [
  'home',
  'about',
  'experience',
  'skills',
  'education',
  'projects',
  'contact',
];

export default function NavBar() {
  return (
    <div className={styles['nav-container']}>
      <div className={styles.nav}>
        <Image
          className={styles['photo']}
          src={profilePhoto}
          width={280}
          height={280}
          alt="Picture of the author"
          placeholder="blur"
        />
        <div className={styles.name}>SERGEY DRAGOSH</div>
        <div className={styles.specialization}>
          SENIOR JAVA DEVELOPER{' '}
          <span className={styles.specialization}>IN SERBIA</span>
        </div>
        <nav>
          <ul className={styles['nav-list']}>
            {sections.map((section) => (
              <NavBarItem
                key={section}
                className={styles['nav-list__item']}
                href={`#${section}`}
                text={section.toUpperCase()}
              />
            ))}
          </ul>
          <div className={styles.footer}>©{new Date().getFullYear()}</div>
        </nav>
      </div>
    </div>
  );
}
