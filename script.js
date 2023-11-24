console.log("working")

src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"

const xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        label: 'MEMBER LOGS',
        data: [860, 1200, 2000, 140, 1060, 200, 2000, 1070, 1110, 1330, 2210],
        borderColor: "red",
        pointRadius: 0,
        fill: true,
        backgroundColor: createGradient(),
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return '';
            },
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (data, index, values) {
              return '';
            },
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
    tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return tooltipItem.yLabel; // Display only the y-axis value
        },
      },
    },
  },
});

function createGradient() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var gradient = ctx.createLinearGradient(0, 300, 0, 0);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(1, "rgba(255, 0, 0, 0.2)");
  return gradient;
}


function createGradient() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var gradient = ctx.createLinearGradient(0, 300, 0, 0); // Adjust the gradient length as needed
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)"); // White at the bottom
  gradient.addColorStop(1, "rgba(255, 0, 0, 0.2)");   // Red at the top
  return gradient;
}



const labels = ["Yesterday", "Today"];
new Chart("Chart", {
    type: "line",
    data: {
        labels: labels,
        datasets: [{
            data: [65, 159],
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            fill: false,
            pointRadius: 5,
            pointBorderWidth: 3, // Adjust the width of the border around the data points
            borderDash: [],
            backgroundColor: 'rgba(0, 0, 0, 0)',
        }, {
            data: [65, 159],
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgb(255, 159, 64)',
            borderWidth: 1,
            fill: true,
        }]
    },

    options: {
        legend: { display: false },
        scales: {
            yAxes: [{
                gridLines: {
                    color: 'transparent'
                }
            }],
            xAxes: [{
                gridLines: {
                    color: 'transparent'
                }
            }]
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    return tooltipItem.yLabel;
                }
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function (value, index, values) {
                        return '';
                    },
                },
                gridLines: {
                    display: false,
                    drawBorder: true,
                },
            }],
        },
    }
});

// For sliders
// Example data (you can replace this with your actual data)
const yesterdayData = 60; // Assuming yesterday's data is 20
const todayData = 80; // Assuming today's data is 45

// Get the elements
const yesterdayElement = document.querySelector('.vertical-slider-yesterday');
const todayElement = document.querySelector('.vertical-slider-today');

// Set the height based on the data
yesterdayElement.style.height = `${Math.min(yesterdayData, 100)}%`;
todayElement.style.height = `${Math.min(todayData, 100)}%`;

  