import { useState } from 'react';

const InputPenghitung = () => {
  const [inputString, setInputString] = useState('');
  const [characterCounts, setCharacterCounts] = useState({});

  const trigger = (event) => {
    const newInputString = event.target.value;
    setInputString(newInputString);

    // Count the occurrences of each character in the new input string
    const newCharacterCounts = {};
    for (const char of newInputString) {
      if (newCharacterCounts[char]) {
        newCharacterCounts[char]++;
      } else {
        newCharacterCounts[char] = 1;
      }
    }

    setCharacterCounts(newCharacterCounts);
  };

  return (
    <div className='space-jawaban'>
      <input type="text" value={inputString} onChange={trigger} />
      <button onClick={trigger}>reset</button>
      <table>
        <thead>
          <tr>
            <th>Jumlah</th>
            <th>Karakter : </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(characterCounts).map((char) => (
            <tr key={char}>
              <td>{char}</td>
              <td>{characterCounts[char]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InputPenghitung;