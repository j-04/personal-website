import NavBar from './navbar/navbar';
import Home from './sections/home';
import About from './sections/about';
import Experience from './sections/experience';

import styles from '../styles/Layout.module.css';
import Skills from './sections/skills';
import Education from './sections/education';
import Projects from './sections/projects';
import Contact from './sections/contact';

export interface SectionProps {
  id: string;
}

export default function Layout() {
  return (
    <div className={styles.layout}>
      <section className={styles.sidebar}>
        <section className={styles['stub-sidebar']} />
        <NavBar />
      </section>
      <section className={styles.main}>
        <Home id="home" />
        <About id="about" />
        <Experience id="experience" />
        <Skills id="skills" />
        <Education id="education" />
        <Projects id="projects" />
        <Contact id="contact" />
      </section>
    </div>
  );
}
