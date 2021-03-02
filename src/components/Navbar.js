import { Link } from 'react-router-dom';
import styles from '../style/Navbar.module.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <div>
      Math Magicians
    </div>
    <div>
      <Link to="/">Home</Link>
      {' |  '}
      <Link to="/calculator">calculator</Link>
      {' | '}
      <Link to="/quote">Quote</Link>
    </div>
  </div>
);

export default Navbar;
