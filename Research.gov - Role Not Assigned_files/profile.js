
var profile = (function() {
    return {
        initProfile: function(isAuthenticated, sessionKey, accountReview , url) {
            console.log("isAuthenticated: "+ isAuthenticated + " sessionKey: " + sessionKey + " url:" + url + " accountReview:" + JSON.stringify(accountReview))
            if(!isAuthenticated || !accountReview) return;

            $(document).ready(function () {
                var pair = document.cookie.match(new RegExp(sessionKey + '=([^;]+)'));
                var key = !!pair ? pair[1] : null;

                console.log("getCookiebyName sessionKey: " +  key );
                if(key == null) {
                    document.cookie = sessionKey + "=" + JSON.stringify(accountReview);
                    var reviewDefers = accountReview['reviewDefers'];
                    var maxReviewDefers = accountReview['maxReviewDefers'];
                    var reviewStatus = accountReview['reviewStatus'] ;
                    if('C' === reviewStatus || !reviewStatus || !maxReviewDefers){
                        return;
                    }

                    if(reviewDefers > maxReviewDefers){
                        window.location.href = url;
                        return;
                    }

                    var timeLeft = maxReviewDefers - reviewDefers;
                    var message = "Periodic reviews ensure your information is up-to-date. If you choose not to review your profile now, ";
                    if (reviewDefers == maxReviewDefers) {
                        message += "you will be automatically directed to the review page next time you sign in. <br><br>";
                    }else{
                        message += "you will be reminded " + timeLeft + " more time(s) before you are automatically directed to review your profile. <br><br>";
                    }
                    message += "Would you like to review your profile now?";

                    $("#profileModalBody").html(message);

                    $("#profileModal").css("z-index", "1500");
                    $('#profileModal').appendTo("body").modal('show');

                }

            });

            $("#reviewMyProfile").click(function() {
              window.location.href = url;
            });


        }
    }

}());
