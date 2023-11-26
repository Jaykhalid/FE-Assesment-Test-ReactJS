import { useState } from 'react';

const DeretAngka1 = () => {
  const [numberInput, setNumberInput] = useState('');
  const [numberSeries, setNumberSeries] = useState([]);

  const handleInputChange = (event) => {
    setNumberInput(event.target.value);
  };

  const generateNumberSeries = () => {
    const inputNumber = parseInt(numberInput);
    if (!isNaN(inputNumber) && inputNumber > 0) {
      const series = [];
      for (let i = 1; i <= inputNumber; i++) {
        series.push(i ** 2);
      }
      setNumberSeries(series);
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
        {numberSeries.map((number) => (
          <span key={number}> {number}, </span>
        ))}
      </div>
      <hr />
    </div>
  );
};

const DeretAngka2 = () => {
  const [numberInput, setNumberInput] = useState('');
  const [numberSeries, setNumberSeries] = useState([]);

  const handleInputChange = (event) => {
    setNumberInput(event.target.value);
  };

  const generateNumberSeries = () => {
    const inputNumber = parseInt(numberInput);
    if (!isNaN(inputNumber) && inputNumber >= 0) {
      const series = [];
      for (let i = 0; i < inputNumber; i++) {
        series.push(i * i + 1);
      }
      setNumberSeries(series);
    } else {
      alert('Harap memasukkan bilangan angka')
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
        {numberSeries.map((number) => (
          <span key={number}> {number}, </span>
        ))}
      </div>
      <hr />
    </div>
  );
};

const DeretAngka3 = () => {
  const [numberInput, setNumberInput] = useState('');
  const [numberSeries, setNumberSeries] = useState([]);

  const handleInputChange = (event) => {
    setNumberInput(event.target.value);
  };

  const generateNumberSeries = () => {
    const inputNumber = parseInt(numberInput);
    if (!isNaN(inputNumber)) {
      const series = [0, 0];
      for (let i = 2; i <= inputNumber; i++) {
        const currentNumber = series[i - 1] + series[i - 2] + 1;
        series.push(currentNumber);
      }
      setNumberSeries(series);
    } else {
      alert('Harap memasukkan bilangan angka')
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
          {numberSeries.map((number, index) => (
            <span key={index}> {number}, </span>
          ))}
        </div>
    </div>
  );
};

export {DeretAngka1, DeretAngka2, DeretAngka3};