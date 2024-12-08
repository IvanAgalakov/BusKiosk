export interface Destinations {
    value: string;
    label: string;
    routes: [string, string][];
  }
  
  export const destinations: Destinations[] = [
    {
        value:"chinookmall",
        label: "Chinook Mall",
        routes: [["301 → 42" , "/mapa-esquematico-santiago-1200x584.jpg"], 
            ["2 → 9" , "/flower.jpg"]]
    },
    {
        value: "glenbowmuseum",
        label: "Glenbow Museum",
        routes: [["24 → 52" , "/mapa-esquematico-santiago-1200x584.jpg"], 
            ["2 → 9" , "/flower.jpg"]]           
    }
  ];

  //https://digitaltransport4africa.org/creer-une-carte-de-transports/