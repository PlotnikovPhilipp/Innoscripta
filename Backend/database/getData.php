<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: *');
    
    function getData($start, $end, $pizzaType) {
        try {
            $pdo = new PDO('mysql:host=localhost;dbname=id12370818_pizza', 'id12370818_pizzavisitor', '+NBtzLz#Hto&Da4d', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
            $pdo->query('SET NAMES utf8');
            switch($pizzaType) {
                case 'Sea':
                    $query = "SELECT * FROM seaPizza where id BETWEEN ? AND ?";
                    break;

                case 'Meat':
                    $query = "SELECT * FROM meatPizza where id BETWEEN ? AND ?";
                    break;

                case 'Vegetarian':
                    $query = "SELECT * FROM vegetarianpizza where id BETWEEN ? AND ?";
                    break;

                case 'Cheese':
                    $query = "SELECT * FROM cheesepizza where id BETWEEN ? AND ?";
                    break;

                case 'Spicy':
                    $query = "SELECT * FROM spicyPizza where id BETWEEN ? AND ?";
                    break;

                case 'Light':
                    $query = "SELECT * FROM lightPizza where id BETWEEN ? AND ?";
                    break;

                case 'Baby':
                    $query = "SELECT * FROM babyPizza where id BETWEEN ? AND ?";
                    break;

                case 'Without onion':
                    $query = "SELECT * FROM withoutOnionPizza where id BETWEEN ? AND ?";
                    break;

                case 'Without olives':
                    $query = "SELECT * FROM withoutOlivesPizza where id BETWEEN ? AND ?";
                    break;

                case 'Without mushrooms':
                    $query = "SELECT * FROM withoutMushroomsPizza where id BETWEEN ? AND ?";
                    break;

                case 'New':
                    $query = "SELECT * FROM newPizza where id BETWEEN ? AND ?";
                    break;

                case 'Divine':
                    $query = "SELECT * FROM divinePizza where id BETWEEN ? AND ?";
                    break;

                default:
                    $query = "SELECT * FROM AllPizza where id BETWEEN ? AND ?";
            }

            $response = $pdo->prepare($query);
            $response->execute([$start, $end]);
            $result = $response->fetchAll(PDO::FETCH_ASSOC);
            return json_encode($result, JSON_UNESCAPED_UNICODE);
        } catch(PDOException $e) {
            echo 'Something went wrong '.$e->getMessage();
        }
    }

    $type = $_REQUEST['type'];
    $start = $_REQUEST['start'];
    $end = $_REQUEST['end'];
    echo getData($start, $end, $type);
?>