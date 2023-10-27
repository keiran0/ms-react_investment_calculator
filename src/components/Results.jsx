import './Results.css';

import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ initial, annual, expected, duration }) {

    const resultArray = calculateInvestmentResults({
        initialInvestment: initial,
        annualInvestment: annual,
        expectedReturn: expected/100,
        duration: duration
    })

    return (
        <table id="result">
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>

            <tbody>
                {resultArray.map((result) => 
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.valueEndOfYear - (initial + result.annualInvestment*result.year))}</td>
                        <td>{formatter.format(initial + result.annualInvestment*result.year)}</td>
                    </tr>
                )}
            </tbody>

        </table>
    )
}