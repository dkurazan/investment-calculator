import { useState } from "react";
import "./Form.css";

const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
};

const Form = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const inputDataHandler = (id, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [id]: +value,
            };
        });
    };

    const resetButtonHandler = () => {
        setUserInput(initialUserInput);
        props.onClearData();
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onSaveYearlyData(userInput);
    };

    return (
        <form className="form" onSubmit={onSubmitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        id="current-savings"
                        value={userInput['current-savings']}
                        onChange={(event) => {
                            inputDataHandler(
                                "current-savings",
                                event.target.value
                            );
                        }}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings ($)
                    </label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        value={userInput['yearly-contribution']}
                        onChange={(event) => {
                            inputDataHandler(
                                "yearly-contribution",
                                event.target.value
                            );
                        }}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        type="number"
                        id="expected-return"
                        value={userInput['expected-return']}
                        onChange={(event) => {
                            inputDataHandler(
                                "expected-return",
                                event.target.value
                            );
                        }}
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input
                        type="number"
                        id="duration"
                        value={userInput['duration']}
                        onChange={(event) => {
                            inputDataHandler("duration", event.target.value);
                        }}
                    />
                </p>
            </div>
            <p className="actions">
                <button
                    type="reset"
                    className="buttonAlt"
                    onClick={resetButtonHandler}
                >
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default Form;
