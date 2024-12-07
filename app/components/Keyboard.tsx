import React, { useState } from "react";
import Key from "@/app/components/Key";

interface KeyboardProps {
  onInputChange?: (value: string) => void; // Callback to update the parent state
  onEnterPress?: () => void;  // Callback for the enter key
}

export default function Keyboard({ onInputChange, onEnterPress }: KeyboardProps) {
  const [word, setWord] = useState("");

  // Function to handle adding letters to the input
  function addLetter(letter: string) {
    const updatedWord = word + letter;
    setWord(updatedWord);
    if (onInputChange) onInputChange(updatedWord);  // Update the parent with typed word
  }

  function handleBackspace() {
    const updatedWord = word.slice(0, -1);
    setWord(updatedWord);
    if (onInputChange) onInputChange(updatedWord);
  }

  function handleEnter() {
    if (onEnterPress) onEnterPress();
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-200 p-4 z-50">
      <div className="grid grid-rows-5 gap-4 place-items-center"> {/* Adjusted grid for better spacing */}
        {/* Number row */}
        <div className="flex gap-2 justify-center">
          {"1234567890".split("").map((number) => (
            <Key key={number} keyLetter={number} onClick={() => addLetter(number)} />
          ))}
        </div>
        {/* Letter rows */}
        <div className="flex gap-2 justify-center">
          {"QWERTYUIOP".split("").map((letter) => (
            <Key key={letter} keyLetter={letter} onClick={() => addLetter(letter)} />
          ))}
        </div>
        <div className="flex gap-2 justify-center">
          {"ASDFGHJKL".split("").map((letter) => (
            <Key key={letter} keyLetter={letter} onClick={() => addLetter(letter)} />
          ))}
        </div>
        <div className="flex gap-2 justify-center">
          {"ZXCVBNM".split("").map((letter) => (
            <Key key={letter} keyLetter={letter} onClick={() => addLetter(letter)} />
          ))}
        </div>
        {/* Action buttons */}
        <div className="flex gap-4 justify-center">
          <button onClick={handleBackspace} className="w-20 h-12 bg-black text-white rounded">
            <span style={{ fontSize: "18px" }}>Back</span>
          </button>
          <button onClick={() => addLetter(" ")} className="w-20 h-12 bg-black text-white rounded">
            <span style={{ fontSize: "18px" }}>Space</span>
          </button>
          <button onClick={handleEnter} className="w-20 h-12 bg-black text-white rounded">
            <span style={{ fontSize: "18px" }}>Enter</span>
          </button>
        </div>
      </div>
    </div>
  );
}
