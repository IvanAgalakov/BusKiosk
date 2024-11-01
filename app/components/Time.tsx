import { useState, useEffect } from 'react';

export default function TimeDisplay() {
  const [time, setTime] = useState('');
  const [period, setPeriod] = useState('');

  const fetchTime = async () => {
    try {
      const response = await fetch('/api/time');
      const data = await response.json();
      setTime(data.time);
      setPeriod(data.period.toLowerCase());
    } catch (error) {
      console.error('Error fetching time:', error);
    }
  };

  useEffect(() => {
    fetchTime();
    // Update every minute
    const interval = setInterval(fetchTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-28 right-4 flex flex-row text-4xl space-x-3">
      <p>{time}</p>
      <p>{period}</p>
    </div>
  );
}