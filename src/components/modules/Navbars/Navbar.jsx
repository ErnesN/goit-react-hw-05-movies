import styles from './navbar.module.scss';

import items from './items';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <a className={styles.link} href={link}>
        {text}
      </a>
    </li>
  ));

  return <ul className={styles.menu}>{elements}</ul>;
};

export default Navbar;
