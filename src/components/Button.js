import PropTypes from 'prop-types';
import styles from '../style/Button.module.css';

const Button = ({
  name, clickHandler, wide, color,
}) => {
  const handleClick = () => {
    clickHandler(name);
  };

  const backgroud = color ? 'orange' : 'white';
  const width = wide ? '50%' : '25%';

  return (
    <button type="button" data-testid={name} onClick={handleClick} className={styles.button} style={{ backgroundColor: backgroud, width }}>{name}</button>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.bool.isRequired,
};

export default Button;
