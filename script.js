console.log("working")

src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"

const xValues = ["Jan","Feb","Mar","Apr","May"];
        
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{ 
          data: [860,1140,1060,1060,1070,1110,1330,2210],
          borderColor: "red",
          fill: false
        }]
      },
      options: {
        legend: {display: false},
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
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                      return '';
                  },
              },
              gridLines: {
                  display: false,
                  drawBorder: false,
              },
          }],
      },
      }
    });


    const labels = ["Yesterday", "Today"];
    new Chart("Chart", {
        type: "line",
        data: {
          labels: labels,
          datasets: [{
            data: [65, 159],
            backgroundColor: [
              'rgb(39, 161, 165,0.2);',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
            ],
            borderWidth: 1
          }]
        },
        
        options: {
          legend: {display: false},
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
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return '';
                    },
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
            }],
        },
        }
      });
  