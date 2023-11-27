import { useState } from 'react';

const DeretAngkaComponent = () => {
  const [numberInput, setNumberInput]     = useState('');
  const [numberSeries1, setNumberSeries1] = useState([]);
  const [numberSeries2, setNumberSeries2] = useState([]);
  const [numberSeries3, setNumberSeries3] = useState([]);

  const handleInputChange = (event) => {
    setNumberInput(event.target.value);
  };

  const generateNumberSeries = () => {
    const inputNumber = parseInt(numberInput);
    if (!isNaN(inputNumber)) {
      const series1 = [];
      const series2 = [];
      const series3 = [0, 0];

      for (let i = 1; i <= inputNumber; i++) {
        series1.push(i ** 2);
      }

      for (let i = 0; i < inputNumber; i++) {
        series2.push(i * i + 1);
      }

      for (let i = 2; i <= inputNumber; i++) {
        const currentNumber = series3[i - 1] + series3[i - 2] + 1;
        series3.push(currentNumber);
      }

      setNumberSeries1(series1);
      setNumberSeries2(series2);
      setNumberSeries3(series3);
    } else {
      alert('Harap memasukkan bilangan angka');
    }
  };

  return (
    <div>
      <label htmlFor="numberInput">Jumlah bilangan yang akan ditampilkan : </label>
      <input
        type="number"
        id="numberInput"
        value={numberInput}
        onChange={handleInputChange}
      />
      <button onClick={generateNumberSeries}>Generate!</button>

      <div>
        <p>Deret Angka 1: </p>
        {numberSeries1.map((number) => (
          <span key={number}> {number}, </span>
        ))}
      </div>

      <div>
        <p>Deret Angka 2: </p>
        {numberSeries2.map((number) => (
          <span key={number}> {number}, </span>
        ))}
      </div>

      <div>
        <p>Deret Angka 3: </p>
        {numberSeries3.map((number) => (
          <span key={number}> {number}, </span>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default DeretAngkaComponent;