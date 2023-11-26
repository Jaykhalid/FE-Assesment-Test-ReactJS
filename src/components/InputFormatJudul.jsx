import { useState } from 'react';

const InputFormatJudul = () => {
  // Define state variables to hold the input string and formatted strings
  const [inputString, setInputString] = useState('');
  const [formattedString1, setFormattedString1] = useState('');
  const [formattedString2, setFormattedString2] = useState('');
  
  // Handle input change events
  const trigger = (event) => {
    // Get the new input string from the event
    const newInputString = event.target.value;  
    
    // Update the input string state
    setInputString(newInputString);

    // Format the input string: convert to lowercase, remove punctuation, and capitalize first letter of each word
    const formattedString1 = newInputString
      .toLowerCase()                                         // Converts the entire string to lowercase.
      .replace(/[^a-z0-9\s]/g, '')                          // Removes all punctuation symbols using regular expressions.
      .replace(/(\b\w)/g, (match) => match.toUpperCase()); // Capitalizes the first letter of each word using regular expressions.

    // Create a second formatted string by replacing spaces with stripes
    const formattedString2 = formattedString1.replace(/\s/g, '-');
  
    // Update the formatted string states
    setFormattedString1(formattedString1);
    setFormattedString2(formattedString2);
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your string"
        onChange={trigger}
        value={inputString}
      />
      <button onClick={trigger}>reset</button>
      <p>{formattedString1}</p>
      <p>{formattedString2}</p>
    </div>
  );
};
export default InputFormatJudul;