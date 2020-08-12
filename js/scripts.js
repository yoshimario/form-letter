$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const birthdateInput = $("input#birthdate").val();

    $(".name").append(nameInput);
    $(".birthdate").append(birthdateInput);

    $("#postcard").show();

    event.preventDefault();
  });
});