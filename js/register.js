$(document).ready(function() {
    $("#form-register").validate({//validation 
      rules: {
        username : {
          required: true,
        },
        email: {
            required: true,
            email: true
        },
        password:{
            required:true,
            minlength:6,
            maxlength:6,
        },
        gender: {
          required: true,
        },
        age: {
            required: true,
            number: true,
        },
        phone: {
            required: true,
            minlength:10,
            maxlength:10,
          }
      },
      messages : {
        username: {
          required: "Enter name",
        },
        email: {
            required: "Enter email",
          email: "Format xyz@gmail.com",
        },
        password:{
            required:"Provide password",
            minlength:" only 6 char",
        },
        date: {
          required: "enter the d.o.b",
        },
        age: {
            required: "enter your age",
            number: "Age as a numerical value",
        },
        phone: {
            required: "enter the phone number",
            minlength:"valid phone number",
            maxlength:"valid phone number",
          }
      }
    }),
    submitForm=function(e){
      var username = $("input[name=username]").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var age = $("input[name=age]").val();
      var phone = $("input[name=phone]").val();
      var date = $("input[name=date]").val();
      var formData = {
        username: username,
        email: email,
        password: password,
        age:age,
        phone:phone,
        date:date,
      };
      
      $.ajax({
        url: "http://localhost/RED_BULL/php/register.php",
        type: "POST",
        data: formData,
        success: function (response) {
          if(response==1){
            alert("registered successfully");
            window.location="http://localhost/RED_BULL/login.html"
          }
          
        },
      });
    }
    
});
        