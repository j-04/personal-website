import { SectionProps } from '../layout';

import styles from '../../styles/Projects.module.css';
import SectionHeader from './section-header';
import Line from './line';

interface Project {
  name: string;
  date: Date;
  description: string;
  url: string | undefined;
  githubUrl: string;
}

const projects: Array<Project> = [
  {
    name: 'Maverick',
    date: new Date('June, 2020'),
    description:
      'Maverick – self-implementation of IoC and DI concepts. I started this project to understand the internals of the Spring Framework. This framework consists of two basic modules. The first one is the core module, and the second one is the API module. The API module allows the creation of plugins and other features for the core module.',
    url: 'https://github.com/j-04/maverick-core',
    // url: undefined,
    githubUrl: 'https://github.com/j-04/maverick-core',
  },
];

export default function Projects({ id }: SectionProps) {
  return (
    <section id={id} className={styles.projects}>
      <SectionHeader title="PROJECTS" secondTitle="MY PROJECTS" />
      <section className={styles['projects-cards']}>
        {projects.map((project, index) => (
          <Project
            key={project.name + project.date.toISOString()}
            project={project}
          />
        ))}
      </section>
    </section>
  );
}

const Project = ({ project }: { project: Project }) => {
  const { name, date, description, url, githubUrl } = project;
  const dateString = date.toLocaleDateString('en-us', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className={styles['projects-cards__item']}>
      <header className={styles.header}>{name.toUpperCase()}</header>
      <section className={styles.content}>
        <div className={styles.date}>DATE:</div>
        <div className={styles['date-content']}>{dateString}</div>
        <div className={styles.description}>Description:</div>
        <div className={styles['description-content']}>{description}</div>
        {url && (
          <>
            <div className={styles.url}>URL:</div>
            <a href={url} className={styles['url-content']} target="_blank">
              {url}
            </a>
          </>
        )}
        <div className={styles.githuburl}>GitHub page:</div>
        <a
          href={githubUrl}
          className={styles['githuburl-content']}
          target="_blank"
        >
          {githubUrl}
        </a>
      </section>
      <Line />
    </div>
  );
};
