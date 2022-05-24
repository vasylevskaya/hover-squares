import { useState } from 'react';

import ModePicker from './components/ModePicker';
import SquaresTable from './components/SquaresTable';

function App() {
  const [mode, setMode] = useState("")

  return (
    <div className="App">
      <ModePicker mode={mode} setMode={setMode} />
      <SquaresTable mode={mode} />
    </div>
  );
}

export default App;
