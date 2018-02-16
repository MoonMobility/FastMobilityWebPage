$(function () {

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {

          // var messageAlert = 'alert-' + $(this).type;
          //             var messageText = $(this).email;
          //
          //             var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
          //             if (messageAlert && messageText) {
          //                 $('#contact-form').find('.messages').html(alertBox);
          //                 $('#contact-form')[0].reset();
          //               }


            var url = "https://formspree.io/mobilitymoon@gmail.com";

            var jqxhr = $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.email;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                      }
                }
            })
            .success(function() { alert("Успешное выполнение"); })
            .error(function() { alert("Ошибка выполнения"); })
            .complete(function() { alert("Завершение выполнения"); });


            return false;
        }
    })
});
