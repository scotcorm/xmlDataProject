const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Texas',
      'Georgia',
      'Florida',
      'Mississippi',
      'Oklahoma',
      'Arkansas',
      'North Carolina',
      'Louisiana',
      'Alabama',
      'California',
    ],
    datasets: [
      {
        label: 'Reported Sightings',
        data: [2425, 1377, 1479, 731, 665, 657, 655, 613, 590, 564],
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
    labels: [
      'Texas',
      'Georgia',
      'Florida',
      'Mississippi',
      'Oklahoma',
      'Arkansas',
      'Louisiana',
      'Alabama',
      'California',
      'South Carolina',
    ],
    datasets: [
      {
        label: 'Population Estimates',
        data: [
          2600000, 400000, 500000, 500000, 1050000, 200000, 700000, 225000,
          300000, 150000,
        ],
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
