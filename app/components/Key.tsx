import { useState } from "react";

interface KeyProps {
    keyLetter: string;
    href?: string;
    onClick?: () => void;
  }
  
  export default function Key({href, keyLetter, onClick}: KeyProps) {
    
    return (
        <button onClick={onClick}>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">{keyLetter}</kbd>
        </button>
    );
}