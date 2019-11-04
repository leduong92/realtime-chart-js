var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [],
            label: 'Buy',                     // 'buy' price data
            borderColor: 'rgb(255, 99, 132)', // line color
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // fill color
            fill: false,                      // no fill
            lineTension: 0                    // straight line
        }, {
            data: [],
            label: 'Sell',                    // 'sell' price data
            borderColor: 'rgb(54, 162, 235)', // line color
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // fill color
            fill: false,                      // no fill
            lineTension: 0                    // straight line
        }]
    },
    options: {
        title: {
            text: 'BTC/USD (' + 1 + ')', // chart title
            display: true
        },
        scales: {
            xAxes: [{
                type: 'realtime' // auto-scroll on X axis
            }]
        },
        plugins: {
            streaming: {
                duration: 300000, // display data for the latest 300000ms (5 mins)
                onRefresh: function(chart) { // callback on chart update interval
                    Array.prototype.push.apply(
                        chart.data.datasets[0].data, buf[id][0]
                    );            // add 'buy' price data to chart
                    Array.prototype.push.apply(
                        chart.data.datasets[1].data, buf[id][1]
                    );            // add 'sell' price data to chart
                    buf[id] = [[], []]; // clear buffer
                }
            }
        }
    }
});