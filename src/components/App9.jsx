import React, { useState, useEffect } from 'react';

const App9 = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [sum, setSum] = useState(null);

    useEffect(() => {
        const num1 = parseFloat(input1);
        const num2 = parseFloat(input2);
        if (!isNaN(num1) && !isNaN(num2)) {
            setSum(num1 + num2);
        } else {
            setSum('Invalid input');
        }
    }, [input1, input2]);

    const handleInput1Change = (e) => {
        setInput1(e.target.value);
    };

    const handleInput2Change = (e) => {
        setInput2(e.target.value);
    };

    return (
        <div>
            <form>
                <div>
                    <label>Input 1:</label>
                    <input
                        type="number"
                        value={input1}
                        onChange={handleInput1Change}
                    />
                </div>
                <div>
                    <label>Input 2:</label>
                    <input
                        type="number"
                        value={input2}
                        onChange={handleInput2Change}
                    />
                </div>
            </form>
            {sum !== null && <h3>Sum: {sum}</h3>}
        </div>
    );
};

export default App9;