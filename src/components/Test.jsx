import { useState } from 'react';

const SquareSeries = ({ n }) => {
  const [series, setSeries] = useState([1, 4, 9, 16, 25]);

  const calculateNextSquare = () => {
    const nextSquare = Math.pow(n + 1, 2);
    setSeries([...series, nextSquare]);
  };

  return (
    <div>
      <ul>
        {series.map((square) => (
          <li key={square}>{square}</li>
        ))}
      </ul>
      <button onClick={calculateNextSquare}>Calculate Next Square</button>
    </div>
  );
};

const NumberSeries = ({ n }) => {
  const [series, setSeries] = useState([1, 2, 5, 10, 17, 26]);

  const calculateNextNumber = () => {
    const nextNumber = series[series.length - 1] + 2;
    setSeries([...series, nextNumber]);
  };

  return (
    <div>
      <ul>
        {series.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <button onClick={calculateNextNumber}>Calculate Next Number</button>
    </div>
  );
};

const FibonacciSeries = ({ n }) => {
  const [series, setSeries] = useState([0]);

  const calculateNextFibonacci = () => {
    const nextFibonacci = series[series.length - 1] + series[series.length - 2];
    setSeries([...series, nextFibonacci]);
  };

  return (
    <div>
      <ul>
        {series.map((fibonacci) => (
          <li key={fibonacci}>{fibonacci}</li>
        ))}
      </ul>
      <button onClick={calculateNextFibonacci}>Calculate Next Fibonacci</button>
    </div>
  );
};

const App = () => {
  const [n1, setN1] = useState(1);
  const [n2, setN2] = useState(1);
  const [n3, setN3] = useState(3);

  const handleN1Change = (event) => {
    setN1(parseInt(event.target.value));
  };

  const handleN2Change = (event) => {
    setN2(parseInt(event.target.value));
  };

  const handleN3Change = (event) => {
    setN3(parseInt(event.target.value));
  };

  return (
    <div>
      <h1>Number Series Generator</h1>

      <div>
        <h2>Series 2: 1 4 9 16 25 ...</h2>
        <input type="number" value={n2} onChange={handleN2Change} />
        <SquareSeries n={n2} />
      </div>
      
      <div>
        <h2>Series 1: 1 2 5 10 17 26 ...</h2>
        <input type="number" value={n1} onChange={handleN1Change} />
        <NumberSeries n={n1} />
      </div>

      <div>
        <h2>Series 3: 0 0 1 2 4 ...</h2>
        <input type="number" value={n3} onChange={handleN3Change} />
        <FibonacciSeries n={n3} />
      </div>
    </div>
  );
};

export default App;