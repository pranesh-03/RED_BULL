$(document).ready(function(){
    $("#login-form").validate({//validation 
        rules: {
          email: {
              required:true,
              email:true,
          },
          password:{
              required:true,
              minlength:6,
              maxlength:6,
          }
        },
        messages : {
          
          email: {
              required: "Enter the email",
            email: "In Format xyz@gmail.com",
          },
          password:{
              required:"Provide a password",
              minlength:" only 6 char password",
          }
        }
      }),
    $('#lemail').focus();
    $('#login').click(function(){
        // alert("login");
        var useremail=$('#lemail').val();
        var password=$('#lpassword').val();
        var action=$('#action').val();
        
        if(useremail!=''&&password!=''){
            // alert("hi if");
            var urltopass='action=login&useremail='+useremail+'&password='+password;//sending the data to databse for check in single format
           
            
            $.ajax({
                type:'POST',
                data:urltopass,
                url:'http://localhost/RED_BULL/php/login.php',
                
                success: function(responseText){
                    console.log(urltopass)
                    if(responseText==0){
                        // result.html('<span class="error">incorrect username and password</span>');
                        alert("incorrect email or password if not kindly register");
                    }
                    else if(responseText ==1){
                        window.location="http://localhost/RED_BULL/php/profile.php";
                    }
                    else{
                        alert('error in sql query');
                    }
                }
            });
        }
        return false;

    });
})

