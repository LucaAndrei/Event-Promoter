$(function() {
    $('.new_pass').on('submit', function(e) {
        e.preventDefault();
        var $this = $(this),
            $btn = $this.find('button'),
            $new_pass = $this.find('#new_pass'),
            $retype_pass = $this.find('#retype_pass');
        if($btn.hasClass('onclick') || $btn.hasClass('validate')) {
            return false;
        }
        $new_pass.prop('disabled',true);
        $retype_pass.prop('disabled',true);
        $btn.addClass('onclick');
        setTimeout(function() {
            console.log("here");
            $btn.removeClass('onclick');
            $btn.addClass('validate');
            setTimeout(function() {
                $btn.removeClass('validate');
                $new_pass.prop('disabled',false);
                $retype_pass.prop('disabled',false);
                window.location.replace("../login_signup/login.html");
            },1500)
        }, 3000)
    });
});