<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname="register";
$conn = mysqli_connect($host, $username, $password, $dbname);
if (isset($_POST['email']) && $_POST['email']!="" && isset($_POST['password']) && $_POST['password']!=""){
   $sql = "INSERT into signin_page(email,password) VALUES('".addslashes($_POST['email'])."','".addslashes($_POST['password'])."')";
  if($conn->query($sql)===true){
    echo 1;
  }
  else{
    echo 0;
  }  
}
?>