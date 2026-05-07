<?php

$valid_username = "admin";
$valid_password = "admin123";

$username = $_POST['username'];
$password = $_POST['password'];

if($username == $valid_username && $password == $valid_password)
{
    echo "<h2>Login Successful</h2>";
    echo "<p>Welcome to ERP Dashboard</p>";
}
else
{
    echo "<h2>Invalid Username or Password</h2>";
}

?>