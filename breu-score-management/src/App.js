import logo from './logo.svg';
import './App.css';

import { BelievabilityScreen } from './ui-components';

import { EmotionalUndesirabilityScreen } from './ui-components';
import { CandidatesBREU } from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <EmotionalUndesirabilityScreen />
      <CandidatesBREU />
      </header>
    </div>
  );
}

export default App;
