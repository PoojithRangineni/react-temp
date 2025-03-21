import React, { useState } from 'react';

const App8 = () => {
    const [number, setNumber] = useState('');
    const [submittedNumbers, setSubmittedNumbers] = useState([]);
    const [sum, setSum] = useState(0);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setNumber(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (number.trim() === '') {
            setError('Number cannot be empty!');
            return;
        }
        const num = parseInt(number, 10);
        setSubmittedNumbers([...submittedNumbers, num]);
        setSum(sum + num);
        setNumber('');
        setError('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={number}
                    onChange={handleChange}
                    placeholder="Enter a number"
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {submittedNumbers.length > 0 && (
                <div>
                    <h3>Submitted Numbers:</h3>
                    <ul>
                        {submittedNumbers.map((num, index) => (
                            <li key={index}>{num}</li>
                        ))}
                    </ul>
                    <h3>Sum of Numbers:</h3>
                    <p>{sum}</p>
                </div>
            )}
        </div>
    );
};

export default App8;