import Image from 'next/image';

import { SectionProps } from '../layout';

import downloadIcon from '../../../public/images/download-icon.png';

import styles from '../../styles/Home.module.css';

export default function Home({ id }: SectionProps) {
  return (
    <section id={id} className={styles.home}>
      <div className={styles.greetings}>
        <h1 className={styles['greetings-text']}>
          Hi! <br /> I am Sergey Dragosh.
        </h1>
        <DownloadCv />
      </div>
    </section>
  );
}

const DownloadCv = function () {
  return (
    <a className={styles['download-cv']} href="/">
      <span className={styles['download-cv__download']}>DOWNLOAD CV</span>
      <Image
        className={styles['download-cv__icon']}
        src={downloadIcon}
        width={400}
        height={400}
        alt=""
      />
    </a>
  );
};
