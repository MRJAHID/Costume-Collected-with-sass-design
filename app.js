<!--Short By JS CODE-->
document.addEventListener("alpine:init", () => {
  Alpine.data("select", () => ({
    open: false,
    language: "",

    toggle() {
      this.open = !this.open;
    },

    setLanguage(val) {
      this.language = val;
      this.open = false;
    },
  }));
});


//Small Cart Open Close JS
$(document).ready(function () {
  $('#small_cart_section_div').click(function () {
    $('#small_cart_container').show();
  });
  $('.small_cart-close').click(function () {
    $('#small_cart_container').hide();
  });
});

//Chart JS
$(document).ready(function () {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

