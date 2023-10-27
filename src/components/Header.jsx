import './Header.css';
import Input from './Input'
import Results from './Results';
import { useState } from 'react'
import logo from '../assets/investment-calculator-logo.png';


export default function Header() {

    const [initial, setInitial] = useState(0);
    const [annual, setAnnual] = useState(0);
    const [expected, setExpected] = useState(0);
    const [duration, setDuration] = useState(0);

    return (
        <header id="header">
            <img src={logo}></img>
            <h1>React Investment Calculator</h1>
            <div id="user-input">
                <Input labelName='Initial Investment' changeValueHandler={(e) => setInitial(Number(e.target.value))} />
                <Input labelName='Annual Investment' changeValueHandler={(e) => setAnnual(Number(e.target.value))} />
                <Input labelName='Expected Return' changeValueHandler={(e) => setExpected(Number(e.target.value))} />
                <Input labelName='Duration' changeValueHandler={(e) => setDuration(Number(e.target.value))} />
            </div>
            <Results initial={initial} annual={annual} expected={expected} duration={duration}/>
        </header>
    )
}