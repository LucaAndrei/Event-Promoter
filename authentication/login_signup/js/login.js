$(function() {
    $('.login').on('submit', function(e) {
        e.preventDefault();
        var $this = $(this),
            $btn = $this.find('button'),
            $username = $this.find('#login-username'),
            $password = $this.find('#login-password');
        if($btn.hasClass('onclick') || $btn.hasClass('validate')) {
            return false;
        }
        console.log("$username",$username)
        $username.prop('disabled',true);
        $password.prop('disabled',true);
        $btn.addClass('onclick');
        setTimeout(function() {
            console.log("here");
            $btn.removeClass('onclick');
            $btn.addClass('validate');
            setTimeout(function() {
                $btn.removeClass('validate');
                $username.prop('disabled',false);
                $password.prop('disabled',false); 
            },1500)
        }, 3000)
    });

    $('.signup').on('submit', function(e) {
        e.preventDefault();
        var $this = $(this),
            $btn = $this.find('button'),
            $username = $this.find('#signup-username'),
            $email = $this.find('#signup-email'),
            $password = $this.find('#signup-password');
        if($btn.hasClass('onclick') || $btn.hasClass('validate')) {
            return false;
        }

        $username.prop('disabled',true);
        $email.prop('disabled',true);
        $password.prop('disabled',true); 
        $btn.addClass('onclick');
        setTimeout(function() {
            console.log("here");
            $btn.removeClass('onclick');
            $btn.addClass('validate');
            setTimeout(function() {
                $btn.removeClass('validate');
                $username.prop('disabled',false);
                $email.prop('disabled',false);
                $password.prop('disabled',false);

                window.location.replace("success_signup.html");
            },1500)
        }, 3000)
    });
});