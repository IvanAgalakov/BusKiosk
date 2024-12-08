export interface Destinations {
    value: string;
    label: string;
    routes: [string, string][];
  }
  
  export const destinations: Destinations[] = [
    {
        value:"chinookmall",
        label: "Chinook Mall",
        routes: [["301 → 42" , "/flower.jpg"], 
            ["2 → 9" , "/flower.jpg"]]
    },
    {
        value: "glenbowmuseum",
        label: "Glenbow Museum",
        routes: [["24 → 52" , "/flower.jpg"], 
            ["2 → 9" , "/flower.jpg"]]           
    }
  ];