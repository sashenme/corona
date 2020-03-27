<?php
$servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "corona";
$username = "coronavi_sashen";
$password = "Sashen93";
$dbname = "coronavi_corona";

$fullname = $_POST['txt-name'];
$comment = $_POST['txt-comment'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO feedback (fullname, comment)
VALUES ('$fullname', '$comment')";

if ($conn->query($sql) === TRUE) {
    // echo '<meta http-equiv="refresh" content="0;url=index.php?subscribed=1" />';
    return 'success';
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>