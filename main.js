const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Rd', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Green'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 12],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
