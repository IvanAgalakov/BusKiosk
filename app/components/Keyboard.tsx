import React from "react";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress }) => {

  const keys = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M",
    "←", "Space", "Enter"
  ];

  const handleKeyPress = (key: string) => {
    if (key === "←") {
      onKeyPress("Backspace"); 
    } else if (key === "Space") {
      onKeyPress(" "); 
    } else {
      onKeyPress(key); 
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        gap: "5px",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "10px",
        maxWidth: "650px",
        margin: "20px auto",
      }}
    >
      {keys.map((key, index) => (
        <button
          key={index}
          onClick={() => handleKeyPress(key)}
          style={{
            padding: "15px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#000000",
            color: "#fff", 
            cursor: "pointer",
          }}
        >
          {key === "Space" ? "Space" : key} {}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
