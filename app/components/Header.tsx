import { translate } from "../data/translate";

interface HeaderProps {
  text: string;
  language: string;
  svg?: React.ReactNode;
}

export default function Header({ text, language, svg }: HeaderProps) {
  return (
    <div className="absolute z-10 top-4">
      <div className="bus-button text-3xl flex flex-row items-center space-x-3 bg-gray-500 rounded-none text-black outline-1 hover:bg-gray-500">
        {svg && <div className="svg-container">{svg}</div>}
        <p>{translate(text, language)}</p>
      </div>
    </div>
  );
}
