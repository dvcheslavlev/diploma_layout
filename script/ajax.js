/*$.ajax('.recall-form').submit(function(event) {
        event.preventDefault();
        var $form = $( this ),
            term1 = $form.find( 'input[name="clientName"]' ).val(),
            term2 = $form.find( 'input[name="clientEmail"]' ).val(),
            term3 = $form.find( 'input[name="clientPhoneNumber"]' ).val(),
            term4 = $form.find( 'input[name="pDataAgreement"]' ).val(),
            url = $form.attr( 'action' );

        var posting = $.post(url,{ s: term1 },{ s: term2 },{ s: term3 },{ s: term4 });

        posting.done(function( data ) {
            var content = $( data ).find( '#content' );
        $( ".form-submit-result" ).empty().append( content );
        });

        $('.recall-form__container').fadeOut();
        $('.form-submit-result').css('display', 'flex');
        $('.form-submit-result').fadeIn(300);
    });*/