$(function() {
    $('.forgot_pass').on('submit', function(e) {
        e.preventDefault();
        var $this = $(this),
            $btn = $this.find('button'),
            $email = $this.find('#forgot_pass-email');
        if($btn.hasClass('onclick') || $btn.hasClass('validate')) {
            return false;
        }
        $email.prop('disabled',true);
        $btn.addClass('onclick');
        setTimeout(function() {
            console.log("here");
            $btn.removeClass('onclick');
            $btn.addClass('validate');
            setTimeout(function() {
                $btn.removeClass('validate');
                $email.prop('disabled',false);

                window.location.replace("../new_pass/new_pass.html");
            },1500)
        }, 3000)
    });
});