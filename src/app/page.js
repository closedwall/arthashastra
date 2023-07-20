"use client";
import Table from "@/components/Table";
import '../styles/index.css'
import LineChart from "@/components/LineChart";
import { useState } from "react";


export default function Home() {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const showTable = () =>{
    if(!isTableVisible){
      setIsTableVisible(true);
    }
  }
  const showLineChart = () =>{
    if(isTableVisible){
    setIsTableVisible(false);
    }
  }

  return (
    <main>
    <div className="fixed-box">
      <span>Rajesh yadav</span>
      <a href="mailto:yadavrajesh5612@gmail.com">yadavrajesh5612@gmail.com</a>
      <a href="tel:+917580987948">+917580987948</a>
    </div>
      <nav>
        <div className="nav">
          <ul>
            <li onClick={showTable} className={isTableVisible?'active':''}>Table</li>
            <li onClick={showLineChart} className={!isTableVisible?'active':''}>Line Chart</li>
          </ul>
        </div>
      </nav>
      <div className={`component-container ${isTableVisible?'table':'line-chart'}`}>
        {isTableVisible? <Table />:<LineChart />}
      </div>
    </main>
  );
}
