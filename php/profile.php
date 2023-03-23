<?php
echo "login successfull <br>";

echo "your Data from mysql <br><br>";


    $host ="localhost";
    $username="root";
    $password="";
    $database="register";
    $conn=mysqli_connect($host,$username,$password,$database);
   
    $sql = $conn->query("SELECT * FROM signin_page"); 




    // $result=mysqli_query($conn,$sql);
    
    // $json_array=array();
    // while($data=mysqli_fetch_assoc($result)){
    //     $json_array[]=$data;
        
    // }
    // echo json_encode($json_array)
?>
<?php while($data=$sql->fetch_assoc()):?>
    <tr>
        <td><?php echo $data['email'];?></td>
        <td><?php echo $data['password'];?></td>
</tr>
<?php endwhile; ?>
