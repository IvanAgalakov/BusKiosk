import { useState } from "react";

interface SearchProps {
    onClick?: () => void;
    inputText: string;
    href?: string;
  }
  
  export default function SearchButton({ onClick, href, inputText }: SearchProps) {
    const [word, setWord] = useState("")

    return (
      <input value={inputText} onClick={onClick} className = "search-bar w-4/5 h-20 top-44 absolute p-4" placeholder = "Search" >
      </input>
    );
  }