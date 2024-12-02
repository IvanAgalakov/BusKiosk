interface HCHomeButtonProps {
    onClick?: () => void;
    href?: string;
  }
  
  export default function HCHomeButton({ onClick, href }: HCHomeButtonProps) {
    return (
        <input  className = "search-bar w-4/5 h-20 top-44 absolute p-4" placeholder = "Search" >
                </input>
    );
  }