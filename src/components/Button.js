import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };
  return (
    <button type="button" onClick={handleClick}>{name}</button>
  );
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
