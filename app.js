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

