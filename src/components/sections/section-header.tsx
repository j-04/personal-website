import styles from '../../styles/SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  secondTitle: string;
}

export default function SectionHeader({
  title,
  secondTitle,
}: SectionHeaderProps) {
  return (
    <header>
      <h2 className={styles.title}>{title}</h2>
      <h1 className={styles['second-title']}>{secondTitle}</h1>
    </header>
  );
}
