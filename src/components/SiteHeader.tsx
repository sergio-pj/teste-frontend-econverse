import ameiIcon from '../assets/Amei.svg';
import assinaturaIcon from '../assets/Assinaturas.svg';
import caminhãoFreteIcon from '../assets/Caminhão de Frete.svg';
import carrinhoComprasIcon from '../assets/Carrinho de Compras.svg';
import comprasIcon from '../assets/Compras.svg';
import econverseCabecalho from '../assets/econversecabeçalho.svg';
import loginIcon from '../assets/Login.svg';
import { CreditCardIcon, SearchIcon, ShieldIcon } from './icons';
import styles from './SiteHeader.module.scss';

const topBenefits = [
  { icon: <ShieldIcon />, prefix: 'Compra', emphasis: '100% segura' },
  { icon: <img src={caminhãoFreteIcon} alt="" loading="lazy" />, prefix: 'Frete gratis', emphasis: 'acima de R$ 200' },
  { icon: <CreditCardIcon />, prefix: 'Parcele', emphasis: 'suas compras' },
];

const navigationItems = [
  { label: 'Todas categorias' },
  { label: 'Supermercado' },
  { label: 'Livros' },
  { label: 'Moda' },
  { label: 'Lancamentos' },
  { label: 'Ofertas do dia' },
  { label: 'Assinatura', icon: assinaturaIcon },
];

const actionItems = [
  { label: 'Pedidos', icon: comprasIcon },
  { label: 'Favoritos', icon: ameiIcon },
  { label: 'Conta', icon: loginIcon },
  { label: 'Carrinho', icon: carrinhoComprasIcon },
];

export const SiteHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className={styles.topbarContent}>
          {topBenefits.map((benefit) => (
            <p key={benefit.prefix} className={styles.benefit}>
              <span className={styles.benefitIcon}>{benefit.icon}</span>
              <strong>{benefit.prefix}</strong>
              <span>{benefit.emphasis}</span>
            </p>
          ))}
        </div>
      </div>

      <div className={styles.mainBar}>
        <a href="#inicio" className={styles.logo} aria-label="Econverse Home">
          <img src={econverseCabecalho} alt="Econverse" loading="eager" />
        </a>

        <label className={styles.search}>
          <span className={styles.searchLabel}>Buscar produtos</span>
          <input type="search" placeholder="O que voce esta buscando?" aria-label="Buscar produtos" />
          <span className={styles.searchIcon}>
            <SearchIcon />
          </span>
        </label>

        <div className={styles.actions} aria-label="Acoes do usuario">
          {actionItems.map((action) => (
            <button key={action.label} type="button" aria-label={action.label}>
              <img className={styles.actionIcon} src={action.icon} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <nav className={styles.navigation} aria-label="Categorias principais">
        <ul>
          {navigationItems.map((item) => (
            <li key={item.label}>
              <a
                href="#produtos"
                className={item.label === 'Ofertas do dia' ? styles.navigationHighlight : undefined}
              >
                {item.icon ? <img className={styles.navigationIcon} src={item.icon} alt="" loading="lazy" /> : null}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
