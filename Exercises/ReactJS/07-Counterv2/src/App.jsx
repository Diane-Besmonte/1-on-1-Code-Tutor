import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";

// FEEL FREE TO MODIFY THE COMPONENT BELOW
function App() {
  const [count, setCount] = React.useState(0);

  const increaseSlight = () => {
    return setCount((count) => count + 1);
  };

  const decreaseSlight = () => {
    return setCount((count) => count - 1);
  };

  const increaseALot = () => {
    return setCount((count) => count + 10);
  };

  const decreaseALot = () => {
    return setCount((count) => count - 10);
  };

  const reset = () => {
    return setCount((count) => (count = 0));
  };

  const randomSet = () => {
    return setCount((count) => (count = Math.floor(Math.random() * 101)));
  };

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={increaseSlight}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button onClick={increaseALot}>
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={reset}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button onClick={randomSet}>
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={decreaseALot}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={decreaseSlight}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  );
}

export default App;
