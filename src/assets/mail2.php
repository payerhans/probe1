<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors))
{

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$from_email = $request->email;
	$message = $request->message;
	$from_name = $request->name;
	$from_name = $request->name;
	$anreise = $request->anreise;
	$abreise = $request->abreise;


	$to_email = 'hans@net-so.org';

	$contact = "<p><strong>Name:</strong> $from_name</p>
							<p><strong>Email:</strong> $from_email</p>";
	$reisedaten = "<p><strong>Anreise</strong> $anreise </p>";
	//$reisedaten .= "<p><strong>Abreise</strong> $abreise </p>";
	$content = "<p>$message</p>";

	$website = 'Angular Php Email Example';
	$email_subject = "$website: Neue Nachricht von $from_name erhalten";

	$email_body = '<html><body>';
	$email_body .= "$contact $content $reisedaten";
	$email_body .= '</body></html>';

	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";

	mail($to_email,$email_subject,$email_body,$headers);

	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	$response_array['reisedaten'] = $reisedaten;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>
