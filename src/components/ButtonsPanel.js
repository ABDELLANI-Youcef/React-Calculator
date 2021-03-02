import Button from './Button';
import styles from '../style/ButtonPanel.module.css';

const ButtonsPanel = ({ clickHandler }) => {
  const names = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
  const oranges = ['÷', 'X', '-', '+', '='];

  const handleClick = buttonName => {
    clickHandler(buttonName);
  };
  return (
    names.map((row, i) => (
      <div key={`row ${i + 1}`} className={styles.row}>
        {row.map(name => (
          <Button key={name} name={name} wide={name === '0'} color={oranges.includes(name)} clickHandler={handleClick} />
        ))}
      </div>
    ))
  );
};

export default ButtonsPanel;
