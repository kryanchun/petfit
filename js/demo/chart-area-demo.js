// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["6:00 am", "6:30 am", "7:00 am", "7:30 am", "8:00 am","8:30 am", 
    "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm",
    "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm", "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm", "6:00 pm"],
    datasets: [{
      label: "Heart Rate",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      label: 'Heart Rate',
      yAxisID: 'heartbeat',
      data: [190, 185, 145, 140, 155, 160, 187, 188, 190, 260, 250, 150, 140, 190, 200, 220, 203, 205, 198, 150, 160, 165, 182, 200, 258],
    },
    {
      label: "Temperature",
      lineTension: 0.3,
      backgroundColor: "rgba(255,0,0,0.2)",
      borderColor: "rgba(255,0,0,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(255,0,0,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255,0,0,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      label: 'Temperature',
      yAxisID: 'temperature',
      data: [100.5, 100.9, 102.5, 102.7, 102.9, 101.2, 100.2, 100.9, 101.2, 100.7, 100.7, 101.2, 101.6, 101.4, 101.2, 103.0, 100.3, 100.5, 100.7, 100.2, 101.3, 100.7, 101.1, 100, 100.2],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 20
        }
      }],
      yAxes: [{
        id: 'heartbeat',
        ticks: {
          min: 100,
          max: 300,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        },
        position: 'left'
      },
      {
        id: 'temperature',
        ticks: {
          min: 99,
          max: 104,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        },
        position: 'right'
      }],
    },
    legend: {
      display: false
    }
  }
});
