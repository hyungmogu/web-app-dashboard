/*
*
* @description
*
*/
const TRAFFIC = document.getElementById("graph--traffic");
const DTRAFFIC = document.getElementById("graph--dtraffic");
const USER = document.getElementById("graph--user");

let trafficChart = new Chart(TRAFFIC, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: "My first dataset",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(116, 119, 190, 0.4)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [12, 19, 3, 5, 2, 3]
    }]
  }
});

let dtrafficChart = new Chart(DTRAFFIC, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: "Daily Traffic",
      data: [50, 75, 175, 100, 200, 175, 75],
      backgroundColor: "rgba(116, 119, 190, 1)",
      borderWidth: 1
    }]
  },
  options: {
      scales: {

      }
  }
});

let userChart = new Chart(USER, {
  type: "doughnut",
  data: {
    labels: ["strength", "skill", "health"],
    datasets: [{
      label: "My Strength",
      backgroundColor: ["#7477BE", "#81C98F", "#74B1BF"],
      data: [50, 20, 30]
    }]
  }
});
