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
