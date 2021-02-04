function menu() {
    "fixed" === $(".nav.top.container").css("position") ? ($(".nav.top a").removeAttr("style"), $(".nav.top.container").removeAttr("style"), $("#burgerIcon div").removeAttr("style"), $("#burgerIcon div#close").removeAttr("style")) : ($(".nav.top").css({
      position: "fixed",
      height: "100vh",
      width: "100%",
      backgroundColor: "#FCF9F5",
      color: "#0a0a11",
      padding: "0"
    }),
    $(".nav.top a").css({
      margin: "0",
      display: "block",
      padding: "1rem"
    }), $("#burgerIcon div").css({
      "background-color": "#1C120D",
      display: "none"
    }), $("#burgerIcon div#close").css({
      display: "block",
      padding: "1rem",
      backgroundColor: "unset"
    }), $(".nav.top").css({
      display: "revert"
    }))
  }
  window.addEventListener ? window.addEventListener("load", function() {
    document.getElementById("burgerIcon").addEventListener("click", menu)
  }, !1) : window.attachEvent && window.attachEvent("onload", function() {
    document.getElementById("burgerIcon").addEventListener("click", menu)
  });
  