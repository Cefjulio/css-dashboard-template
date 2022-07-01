var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Correct Procedure', 'Hang up','Dec. Tree', 'Knowledge', 'Callback', 'Rude'],
        datasets: [{
            label: '# of Findings',
            data: [20,10,12,5,2,3],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',



            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true, 
    }



});




var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Correct Procedure', 'Hang up','Dec. Tree', 'Knowledge', 'Callback', 'Rude'],
        datasets: [{
            label: '# of Findings',
            data: [20,10,12,5,2,3],
            backgroundColor: [
                'rgba(255,99,132,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(75,192,192,0.2)',
                'rgba(153,102,255,0.2)',
                'rgba(255,159,64,0.2)',

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',



            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true, 
    }



});