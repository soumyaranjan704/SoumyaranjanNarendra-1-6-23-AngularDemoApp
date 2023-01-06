import { Component, OnInit } from '@angular/core';
import CanvasJS from 'src/assets/scripts/canvasjs.min.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer",{
			theme: "dark1", 
      title: {
        text: "Basic Column Chart "
      },
      data: [
        {
          type: "column", 
          dataPoints: [
            { label: "apple", y: 10 },
            { label: "orange", y: 15 },
            { label: "banana", y: 25 },
            { label: "mango", y: 30 },
            { label: "grape", y: 28 }
          ]
        }
      ]
		});
    chart.render();

    // let chart1 = new CanvasJS.Chart("chartContainer1",{
    //   theme: "dark2",
    // title:{
    //   text: "Gaming Consoles Sold in 2012"
    // },		
    // data: [
    // {       
    //   type: "pie",
    //   showInLegend: true,
    //   toolTipContent: "{y} - #percent %",
    //   yValueFormatString: "#,##0,,.## Million",
    //   legendText: "{indexLabel}",
    //   dataPoints: [
    //     {  y: 4181563, indexLabel: "PlayStation 3" },
    //     {  y: 2175498, indexLabel: "Wii" },
    //     {  y: 3125844, indexLabel: "Xbox 360" },
    //     {  y: 1176121, indexLabel: "Nintendo DS"},
    //     {  y: 1727161, indexLabel: "PSP" },
    //     {  y: 4303364, indexLabel: "Nintendo 3DS"},
    //     {  y: 1717786, indexLabel: "PS Vita"}
    //   ]
    // }
    // ]
    // });
    // chart1.render();
    let chart1 = new CanvasJS.Chart("chartContainer1",{
			theme: "dark1", 
      title: {
        text: "Basic Column Chart "
      },
      data: [
        {
          type: "pie", 
          dataPoints: [
            { label: "apple", y: 10 },
            { label: "orange", y: 15 },
            { label: "banana", y: 25 },
            { label: "mango", y: 30 },
            { label: "grape", y: 28 }
          ]
        }
      ]
		});
    chart1.render();

    let chart2 = new CanvasJS.Chart('chartContainer3', {
      theme: 'dark2', 
      title: {
        text: 'Basic Area Chart',
      },
      data: [
        {
          type: 'area', 
          dataPoints: [
            { newlabel: 'apple', y: 10 },
            { newlabel: 'orange', y: 15 },
            { newlabel: 'banana', y: 25 },
            { newlabel: 'mango', y: 30 },
            { newlabel: 'grape', y: 28 },
          ],
        },
      ],
    });
    chart2.render();

    let chart3 = new CanvasJS.Chart('chartContainer4', {
      theme: 'light1', 
      title: {
        text: 'Basic Bar Chart',
      },
      data: [
        {
          type: 'bar', 
          dataPoints: [
            { newlabel1: 'apple', y: 10 },
            { newlabel1: 'orange', y: 15 },
            { newlabel1: 'banana', y: 25 },
            { newlabel1: 'mango', y: 30 },
            { newlabel1: 'grape', y: 28 },
          ],
        },
      ],
    });
    chart3.render();


    let chart4 = new CanvasJS.Chart('chartContainer5', {
      theme: 'dark1', 
      title: {
        text: 'Basic Spline Chart',
      },
      data: [
        {
          type: 'spline', 
          dataPoints: [
            { label: 'apple', y: 10 },
            { label: 'orange', y: 15 },
            { label: 'banana', y: 25 },
            { label: 'mango', y: 30 },
            { label: 'grape', y: 28 },
          ],
        },
      ],
    });
    chart4.render();
  }
  }
    


  

  



