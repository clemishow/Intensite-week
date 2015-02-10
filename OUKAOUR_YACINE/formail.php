<?php
$TO = "yacine.oukaour@hetic.net";

$h = "From: " . $TO;

$message = "";

while (list($key, $val) = each($HTTP_POST_VARS)) {
$message .= "$key : $val\n";
}

mail($TO, $subject, $message, $h);

Header("Location: http://cocoweb.fr/p2019/OUKAOUR_YACINE/Présentation.html");

?>