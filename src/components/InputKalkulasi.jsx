import { useState } from 'react';

function App() {
  const [numbersString, setNumbersString] = useState('');
  const [stats, setStats] = useState({
    average: null,
    highestValue: null,
    lowestValue: null,
  });

  const handleInputChange = (event) => {
    setNumbersString(event.target.value);
  };

  const calculateStats = () => {
    const numbers = numbersString.split(',').map((number) => parseInt(number));

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const averageValue = sum / numbers.length;

    const highest = Math.max(...numbers);
    const lowest = Math.min(...numbers);

    const newStats = {
      average: averageValue,
      highestValue: highest,
      lowestValue: lowest,
    };

    setStats(newStats);
  };

  return (
    <div className='space-jawaban'>
      <label>Masukkan bilangan deret angka (dipisahkan oleh spasi/koma) : </label>
      <input type="text" value={numbersString} onChange={handleInputChange} />
      <button className='generate' onClick={calculateStats}> Hitung hasilnya </button>
      {stats.highestValue && <p>Nilai terbesar : {stats.highestValue}</p>}
      {stats.lowestValue && <p>Nilai terkecil  : {stats.lowestValue}</p>}
      {stats.average && <p>Nilai Rata-rata : {stats.average}</p>}
    </div>
  );
}

export default App;