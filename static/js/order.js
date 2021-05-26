Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    
    Chart.defaults.global.defaultFontColor = '#292b2c';
    
    var ctx = document.getElementById("myBarChart");
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["OTT", "ITT", "TLB", "Bill Pay", "Other Service Fee", "CBX Relate Fee"],
        datasets: [{
          label: "Jtrust Service Offer",
          backgroundColor: "rgba(2,117,216,1)",
          borderColor: "rgba(2,117,216,1)",
          data: [100, 100, 150, 150, 50, 0],
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'Services'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });
    
    // Configure Pusher instance
    const pusher = new Pusher('2690251fcfe4d024df15', {
        cluster: 'ap1',
        encrypted: true
    });
    
    // Subscribe to poll trigger
    var orderChannel = pusher.subscribe('order');
    
    // Listen to 'order placed' event
    var order = document.getElementById('order-count')
    orderChannel.bind('place', function(data) {
      myLineChart.data.datasets.forEach((dataset) => {
          dataset.data.fill(parseInt(data.units),-1);
      });
      myLineChart.update();
      order.innerText = parseInt(order.innerText)+1
    });
var ctx1 = document.getElementById("myAreaChart");
var mylineChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.😎",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [100, 300, 900, 700, 400, 1200, 1500, 1700, 1300, 2300, 2500, 2700, 3000],
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
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 5000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});