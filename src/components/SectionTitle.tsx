import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleId?: string;
}

export const SectionTitle = ({ title, subtitle, centered = true, titleId }: SectionTitleProps) => (
  <header className={`${styles.header} ${centered ? styles.centered : ''}`.trim()}>
    <span className={styles.line} aria-hidden="true" />
    <div>
      <h2 id={titleId}>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
    <span className={styles.line} aria-hidden="true" />
  </header>
);
