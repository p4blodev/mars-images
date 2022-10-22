import { MarsBoard } from './features';
import { Title } from './ui-components';
function App() {
  return (
    <div className="app-container">
      <Title text="Southern Code Challenge" />
      <MarsBoard />
    </div>
  );
}

export default App;
