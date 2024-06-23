<?php
$servername = "localhost";
$username = "root"; // Corrige el error tipográfico aquí
$password = "";
$dbname = "clientes";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $newUsername = $_POST['newUsername'];
    $newPassword = $_POST['newPassword'];
    $created_at = date('Y-m-d H:i:s');
    $updated_at = date('Y-m-d H:i:s');

    $stmt = $conn->prepare("INSERT INTO usuarios (id, fullname, email, newUsername, newPassword, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("issssss", $id, $fullname, $email, $newUsername, $newPassword, $created_at, $updated_at);

    if ($stmt->execute()) {
        echo "Cliente agregado correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
}

$conn->close();
?>
