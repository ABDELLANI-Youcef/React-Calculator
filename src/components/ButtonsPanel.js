import Button from './Button';

const ButtonsPanel = () => {
  const names = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'X'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
  return (
    names.map((row, i) => (
      <div key={`row ${i + 1}`}>
        {row.map(name => (
          <Button key={name} name={name} />
        ))}
      </div>
    ))
  );
};

export default ButtonsPanel;
