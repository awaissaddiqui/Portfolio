import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Colors } from 'chart.js';

Chart.register(Colors);
const ChartD = () => {
     const state = {
          labels: ['React', 'JavaScript', 'MongoDb', 'Node JS', 'Python', 'MySQL', 'Postman', 'Material UI', 'GitHub'],
          datasets: [
               {
                    label: 'Skills',
                    data: [15, 15, 8, 10, 8, 6, 9, 8, 10],
                    backgroundColor: [
                         'rgb(57, 193, 215)',
                         'rgb(255, 214, 0)',
                         'rgb(76, 175, 80)',
                         'rgb(55, 71, 79)',
                         'rgb(2, 119, 189)',
                         'rgb(245, 127, 23)',
                         'rgb(237, 120, 153)',
                         'rgb(2, 136, 209)',
                         'rgb(10, 0, 0)',
                    ],
                    borderWidth: 1,
               },
          ],

     };
     const options = {
          plugins: {
               display: true,
               position: "bottom"
          },
          title: {
               text: "Just testing...",
               display: true,
               fontSize: 50
          }
     }
     return (
          <div>
               <Pie
                    data={state}
                    options={options} />
          </div>
     )
}

export default ChartD