function returncheck() {
    var email1 = document.getElementById('email_addr');
    var email2 = document.getElementById('email_repeat');
            if ( email1.value != email2.value) {
                alert("The two emails must match!!");
                //as one can still submit the form after facing the alert box so we in order
                //  to encounter that we return false to the return check.
                return false;
        }
}