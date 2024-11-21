import { translate } from "../data/translate";

interface HeaderProps {
    text: string,
    language: string;
  }
  
  export default function Header({ text, language }: HeaderProps) {
    return (
      <div className=" text-4xl absolute top-4 p-4 rounded-none text-black bg-gray-400 w-[15rem] text-center shadow-xl">
        {translate(text, language)}
      </div>
    );
  }