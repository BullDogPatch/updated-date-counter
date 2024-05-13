import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount((c) => c + step);
  };

  const decrement = () => {
    setCount((c) => c - step);
  };

  let date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          value={step}
          min="0"
          max="10"
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>Step: {step}</span>
      </div>
      <div style={{ display: 'flex' }}>
        <button onClick={decrement}> &minus;</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={increment}>&#43;</button>
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          <p>
            <span>
              {count === 0
                ? 'Today is '
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
