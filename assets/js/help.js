//help form
var form = $('#help-contact-form');
form.submit(function (event) {
    event.preventDefault();
    var formData = {
        'subject': $('input[name=subject]').val(),
        'message': $('#message').val()
    };
    //             console.log(formData);

    var form_status = $('.form_status');

    $.ajax({
        type: 'GET',
        url: 'http://pixolo.co.in/gillygiggles/help.php',
        data: formData,
        dataType: 'json',
        encode: true,

        beforeSend: function () {
            form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn();
        }

    }).success(function (data) {
        console.log("done");
        form_status.html('<p class="text-success">SENT</p>').delay(3000).fadeOut();
        $('input[name=subject]').val("");
        $('#message').val("");
    });
});