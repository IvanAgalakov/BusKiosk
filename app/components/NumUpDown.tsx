import { translate } from "../data/translate";

interface NumUpDownProps {
    onClickUp: () => void;
    onClickDown: () => void;
    title: string;
    subtitle?: string;
    value: number;
    language: string;
  }
  
  export default function NumUpDown({ onClickUp, onClickDown, title, value, subtitle, language }: NumUpDownProps) {
    return (
        <div className=" mt-10 ml-10 flex flex-row items-center">
        <div className="flex-col">
            <div>
            {translate(title, language)}:
            </div>
            <div>
            {subtitle}
            </div>
        </div>
        <div className="flex flex-col ml-20 items-center">
        <button className="bus-button p-1 rounded-none w-20 h-16 flex flex-row justify-center items-center" onClick={onClickUp}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
        </button>
        <div className=" mt-3 mb-3">
            {value}
        </div>
        <button className="bus-button p-1 rounded-none w-20 h-16 flex flex-row justify-center items-center" onClick={onClickDown}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </button>
        </div>
        </div>
    );
  }