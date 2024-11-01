import { NextResponse } from 'next/server';

export async function GET() {
  const now = new Date();
  const mstTime = now.toLocaleString('en-US', {
    timeZone: 'America/Denver',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  const [time, period] = mstTime.split(' ');

  return NextResponse.json({ time, period });
}