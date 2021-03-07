import PropTypes from 'prop-types';
import styles from '../style/Display.module.css';

const Display = ({ result }) => (
  <div className={styles.display} data-testid="display">
    {result}
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
