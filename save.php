<?php
$servername = "localhost";
$username = "coronavi_sashen";
$password = "Sashen93";
$dbname = "coronavi_corona";

$language = $_POST['txt-language'];
$gender = $_POST['txt-gender'];
$age = $_POST['txt-age'];
$q0 = $_POST['txt-q0'];
$q1 = $_POST['txt-q1'];
$q2 = $_POST['txt-q2'];
$q3 = $_POST['txt-q3'];
$q4 = $_POST['txt-q4'];
$q5 = $_POST['txt-q5'];
$q6 = $_POST['txt-q6'];
$q7 = $_POST['txt-q7'];
$q8 = $_POST['txt-q8'];
$recommendation = $_POST['txt-recommendation'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO corona (lang, gender, age, critical, q1, q2, q3, q4, q5, q6, q7, q8,recommendation)
VALUES ('$language', '$gender','$age','$q0','$q1','$q2','$q3','$q4','$q5','$q6','$q7','$q8','$recommendation')";

if ($conn->query($sql) === TRUE) {
    // echo '<meta http-equiv="refresh" content="0;url=index.php?subscribed=1" />';
    return 'success';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>