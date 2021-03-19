Chart.defaults.global.defaultFontColor = '#fff';

new Chart(document.getElementById("doughnut-chart"), {
    type: 'pie',
    data: {
      labels: ["STUDYING", "READING", "SPORT", "HOBBY", "SOCIAL NETWORK"],
      datasets: [
        {
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [52,15,10,15,8]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'My time routine'
      },
      responsive: true,
    }
});

new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: ["STUDYING", "READING", "SPORT", "HOBBY", "SOCIAL NETWORK"],
    datasets: [
      {
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [52,15,10,15,8]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'My time routine'
    },
    
  }
});

window.onresize = function() { 
    chartResize();

}; 

function chartResize(){
  //var rp = document.getElementById("doughnut-chart");
  if(window.screen.height<600){
    rp.type='bar';
    alert(rp.type);

  }
}

function showBooks() {
  var rp = document.getElementById("Books");
  var sh = document.getElementById("bshow_hide");

  if (rp.style.display === "none") {
      rp.style.display = "block";
      sh.textContent='[-]';
  } else {
      rp.style.display = "none";
      sh.textContent='[+]';
  }
}

function showEvents() {
  var rp = document.getElementById("Events");
  var sh = document.getElementById("eshow_hide");

  if (rp.style.display === "none") {
      rp.style.display = "block";
      sh.textContent='[-]';
  } else {
      rp.style.display = "none";
      sh.textContent='[+]';
  }
}

function showPublications() {
  var rp = document.getElementById("Publications");
  var sh = document.getElementById("pshow_hide");

  if (rp.style.display === "none") {
      rp.style.display = "block";
      sh.textContent='[-]';
  } else {
      rp.style.display = "none";
      sh.textContent='[+]';
  }
}