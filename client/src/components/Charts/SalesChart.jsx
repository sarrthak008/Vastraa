import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
  {
    name: 'jan',
    sale: 4000,
  },
  {
    name: 'feb',
    sale: 3000,
  },
  {
    name: 'mar',
    sale: 2000,
  },
  {
    name: 'apr',
    sale: 2780,
  },
  {
    name: 'may',
    sale: 1890,
  },
  {
    name: 'jun',
    sale: 2390,
  },
  {
    name: 'jul',
    sale: 3490,
  }, 
  {
    name: 'aug',
    sale: 3000,
  },
  {
    name: 'sept',
    sale: 2000,
  },
  {
    name: 'oct',
    sale: 2780,
  },
  {
    name: 'nov',
    sale: 1890,
  },
  {
    name: 'dec',
    sale: 2390,
  }
];



const SalesChart = () => {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '50vw', maxHeight: '70vh', aspectRatio:1.8 }}
      responsive
      data={data}
      margin={{
        top: 10,
        right: 10,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Line type="monotone" dataKey="sale" stroke="oklch(62.7% 0.265 303.9) " strokeWidth={2}/>
    </LineChart>
  );
}

export default SalesChart