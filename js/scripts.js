$(document).ready(function) {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const birthdateInput = $("input#birthdate").val();
  
    $(".name").text(nameInput);
    $("birthdate").text(birthdateInput);

    $("#postcard").show();

    event.preventDefault();
  });
});