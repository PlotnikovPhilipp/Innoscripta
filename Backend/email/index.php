<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: *');

    require_once "PHPMailer.php";
    require_once "SMTP.php";
    require_once "Exception.php";
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    require_once 'autoload.php';

    // Create the template of email
    $pizza = json_decode($_REQUEST['pizza'], true);
    const PREFIX = '../imgs/';
    $emailTemplate = "<!DOCTYPE html>
    <html lang='en' style='width: 100%; padding: 0; margin: 0; font-size: 16px'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
        <title>Philipp pizza</title>
    </head>
    <body style='width: 100%; padding: 0; margin: 0;' ontouchstart=''>
        <table cellpadding='0' cellspacing='0' border='0' style='margin: 0; padding: 0; border-collapse: collapse;'>
            <!--
                Header
            -->
            <thead> 
                <tr>
                    <td>
                        <table cellspacing='0' width='600' cellpadding='0' border='0' style='margin: 0; padding: 0; border-collapse: collapse'>
                            <tr>
                                <td>
                                    <h1 style='font-size: 1.5rem;'>Order information</h1>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </thead>
    
            <!--
                Order
            -->
            <tbody>
                <tr>
                    <td>
                        <table cellspacing='0' cellpadding='0' border='0' width='600' style='margin: 0; padding: 0; border-collapse: collapse'>
                            <!--
                                Header of order table
                            -->
                            <tr>
    
                                <!--
                                    Number
                                -->
                                <th align='center' style='padding: 5px 10px; border-bottom: 1px solid #333333'>
                                    #
                                </th>
    
                                <!--
                                    Image
                                -->
                                <th style='width: 60px; border-bottom: 1px solid #333333; padding: 5px 10px;'>
                                    Image
                                </th>
    
                                <!--
                                    Name
                                -->
                                <th align='left' style='border-bottom: 1px solid #333333; padding: 5px 10px'>
                                    Name
                                </th>
    
                                <!--
                                    Price
                                -->
                                <th align='left' style='padding: 5px 10px; border-bottom: 1px solid #333333'>
                                    Price
                                </th>
    
                                <!--
                                    Amount
                                -->
                                <th align='left' style='padding: 5px 10px; border-bottom: 1px solid #333333'>
                                    Amount
                                </th>
                            </tr>";
    $index = 1;
    foreach($pizza as $value) {
        $emailTemplate .= "
        <tr>
            <!--
                Number
            -->
            <td style='padding: 15px 10px; border-bottom: 1px solid #dddddd' align='center'>
                ".$index."
            </td>

            <!--
                Image
            -->
            <td align='center' style='padding: 15px 10px; border-bottom: 1px solid #dddddd' valign='center'>
                <img width='50px' src='cid:".substr($value['img'], 7)."'/>
            </td>

            <!--
                Name
            -->
            <td style='padding: 15px 10px; width: 190px; border-bottom: 1px solid #dddddd'>
                ".$value['title']."
            </td>

            <!--
                Price
            -->
            <td style='padding: 15px 10px; border-bottom: 1px solid #dddddd'>
                ".$value['price']."
            </td>

            <!--
                Amount
            -->
            <td align='center' style='padding: 15px 10px; border-bottom: 1px solid #dddddd'>
                ".$value['amount']."
            </td>
        </tr>";
        $index++;
    }

    $emailTemplate .= " 
                                <tr>
                                    <td align='right' colspan='5' style='padding-top: 10px; font-weight: bold'>Total price: ".$_REQUEST['totalPrice']." ₴</td>
                                </tr>

                            </table>
                        </td>
                    </tr>
                </tbody>

                <!--
                    Footer
                -->
                <tfoot>
                    <tr>
                        <td>
                            <table cellspacing='0' cellpadding='0' border='0' width='600' style=' margin: 0; padding: 0; border-collapse: collapse'>
                                <tr>
                                    <td style='padding-top: 50px; padding-bottom: 10px'>
                                        <h5 style='font-size: 1rem; display: inline'>Purchaser information:</h5>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        Name: ".$_REQUEST['name']."
                                    </td>
                                </tr>

                                <tr>
                                    <td style='padding-top: 10px'>
                                        Phone: ".$_REQUEST['phone']."
                                    </td>
                                </tr>

                                <tr>
                                    <td style='padding-top: 10px'>
                                        Email: ".$_REQUEST['email']."
                                    </td>
                                </tr>

                                <tr>
                                    <td style='padding-top: 10px'>
                                        Comments: ".$_REQUEST['comments']."
                                    </td>
                                </tr>
                            </table> 
                        </td>
                    </tr>
                </tfoot>
            </table>
        </body>
    </html>";


    // Email
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();                                            
        $mail->SMTPAuth = true;
        $mail->CharSet = "UTF-8";                                 
        $mail->Username = 'philippPizza@yandex.ru';                    
        $mail->Password = 'Gaponuk62';                          
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Host = 'smtp.yandex.ru';
        $mail->Port = 465;                                   

        foreach($pizza as $value) {
            $mail->AddEmbeddedImage(PREFIX.''.substr($value['img'], 7), substr($value['img'], 7));
        }

        $mail->setFrom('philippPizza@yandex.ru', 'Philipp pizza');
        $mail->addAddress('philippPizza@yandex.ru', 'Philipp pizza');
        $mail->Subject = 'Make an order from Philipp pizza';
        $mail->isHTML(true);
        $mail->Body = $emailTemplate;
        $mail->send();
        echo 'Your email was sent';
    } catch(Exception $e) {
        echo 'Something went wrong';
        // echo 'Something go wrong'.$mail->ErrorInfo;
    }
?>