<?php
// Datos de conexión a la base de datos
$host = 'localhost'; // Cambiar según tu configuración
$dbname = 'clientes';
$username = 'root';  // Cambiar según tu configuración
$password = '';      // Cambiar según tu configuración

// Crear una nueva conexión a la base de datos
$mysqli = new mysqli($host, $username, $password, $dbname);

// Verificar la conexión
if ($mysqli->connect_error) {
    die('Error de conexión (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}

// Obtener datos del formulario
$game_name = $_POST['game'];
$client_name = $_POST['username'];
$comment = $_POST['comment'];

// Limpiar datos del formulario
$game_name = $mysqli->real_escape_string($game_name);
$client_name = $mysqli->real_escape_string($client_name);
$comment = $mysqli->real_escape_string($comment);

// Verificar que el juego exista en la base de datos
$result = $mysqli->query("SELECT nombre FROM juegos WHERE nombre='$game_name'");
if ($result->num_rows > 0) {
    // Insertar el comentario en la base de datos
    $query = "INSERT INTO comentarios (nombre_juego, nombre_cliente, comentario) VALUES ('$game_name', '$client_name', '$comment')";

    if ($mysqli->query($query) === TRUE) {
        header('Location: foro.html?success=1');
        exit;
    } else {
        echo 'Error al guardar el comentario: ' . $mysqli->error;
    }
} else {
    echo 'El juego no está en la base de datos.';
}

// Cerrar la conexión
$mysqli->close();
?>
