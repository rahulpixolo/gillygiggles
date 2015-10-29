// Contact form
var form = $("#main‬-contact-form");
form.submit(function (event) {
    event.preventDefault();
    var formData = {
        'name': $('input[name=name]').val(),
        'email': $('input[name=email]').val(),
        'contact': $('input[name=contact]').val(),
        'message': $('‪#message‬').val()
    };
    console.log(formData);

    var form_status = $('.form_status');
    $.ajax({
        type: 'POST',
        url: 'http://pixolo.co.in/gillygiggles/mail.php',
        data: formData,
        dataType: 'json',
        encode: true,

        beforeSend: function () {
            form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn();
        }
    }).done(function (data) {
        console.log(data);

        form_status.html('<p class="text-success">SENT</p>').delay(3000).fadeOut();
        $('input[name=name]').val('');
        $('input[name=email]').val('');
        $('input[name=contact]').val('');
        $('#message').val('');
    });

});