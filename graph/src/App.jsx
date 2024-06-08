import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,Tooltip,AreaChart,Area,Bar,BarChart} from 'recharts'

const pdata=[
  {
    name:'Python',
    student:13,
    fees:10
  },{
    name:'JS',
    student:15,
    fees:12
  },{
    name:'Java',
    student:10,
    fees:5
  },
  {
    name:'C#',
    student:9,
    fees:4
  },
  {
    name:'PHP',
    student:9,
    fees:8
  },{
    name:'C++',
    student:13,
    fees:20
  }
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='chart-heading'>Line Chart</h1>
       <ResponsiveContainer width="100%" aspect={3}>
        <CartesianGrid strokeDasharray="3 3"/>
        <LineChart data={pdata} width={500} height={300} margin={{top:5,right:30,left:20,bottom:5}}>
          <XAxis dataKey={name} interval={'preserveStartEnd'}tickFormatter={(value)=>value+"Programmaing"

          }/>
          <YAxis/>
          <Tooltip contentStyle={{backgroundColor:'yellowgreen'}}/>
          <Legend/>
           <Line type="monotone" dataKey="student" stroke='red' activeDot={{r:8}}/>
           <Line type="monotone" dataKey="fees" stroke='green'activeDot={{r:8}}/>
        </LineChart>

       </ResponsiveContainer>
       <h1 className='chart-heading'>AreaChart</h1>
       <ResponsiveContainer width={"100%"} aspect={3}>
        <AreaChart width={500}
        height={300}
        data={pdata}
        margin={{
          top:5,
          right:30,
          left:20,
          bottom:5,
        }}>
          <CartesianGrid strokeDasharray={"3 3"}/>
          <XAxis dataKey={"name"}/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Area type={"monotone"} dataKey={"student"} stroke='#8884d8' fill="#8884d8"></Area>
        </AreaChart>

       </ResponsiveContainer>
       <h1 className='chart-heading'>BarChart</h1>
       <ResponsiveContainer width={"100%"} aspect={3}>
        <BarChart width={500}
        height={300}
        data={pdata}
        margin={{
          top:5,
          right:30,
          left:20,
          bottom:5,
        }}>
          <CartesianGrid strokeDasharray={"3 3"}/>
          <XAxis dataKey={"name"}/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey={"student"} fill="#8884d8"/>
          <Bar dataKey={"fee"} fill="#82ca9d"/>
        </BarChart>

       </ResponsiveContainer>
    </>

  )
}

export default App
