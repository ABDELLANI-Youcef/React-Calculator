import Button from './Button';

const ButtonsPanel = ({ clickHandler }) => {
  const names = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];

  const handleClick = buttonName => {
    clickHandler(buttonName);
  };
  return (
    names.map((row, i) => (
      <div key={`row ${i + 1}`}>
        {row.map(name => (
          <Button key={name} name={name} clickHandler={handleClick} />
        ))}
      </div>
    ))
  );
};

export default ButtonsPanel;
