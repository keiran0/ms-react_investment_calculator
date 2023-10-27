import Header from './components/Header';
import Input from './components/Input';
import Results from './components/Results'

import { useState } from 'react'

function App() {

  const [initial, setInitial] = useState(0);
  const [annual, setAnnual] = useState(0);
  const [expected, setExpected] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <>
      <Header />
      <div id="user-input">
        <Input labelName='Initial Investment' changeValueHandler={(e) => setInitial(Number(e.target.value))} />
        <Input labelName='Annual Investment' changeValueHandler={(e) => setAnnual(Number(e.target.value))} />
        <Input labelName='Expected Return' changeValueHandler={(e) => setExpected(Number(e.target.value))} />
        <Input labelName='Duration' changeValueHandler={(e) => setDuration(Number(e.target.value))} />
      </div>
      <Results initial={initial} annual={annual} expected={expected} duration={duration}/>
    </>


  )
}

export default App
