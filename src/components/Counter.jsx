import { useState } from 'react';
import '../styles/Counter.scss';
import { FaRedo, FaMinus, FaPlus } from 'react-icons/fa';
function Counter() {
  const [count, setCount] = useState(0);
  const limit_count = 10;

  const increment = () => {
    if (count < limit_count) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  return (
    <>
      <div className="counter-container">
        <h2>Counter: {count}</h2>
        <div className="controller">
          <button title="Restar" onClick={decrement}>
            <FaMinus />
          </button>
          <button title="Sumar" onClick={increment}>
            <FaPlus />
          </button>
          <button title="Reset" onClick={reset}>
            <FaRedo />
          </button>
        </div>
      </div>
      {count === limit_count && (
        <p className="warning-message">
          Has alcanzado el máximo de {limit_count} !
        </p>
      )}
    </>
  );
}

export default Counter;
