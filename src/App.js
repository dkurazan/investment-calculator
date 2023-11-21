import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Results/Table";

function App() {
    const [userInput, setuserInput] = useState([]);

    const saveYearlyDataHandler = (userInput) => {
        setuserInput(userInput);
        console.log(userInput);
    };

    const yearlyData = [];

    if(userInput) {
        let currentSavings = +userInput["current-savings"];
        const yearlyContribution = +userInput["yearly-contribution"];
        const expectedReturn = +userInput["expected-return"] / 100;
        const duration = +userInput["duration"];
    
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
    }

    const clearDataHandler = () => {
        setuserInput("");
    };

    return (
        <div>
            <Header />

            <Form
                onSaveYearlyData={saveYearlyDataHandler}
                onClearData={clearDataHandler}
            />

            <Table
                data={yearlyData}
                initialInvestment={userInput["current-savings"]}
            />
        </div>
    );
}

export default App;
