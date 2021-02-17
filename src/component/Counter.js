import React, {useState} from 'react';

function Counter({isSpecial = false}) {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }
  const onDecrease = () => {
    setNumber(Math.max(0, number - 1));
  }

  return (
    <div>
      <h1>
        { isSpecial ? <b>*</b> : null }
        {number}
        { isSpecial && <b>*</b> }
      </h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
