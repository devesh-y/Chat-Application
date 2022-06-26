<?php
  $hostname = "localhost";
  $username = "root";
  $password = "";
  $database_name = "chat-application";

  $conn = mysqli_connect($hostname, $username, $password, $database_name);
  if(!$conn){
    echo "There is an error with connecting the database $database_name\n".mysqli_connect_error();
  }
?>
