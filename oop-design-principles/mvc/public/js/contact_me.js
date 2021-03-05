// IIFE: Immediately Invoked Function Expression
$(function () {
  $("#contactForm").on("submit", function (e) {
    // Bloquer le comportement naturel de la form
    e.preventDefault();

    var name = $("input#name").val();
    var email = $("input#email").val();
    var phone = $("input#phone").val();
    var message = $("textarea#message").val();

    fetch("http://localhost:8000/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        message: message,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
  $("#success").html("");
});
