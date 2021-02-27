import Display from './Display';
import Buttonspanel from './ButtonsPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display result="0" />
      <Buttonspanel calculate={calculate} />
    </>
  );
}

export default App;
