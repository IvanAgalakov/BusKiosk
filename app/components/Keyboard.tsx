import Key from "@/app/components/Key";
import { useState } from "react";

//THERE MUST BE A BETTER WAY TO DO THIS (NO DUPLICATES OF KEYLETTER)
interface KeyboardProps {
    
    typedWord?: string;
    href?: string;
  }
  
  export default function Keyboard({ href }: KeyboardProps) {
    const [word, setWord] = useState("")
    function addLetter(letter:string) {
        setWord(word => word + letter)
    }
    
    const [keyboardVisible, setKeyboardVisible] = useState(false)
    
    return (
        <div>
                <input onClick = {() => setKeyboardVisible(true)} value={word} className = "search-bar w-4/5 h-20 top-44 absolute p-4" placeholder = "Search" >
                </input>
            {keyboardVisible &&
            <div className="grid grid-rows-3 gap-4 place-content-center h-20 md:auto-rows-min">
                <div>
                    <Key keyLetter="Q" onClick={() => addLetter("Q")}></Key>
                    <Key keyLetter="W" onClick={() => addLetter("W")}></Key>
                    <Key keyLetter="E" onClick={() => addLetter("E")}></Key>
                    <Key keyLetter="R" onClick={() => addLetter("R")}></Key>
                    <Key keyLetter="T" onClick={() => addLetter("T")}></Key>
                    <Key keyLetter="Y" onClick={() => addLetter("Y")}></Key>
                    <Key keyLetter="U" onClick={() => addLetter("U")}></Key>
                    <Key keyLetter="I" onClick={() => addLetter("I")}></Key>
                    <Key keyLetter="O" onClick={() => addLetter("O")}></Key>
                    <Key keyLetter="P" onClick={() => addLetter("P")}></Key>
                </div>
                <div className = "px-3">
                    <Key keyLetter="A" onClick={() => addLetter("Q")}></Key>
                    <Key keyLetter="S" onClick={() => addLetter("W")}></Key>
                    <Key keyLetter="D" onClick={() => addLetter("E")}></Key>
                    <Key keyLetter="F" onClick={() => addLetter("R")}></Key>
                    <Key keyLetter="G" onClick={() => addLetter("T")}></Key>
                    <Key keyLetter="H" onClick={() => addLetter("Y")}></Key>
                    <Key keyLetter="J" onClick={() => addLetter("U")}></Key>
                    <Key keyLetter="K" onClick={() => addLetter("I")}></Key>
                    <Key keyLetter="L" onClick={() => addLetter("O")}></Key>
                </div>
                <div className = "px-8">
                    <Key keyLetter="Z" onClick={() => addLetter("Q")}></Key>
                    <Key keyLetter="X" onClick={() => addLetter("W")}></Key>
                    <Key keyLetter="C" onClick={() => addLetter("E")}></Key>
                    <Key keyLetter="V" onClick={() => addLetter("R")}></Key>
                    <Key keyLetter="B" onClick={() => addLetter("T")}></Key>
                    <Key keyLetter="N" onClick={() => addLetter("Y")}></Key>
                    <Key keyLetter="M" onClick={() => addLetter("U")}></Key>
                </div>
            </div>
            }
        </div>
    );
  }