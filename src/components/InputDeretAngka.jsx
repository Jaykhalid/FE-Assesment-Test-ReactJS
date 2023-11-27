import { useState } from 'react';

const DeretAngkaComponent = () => {
  const [inputValue, setInputValue]   = useState('');
  const [deretAngka1, setDeretAngka1] = useState([]);
  const [deretAngka2, setDeretAngka2] = useState([]);
  const [deretAngka3, setDeretAngka3] = useState([]);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const generateDeretAngka = () => {
    const nilaiAwal = parseInt(inputValue);
    if (!isNaN(nilaiAwal)) {
      const deret1 = [];
      const deret2 = [];
      const deret3 = [0, 0];

      for (let i = 1; i <= nilaiAwal; i++) {
        deret1.push(i ** 2);
      }

      for (let i = 0; i < nilaiAwal; i++) {
        deret2.push(i * i + 1);
      }

      for (let i = 2; i <= nilaiAwal; i++) {
        const hasilKalkulasi = deret3[i - 1] + deret3[i - 2] + 1;
        deret3.push(hasilKalkulasi);
      }

      setDeretAngka1(deret1);
      setDeretAngka2(deret2);
      setDeretAngka3(deret3);
    } else {
      alert('Harap memasukkan bilangan angka ');
    }
  };

  return (
    <div className='space-jawaban'>
      <label htmlFor="inputValue">Jumlah bilangan yang akan ditampilkan : </label>
      <input
        type="number"
        id="inputValue"
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <button className='generate' onClick={generateDeretAngka}>Generate!</button>

      <div>
        <p>Deret Angka 1 : </p>
        {deretAngka1.map((number) => (
          <span key={number}> {number}, </span>
        ))}
      </div>

      <div>
        <p>Deret Angka 2 : </p>
        {deretAngka2.map((number) => (
          <span key={number}> {number}, </span>
        ))}
      </div>

      <div>
        <p>Deret Angka 3 : </p>
        {deretAngka3.map((number) => (
          <span key={number}> {number}, </span>
        ))}
      </div>
    </div>
  );
};

export default DeretAngkaComponent;