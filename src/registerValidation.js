var valid_name = false;
var valid_surname = false;
var valid_email = false;
var valid_pass = false;
var valid_repass = false;
var valid_phone = false;

$("#nameid").focusout(function(){
    check_name();
})
$("#surnameid").focusout(function(){
    check_surname();
})
$("#emailid").focusout(function(){
    check_email();
})
$("#passid").focusout(function(){
    check_pass();
})
$("#repassid").focusout(function(){
    check_repass();
})
$("#phoneid").focusout(function(){
    check_phone();
})

function check_name(){
    var valid = /^[a-zA-Z]+([ a-zA-Z]*) *$/;
    var name_input = $("#nameid").val();

    if(valid.test(name_input) && name_input !==''){
        $("#name_message").html("&#10003; Must not containt special symbols");
        $("#nameid").css("border","2px solid #34F458");
    } else{
        $("#name_message").html("&#10007 Must not containt special symbols");
        $("#nameid").css("border","2px solid #F90A0A");
        var valid_name = true;

    }
}

function check_surname(){
    var valid = /^[a-zA-Z]+([ a-zA-Z]*) *$/;
    var surname_input = $("#surnameid").val();

    if(valid.test(surname_input) && surname_input !==''){
        $("#surname_message").html("&#10003; Must not containt special symbols");
        $("#surnameid").css("border","2px solid #34F458");
    } else{
        $("#surname_message").html("&#10007 Must not containt special symbols");
        $("#surnameid").css("border","2px solid #F90A0A");
        var valid_surname = true;
}
}

function check_email(){
    var valid = /\S+@\S+\.\S+/;
    var email_input = $("#emailid").val();

    if(valid.test(email_input) && email_input !==''){
        $("#email_message").html("&#10003; Must be a valid email");
        $("#emailid").css("border","2px solid #34F458");
    } else{
        $("#email_message").html("&#10007 Must be a valid email");
        $("#emailid").css("border","2px solid #F90A0A");
        var valid_email = true;
}
}
function check_pass(){
    var valid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var pass_input = $("#passid").val();

    if(valid.test(pass_input) && pass_input !==''){
        $("#pass_message").html("&#10003; Must contain at least one number and one capital letter, and have 8 characters");
        $("#passid").css("border","2px solid #34F458");
    } else{
        $("#pass_message").html("&#10007 Must contain at least one number and one capital letter, and have 8 characters");
        $("#passid").css("border","2px solid #F90A0A");
        var valid_pass = true;
}
}

function check_repass(){
    var pass_input = $("#passid").val();
    var repass_input = $("#repassid").val();

    if(pass_input == repass_input && repass_input !==''){
        $("#repass_message").html("&#10003; Must match with the password");
        $("#repassid").css("border","2px solid #34F458");
    } else{
        $("#repass_message").html("&#10007 Must match with the password");
        $("#repassid").css("border","2px solid #F90A0A");
        var valid_repass = true;
}
}

function check_phone(){
    var valid = /^([+]{1}[3][7][3][0-9]{8})+$|^([0]{1}[0-9]{8})+$|^(([6]{1}|[7]{1})[0-9]{7})+$/;
    var phone_input = $("#phoneid").val();

    if(valid.test(phone_input) && phone_input !==''){
        $("#phone_message").html("&#10003;Must be a valid Moldovian number");
        $("#phoneid").css("border","2px solid #34F458");
    } else
    {
        $("#phone_message").html("&#10007 Must be a valid Moldovian number");
        $("#phoneid").css("border","2px solid #F90A0A");
        var valid_phone = true;
    }
}

$("#registerForm").submit(function () {
    check_name();
    check_surname();
    check_email();
    check_pass();
    check_repass();
    check_phone();
    
    if( valid_name === false &&
        valid_surname=== false &&
        valid_email === false &&
        valid_pass === false &&
        valid_repass=== false&&
        valid_phone === false)
        {

        }else{

        }
})

