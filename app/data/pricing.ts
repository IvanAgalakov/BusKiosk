export interface Price {
    code: string;
    value: number;
  }
  
  export const prices: Price[] = [
    {
      code: 'SingleAdult',
      value: 3.70,
    },
    {
        code: 'SingleYouth',
        value: 2.50,
    },
    {
        code: 'DailyAdult',
        value: 11.60,
    },
    {
        code: 'DailyYouth',
        value: 8.50,
    },
    {
        code: 'WeeklyAdult',
        value: 30,
    },
    {
        code: 'WeeklyYouth',
        value: 20,
    },
    {
        code: 'MonthlyAdult',
        value: 115.0,
    },
    {
        code: 'MonthlyYouth',
        value: 82.0,
    },
  ];

  export const getPrice = (code: string): number | undefined => {
    const price = prices.find(p => p.code === code);
    return price?.value;
  };