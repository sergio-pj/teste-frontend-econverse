import facebookIcon from '../assets/Icon Facebook.svg';
import instagramIcon from '../assets/Icon Instagram.svg';
import linkedinIcon from '../assets/Icon Linkedin.svg';
import styles from './SiteFooter.module.scss';

const footerColumns = [
  {
    title: 'Institucional',
    items: ['Sobre nos', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    items: ['Suporte', 'Fale conosco', 'Perguntas frequentes'],
  },
  {
    title: 'Termos',
    items: ['Termos e condicoes', 'Politica de privacidade', 'Troca e devolucao'],
  },
];

export const SiteFooter = () => {
  const socialItems = [
    { label: 'Instagram', icon: instagramIcon },
    { label: 'Facebook', icon: facebookIcon },
    { label: 'LinkedIn', icon: linkedinIcon },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <section className={styles.brand} aria-label="Apresentacao da marca">
          <a href="#inicio" className={styles.logo}>
            <span className={styles.logoAccent}>ec</span>
            <span className={styles.logoText}>onverse</span>
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles.socials}>
            {socialItems.map((item) => (
              <a key={item.label} href="#" aria-label={item.label}>
                <img src={item.icon} alt="" loading="lazy" />
              </a>
            ))}
          </div>
        </section>

        <div className={styles.columns}>
          {footerColumns.map((column) => (
            <section key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};
