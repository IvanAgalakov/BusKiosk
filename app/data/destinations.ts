export interface Destinations {
    value: string;
    label: string;
    mapPath: string;
    route: string;
  }
  
  export const destinations: Destinations[] = [
    {
        value:"chinookmall",
        label: "Chinook Mall",
        mapPath: "/flower.jpg",
        route: "301 -> 42",
    },
    {
        value: "glenbowmuseum",
        label: "Glenbow Museum",
        mapPath: "/flower.jpg",
        route: "24 -> 52",
    },
    {
        value: "jim",
        label: "Jim",
        mapPath: "/flower.jpg",
        route: "24 -> 6",
    },

  ];