$(document).ready(function () {
    $('#reg-form').validate({
        rules: {
            firstName: {
                required: true,
                minlength: 3
            },
            lastName: {
                required: true,
                minlength: 3
            }
        },
        messages: {
          firstName: "",
          lastName: ""
        },
        highlight: function(element) {
        $(element.form).find("input[name=" + element.id + "]")
          .addClass('error-style');
        },
        unhighlight: function(element) {
          $(element.form).find("input[name=" + element.id + "]")
            .removeClass('error-style');
        },
    });
});
function drawX(){
    document.querySelector('#top').classList.toggle('top');
    document.querySelector('#mid').classList.toggle('mid');
    document.querySelector('#bot').classList.toggle('bot');
    document.querySelectorAll('.nav-bar')[1].classList.toggle('show');
}
