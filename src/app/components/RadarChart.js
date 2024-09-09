"use client"

import { useRef, useEffect } from "react"
import { Chart } from "chart.js/auto"
import skills from '../../data/skills.json' 

export default function RadarChart(){
    const chartRef = useRef(null)
    useEffect(()=>{
        if(chartRef.current){
            if(chartRef.current.chart){
                chartRef.current.chart.destroy()
            }
            const context = chartRef.current.getContext("2d");

            const newChart = new Chart(context, {
                type:"radar",
                data:{
                    responsive:true,
                    labels: skills.labels,
                    datasets: [
                        {
                        label: 'Expertise',
                        data: skills.data,
                        fill:true,
                        backgroundColor: 'rgba(255, 205, 100, 0.1)',
                        borderColor: 'rgba(255, 205, 100, 1)',
                        borderWidth: 3,
                        },
                    ],
                },
                options : {

                    plugins:{
                        legend: { display: false }, 
                        title: {
                            display: true,
                            text: 'Expertise',
                            color:'rgba(255, 205, 100, 1)'
                        },
                        
                    },
                    elements:{
                        point:{
                            radius : 2,
                        }
                    },
                    scales:{
                        r:{
                            angleLines:{
                                color:'rgba(255, 255, 255, 0.5)'
                            },
                            grid:{
                                color:'rgba(255, 255, 255, 0.5)'
                            },
                            ticks:{
                                display:false
                            },
                            beginAtZero:true,
                            
                        },                    
                    },
                    scale:{
                        pointLabelFontColor:'red'  ,                    
                    }
                    
                }               
            }) ;
            chartRef.current.chart = newChart;
        }
    })
    return (
        <>
            <canvas ref={chartRef} />
        </>
    )
}