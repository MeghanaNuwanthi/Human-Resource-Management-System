 //chart section
 const progressCtx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(progressCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Projects Completed',
                data: [3, 5, 8, 10],
                borderColor: '#000',
                fill: false,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });

