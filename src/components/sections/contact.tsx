import { SectionProps } from '../layout';

import styles from '../../styles/Contact.module.css';
import SectionHeader from './section-header';
import Image from 'next/image';

import emailIcon from '../../../public/images/email-marketing-envelope-letter-svgrepo-com.png';
import phoneNumberIcon from '../../../public/images/smartphone-svgrepo-com.png';
import telegramIcon from '../../../public/images/telegram-svgrepo-com.png';
import linkedInIcon from '../../../public/images/linkedin-svgrepo-com.png';

export default function Contact({ id }: SectionProps) {
  const contactItemStyles = styles['contact-item-container'];

  const emailStyles = `${contactItemStyles} ${styles.email}`;
  const telegramStyles = `${contactItemStyles} ${styles.telegram}`;
  const phoneNumberStyles = `${contactItemStyles} ${styles.phonenumber}`;
  const linkedinStyles = `${contactItemStyles} ${styles.linkedin}`;

  return (
    <section id={id} className={styles.contact}>
      <SectionHeader title="CONTACT" secondTitle="HOW TO CONTACT ME" />
      <section className={styles['contact-container']}>
        <div className={emailStyles}>
          <Image
            src={emailIcon}
            width={125}
            height={125}
            alt="EMAIL"
            placeholder="blur"
          />
          <div>dragoshs.j@yahoo.com</div>
        </div>
        <div className={telegramStyles}>
          <Image
            src={telegramIcon}
            width={125}
            height={125}
            alt="EMAIL"
            placeholder="blur"
          />
          <div>@dragosh_sergey</div>
        </div>
        <div className={phoneNumberStyles}>
          <Image
            src={phoneNumberIcon}
            width={125}
            height={125}
            alt="EMAIL"
            placeholder="blur"
          />
          <div>+381 62 849-58-22</div>
        </div>
        <div className={linkedinStyles}>
          <Image
            src={linkedInIcon}
            width={125}
            height={125}
            alt="EMAIL"
            placeholder="blur"
          />
          <div>
            <a href="https://www.linkedin.com/in/dragoshsj/" target="_blank">
              https://www.linkedin.com/in/dragoshsj/
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
