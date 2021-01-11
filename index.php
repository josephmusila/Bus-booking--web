<?php
/* $citizenship=$_POST["citizenship"]; */
$firstName=$_POST["firstName"];
$lastName=$_POST["lastName"];
$id=$_POST["id"];
$gender=$_POST["gender"];
$location=$_POST["location"];
$destination=$_POST["destination"];
$message="";



if(!empty($id)){
    $conn=mysqli_connect("localhost","root","","tickets");

    $query="INSERT INTO `bookings`  (`firstName`,`lastName`,`id`,`gender`,`location`,`destination`) VALUES ('$firstName','$lastName',$id','$gender','$location','$destination') ;";
        mysqli_query($conn,$query);
        if(!$query){
            echo mysqli_error($conn);
        }
        if(mysqli_connect_errno()){
            echo "fail to connect" . mysqli_connect_errno();
            exit();
        }else{
            echo $firstName;
        }
        
}else{
    echo "id";
}

?>