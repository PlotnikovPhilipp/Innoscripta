<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: *');

    function randomGetData($listOfID) {
        try {
            $pdo = new PDO('mysql:host=localhost;dbname=id12370818_pizza', 'id12370818_pizzavisitor', '+NBtzLz#Hto&Da4d', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
            $pdo->query('SET NAMES utf8');
            $query = 'SELECT title, img, price, size, doughType FROM AllPizza WHERE id = ?';
            for($i = 1; $i < count($listOfID); $i++) {
                $query .= ' OR id = ?';
            }
            $response = $pdo->prepare($query);
            $response->execute($listOfID);
            $result = $response->fetchAll(PDO::FETCH_ASSOC);
            return json_encode($result, JSON_UNESCAPED_UNICODE);
        } catch(PDOException $e) {
            return 'Something went wrong '.$e->getMessage();
        }
    }

    $request = json_decode($_REQUEST['id']);
    echo randomGetData($request);
?>