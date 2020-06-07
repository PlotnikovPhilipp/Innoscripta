-- MySQL dump 10.13  Distrib 8.0.19, for osx10.15 (x86_64)
--
-- Host: localhost    Database: pizza
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AllPizza`
--

DROP TABLE IF EXISTS `AllPizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AllPizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AllPizza`
--

LOCK TABLES `AllPizza` WRITE;
/*!40000 ALTER TABLE `AllPizza` DISABLE KEYS */;
INSERT INTO `AllPizza` VALUES (1,'With goat cheese','./imgs/pizzaWithGoatCheese.jpg','Italian flour, cream sauce according to a secret recipe of someone\'s grandmother, mozzarella, goat cheese, root vegetables, pine nuts','195 ₴','30 cm','New','Tradition dough'),(2,'Some kind of fowl','./imgs/pizzaSomeKindOfFowl.jpg','Italian flour, whole tomato sauce, mozzarella, duck fillet (su-view) secret sauces from abroad, including walnut, leek, cucumber, cilantro Traditionally','195 ₴','30 cm','New','Tradition dough'),(3,'Capricciosa Classic','./imgs/pizzaCapricciosaClassic.jpg','Italian flour, whole tomato sauce, mozzarella, bacon, tomatoes, mushrooms, olives','195 ₴','30 cm','New','Tradition dough'),(4,'With porcini mushrooms and chanterelles','./imgs/pizzaWithPorciniMushroomsAndChanterelles.jpg','Italian flour, truffle sauce, mozzarella, porcini mushrooms, chanterelles, champignons, sweet onions, green onions','249 ₴','30 cm','Divine','Tradition dough'),(5,'With lamb','./imgs/pizzaWithLamb.jpg','Italian flour, whole tomato sauce, mozzarella, lamb, baked eggplant, tomato salsa, sweet onion, basil, secret sauce','195 ₴','30 cm','Divine','Tradition dough'),(6,'With baked eggplant and feta','./imgs/pizzaWithBakedEggplantAndFeta.jpg','Italian flour, baked eggplant, mozzarella, tomatoes, feta, pickled onions, pine nuts, basil, tarragon, mint, cilantro','195 ₴','30 cm','Vegetarian','Tradition dough'),(7,'Salami','./imgs/pizzaSalami.jpg','Italian flour, mozzarella, whole tomato sauce, premium salami, oregano','145 ₴','30 cm','Baby','Tradition dough'),(8,'With turkey','./imgs/pizzaWithTurkey.jpg','Italian flour, mozzarella, cream sauce, turkey, orange, almonds, mix of greens / arugula, cranberries, orange mustard','195 ₴','30 cm','Meat','Tradition dough'),(9,'With bacon','./imgs/pizzaWithBacon.jpg','Italian flour, whole tomato sauce, mozzarella, dorblu, dried bacon, hot pepper, oregano','195 ₴','30 cm','Meat','Tradition dough'),(10,'Multi meat','./imgs/pizzaMultiMeat.jpg','Italian flour, whole tomato sauce, mozzarella, beef, boiled pork, pepperoni, hunting sausages, Bulgarian pepper, Crimean onion, barbecue sauce, oregano','195 ₴','30 cm','Divine','Tradition dough'),(11,'Premium cheese','./imgs/pizzaPremiumCheese.jpg','Italian flour, cream and parmesan sauce, mozzarella, DorBlue, parmesan, walnut, cranberry','195 ₴','30 cm','Divine','Tradition dough'),(12,'Prosciutto','./imgs/pizzaProsciutto.jpg','Italian flour, whole tomato sauce, mozzarella, PROSUUTO, ruccola, cherry, sun-dried tomato, capers, oregano, parmesan','195 ₴','30 cm','Without onion','Tradition dough'),(13,'With homemade sausage','./imgs/pizzaWithHomemadeSausage.jpg','Italian flour, whole tomato sauce, mozzarella, homemade sausage, bell pepper, olives, small cucumbers, mushrooms, oregano','195 ₴','30 cm','Meat','Tradition dough'),(14,'Chicken with mushrooms','./imgs/pizzaChickenWithMushrooms.jpg','Italian flour, parmesan and cream sauce, mozzarella, Dorblu, baked chicken, mushrooms, bell pepper, oregano','165 ₴','30 cm','Meat','Tradition dough'),(15,'Chicken with pineapple','./imgs/pizzaChickenWithPineapple.jpg','Italian flour, whole tomato sauce, mozzarella, baked chicken, pineapple, bell pepper, orange mustard, cranberries, oregano','165 ₴','30 cm','Meat','Tradition dough'),(16,'Bavarian','./imgs/pizzaBavarian.jpg','Italian flour, whole tomato sauce, mozzarella, pepperoni, hunting sausages, bell pepper, olives, pesto sauce, oregano','165 ₴','30 cm','Meat','Tradition dough'),(17,'Margarita','./imgs/pizzaMargarita.jpg','Italian flour, whole tomato sauce, mozzarella, tomatoes, pesto, oregano','129 ₴','30 cm','Vegetarian','Tradition dough');
/*!40000 ALTER TABLE `AllPizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `babyPizza`
--

DROP TABLE IF EXISTS `babyPizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `babyPizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `babyPizza`
--

LOCK TABLES `babyPizza` WRITE;
/*!40000 ALTER TABLE `babyPizza` DISABLE KEYS */;
INSERT INTO `babyPizza` VALUES (1,'Chicken with pineapple','./imgs/pizzaChickenWithPineapple.jpg','Italian flour, whole tomato sauce, mozzarella, baked chicken, pineapple, bell pepper, orange mustard, cranberries, oregano','165 ₴','30 cm','Baby','Tradition dough'),(2,'Chicken with mushrooms','./imgs/pizzaChickenWithMushrooms.jpg','Italian flour, parmesan and cream sauce, mozzarella, Dorblu, baked chicken, mushrooms, bell pepper, oregano','165 ₴','30 cm','Baby','Tradition dough'),(3,'With turkey','./imgs/pizzaWithTurkey.jpg','Italian flour, mozzarella, cream sauce, turkey, orange, almonds, mix of greens / arugula, cranberries, orange mustard','195 ₴','30 cm','Baby','Tradition dough'),(4,'Margarita','./imgs/pizzaMargarita.jpg','Italian flour, whole tomato sauce, mozzarella, tomatoes, pesto, oregano','129 ₴','30 cm','Baby','Tradition dough'),(5,'With homemade sausage','./imgs/pizzaWithHomemadeSausage.jpg','Italian flour, whole tomato sauce, mozzarella, homemade sausage, bell pepper, olives, small cucumbers, mushrooms, oregano','195 ₴','30 cm','Baby','Tradition dough'),(6,'With baked eggplant and feta','./imgs/pizzaWithBakedEggplantAndFeta.jpg','Italian flour, baked eggplant, mozzarella, tomatoes, feta, pickled onions, pine nuts, basil, tarragon, mint, cilantro','195 ₴','30 cm','Baby','Tradition dough'),(7,'Salami','./imgs/pizzaSalami.jpg','Italian flour, mozzarella, whole tomato sauce, premium salami, oregano','145 ₴','30 cm','Baby','Tradition dough');
/*!40000 ALTER TABLE `babyPizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cheesepizza`
--

DROP TABLE IF EXISTS `cheesepizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cheesepizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cheesepizza`
--

LOCK TABLES `cheesepizza` WRITE;
/*!40000 ALTER TABLE `cheesepizza` DISABLE KEYS */;
INSERT INTO `cheesepizza` VALUES (1,'Chicken with mushrooms','./imgs/pizzaChickenWithMushrooms.jpg','Italian flour, parmesan and cream sauce, mozzarella, Dorblu, baked chicken, mushrooms, bell pepper, oregano','165 ₴','30 cm','Cheese','Tradition dough'),(2,'Premium cheese','./imgs/pizzaPremiumCheese.jpg','Italian flour, cream and parmesan sauce, mozzarella, DorBlue, parmesan, walnut, cranberry','195 ₴','30 cm','Cheese','Tradition dough'),(3,'Margarita','./imgs/pizzaMargarita.jpg','Italian flour, whole tomato sauce, mozzarella, tomatoes, pesto, oregano','129 ₴','30 cm','Cheese','Tradition dough'),(4,'With homemade sausage','./imgs/pizzaWithHomemadeSausage.jpg','Italian flour, whole tomato sauce, mozzarella, homemade sausage, bell pepper, olives, small cucumbers, mushrooms, oregano','195 ₴','30 cm','Cheese','Tradition dough'),(5,'With goat cheese','./imgs/pizzaWithGoatCheese.jpg','Italian flour, cream sauce according to a secret recipe of someone\'s grandmother, mozzarella, goat cheese, root vegetables, pine nuts','195 ₴','30 cm','Cheese','Tradition dough'),(6,'With porcini mushrooms and chanterelles','./imgs/pizzaWithPorciniMushroomsAndChanterelles.jpg','Italian flour, truffle sauce, mozzarella, porcini mushrooms, chanterelles, champignons, sweet onions, green onions','249 ₴','30 cm','Cheese','Tradition dough'),(7,'With lamb','./imgs/pizzaWithLamb.jpg','Italian flour, whole tomato sauce, mozzarella, lamb, baked eggplant, tomato salsa, sweet onion, basil, secret sauce','195 ₴','30 cm','Cheese','Tradition dough'),(8,'With baked eggplant and feta','./imgs/pizzaWithBakedEggplantAndFeta.jpg','Italian flour, baked eggplant, mozzarella, tomatoes, feta, pickled onions, pine nuts, basil, tarragon, mint, cilantro','195 ₴','30 cm','Cheese','Tradition dough');
/*!40000 ALTER TABLE `cheesepizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `divinePizza`
--

DROP TABLE IF EXISTS `divinePizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `divinePizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `divinePizza`
--

LOCK TABLES `divinePizza` WRITE;
/*!40000 ALTER TABLE `divinePizza` DISABLE KEYS */;
INSERT INTO `divinePizza` VALUES (1,'Multi meat','./imgs/pizzaMultiMeat.jpg','Italian flour, whole tomato sauce, mozzarella, beef, boiled pork, pepperoni, hunting sausages, Bulgarian pepper, Crimean onion, barbecue sauce, oregano','195 ₴','30 cm','Divine','Tradition dough'),(2,'Premium cheese','./imgs/pizzaPremiumCheese.jpg','Italian flour, cream and parmesan sauce, mozzarella, DorBlue, parmesan, walnut, cranberry','195 ₴','30 cm','Divine','Tradition dough'),(3,'With lamb','./imgs/pizzaWithLamb.jpg','Italian flour, whole tomato sauce, mozzarella, lamb, baked eggplant, tomato salsa, sweet onion, basil, secret sauce','195 ₴','30 cm','Divine','Tradition dough'),(4,'With porcini mushrooms and chanterelles','./imgs/pizzaWithPorciniMushroomsAndChanterelles.jpg','Italian flour, truffle sauce, mozzarella, porcini mushrooms, chanterelles, champignons, sweet onions, green onions','249 ₴','30 cm','Divine','Tradition dough');
/*!40000 ALTER TABLE `divinePizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lightPizza`
--

DROP TABLE IF EXISTS `lightPizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lightPizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lightPizza`
--

LOCK TABLES `lightPizza` WRITE;
/*!40000 ALTER TABLE `lightPizza` DISABLE KEYS */;
INSERT INTO `lightPizza` VALUES (1,'Margarita','./imgs/pizzaMargarita.jpg','Italian flour, whole tomato sauce, mozzarella, tomatoes, pesto, oregano','129 ₴','30 cm','Light','Tradition dough'),(2,'With goat cheese','./imgs/pizzaWithGoatCheese.jpg','Italian flour, cream sauce according to a secret recipe of someone\'s grandmother, mozzarella, goat cheese, root vegetables, pine nuts','195 ₴','30 cm','Light','Tradition dough'),(3,'Capricciosa Classic','./imgs/pizzaCapricciosaClassic.jpg','Italian flour, whole tomato sauce, mozzarella, bacon, tomatoes, mushrooms, olives','195 ₴','30 cm','Light','Tradition dough'),(4,'With baked eggplant and feta','./imgs/pizzaWithBakedEggplantAndFeta.jpg','Italian flour, baked eggplant, mozzarella, tomatoes, feta, pickled onions, pine nuts, basil, tarragon, mint, cilantro','195 ₴','30 cm','Light','Tradition dough');
/*!40000 ALTER TABLE `lightPizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meatPizza`
--

DROP TABLE IF EXISTS `meatPizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meatPizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meatPizza`
--

LOCK TABLES `meatPizza` WRITE;
/*!40000 ALTER TABLE `meatPizza` DISABLE KEYS */;
INSERT INTO `meatPizza` VALUES (1,'Prosciutto','./imgs/pizzaProsciutto.jpg','Italian flour, whole tomato sauce, mozzarella, PROSUUTO, ruccola, cherry, sun-dried tomato, capers, oregano, parmesan','195 ₴','30 cm','Meat','Tradition dough'),(2,'With homemade sausage','./imgs/pizzaWithHomemadeSausage.jpg','Italian flour, whole tomato sauce, mozzarella, homemade sausage, bell pepper, olives, small cucumbers, mushrooms, oregano','195 ₴','30 cm','Meat','Tradition dough'),(3,'Chicken with mushrooms','./imgs/pizzaChickenWithMushrooms.jpg','Italian flour, parmesan and cream sauce, mozzarella, Dorblu, baked chicken, mushrooms, bell pepper, oregano','165 ₴','30 cm','Meat','Tradition dough'),(4,'Chicken with pineapple','./imgs/pizzaChickenWithPineapple.jpg','Italian flour, whole tomato sauce, mozzarella, baked chicken, pineapple, bell pepper, orange mustard, cranberries, oregano','165 ₴','30 cm','Meat','Tradition dough'),(5,'Bavarian','./imgs/pizzaBavarian.jpg','Italian flour, whole tomato sauce, mozzarella, pepperoni, hunting sausages, bell pepper, olives, pesto sauce, oregano','165 ₴','30 cm','Meat','Tradition dough'),(6,'With turkey','./imgs/pizzaWithTurkey.jpg','Italian flour, mozzarella, cream sauce, turkey, orange, almonds, mix of greens / arugula, cranberries, orange mustard','195 ₴','30 cm','Meat','Tradition dough'),(7,'With bacon','./imgs/pizzaWithBacon.jpg','Italian flour, whole tomato sauce, mozzarella, dorblu, dried bacon, hot pepper, oregano','195 ₴','30 cm','Meat','Tradition dough'),(8,'Multi meat','./imgs/pizzaMultiMeat.jpg','Italian flour, whole tomato sauce, mozzarella, beef, boiled pork, pepperoni, hunting sausages, Bulgarian pepper, Crimean onion, barbecue sauce, oregano','195 ₴','30 cm','Meat','Tradition dough'),(9,'With lamb','./imgs/pizzaWithLamb.jpg','Italian flour, whole tomato sauce, mozzarella, lamb, baked eggplant, tomato salsa, sweet onion, basil, secret sauce','195 ₴','30 cm','Meat','Tradition dough'),(10,'Some kind of fowl','./imgs/pizzaSomeKindOfFowl.jpg','Italian flour, whole tomato sauce, mozzarella, duck fillet (su-view) secret sauces from abroad, including walnut, leek, cucumber, cilantro Traditionally','195 ₴','30 cm','Meat','Tradition dough'),(11,'Capricciosa Classic','./imgs/pizzaCapricciosaClassic.jpg','Italian flour, whole tomato sauce, mozzarella, bacon, tomatoes, mushrooms, olives','195 ₴','30 cm','Meat','Tradition dough');
/*!40000 ALTER TABLE `meatPizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newPizza`
--

DROP TABLE IF EXISTS `newPizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newPizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newPizza`
--

LOCK TABLES `newPizza` WRITE;
/*!40000 ALTER TABLE `newPizza` DISABLE KEYS */;
INSERT INTO `newPizza` VALUES (1,'Some kind of fowl','./imgs/pizzaSomeKindOfFowl.jpg','Italian flour, whole tomato sauce, mozzarella, duck fillet (su-view) secret sauces from abroad, including walnut, leek, cucumber, cilantro','195 ₴','30 cm','New','Tradition dough'),(2,'With goat cheese','./imgs/pizzaWithGoatCheese.jpg','Italian flour, cream sauce according to someone’s grandmother’s secret recipe, mozzarella, goat cheese, root vegetables, pine nuts','195 ₴','30 cm','New','Tradition dough'),(3,'Capricciosa Classic','./imgs/pizzaCapricciosaClassic.jpg','Italian flour, whole tomato sauce, mozzarella, bacon, tomatoes, mushrooms, olives','195 ₴','30 cm','New','Tradition dough'),(4,'With porcini mushrooms and chanterelles','./imgs/pizzaWithPorciniMushroomsAndChanterelles.jpg','Italian flour, truffle sauce, mozzarella, porcini mushrooms, chanterelles, champignons, sweet onions, green onions','249 ₴','30 cm','New','Tradition dough'),(5,'With lamb','./imgs/pizzaWithLamb.jpg','Italian flour, whole tomato sauce, mozzarella, lamb, baked eggplant, tomato salsa, sweet onion, basil, secret sauce','195 ₴','30 cm','New','Tradition dough'),(6,'Salami','./imgs/pizzaSalami.jpg','Italian flour, mozzarella, whole tomato sauce, premium salami, oregano','145 ₴','30 cm','New','Tradition dough');
/*!40000 ALTER TABLE `newPizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seaPizza`
--

DROP TABLE IF EXISTS `seaPizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seaPizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seaPizza`
--

LOCK TABLES `seaPizza` WRITE;
/*!40000 ALTER TABLE `seaPizza` DISABLE KEYS */;
/*!40000 ALTER TABLE `seaPizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spicyPizza`
--

DROP TABLE IF EXISTS `spicyPizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spicyPizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spicyPizza`
--

LOCK TABLES `spicyPizza` WRITE;
/*!40000 ALTER TABLE `spicyPizza` DISABLE KEYS */;
INSERT INTO `spicyPizza` VALUES (1,'Bavarian','./imgs/pizzaBavarian.jpg','Italian flour, whole tomato sauce, mozzarella, pepperoni, hunting sausages, bell pepper, olives, pesto sauce, oregano','165 ₴','30 cm','Spicy','Tradition dough'),(2,'Margarita','./imgs/pizzaMargarita.jpg','Italian flour, whole tomato sauce, mozzarella, tomatoes, pesto, oregano','129 ₴','30 cm','Spicy','Tradition dough');
/*!40000 ALTER TABLE `spicyPizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vegetarianpizza`
--

DROP TABLE IF EXISTS `vegetarianpizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vegetarianpizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vegetarianpizza`
--

LOCK TABLES `vegetarianpizza` WRITE;
/*!40000 ALTER TABLE `vegetarianpizza` DISABLE KEYS */;
INSERT INTO `vegetarianpizza` VALUES (1,'Premium cheese','./imgs/pizzaPremiumCheese.jpg','Italian flour, cream and parmesan sauce, mozzarella, DorBlue, parmesan, walnut, cranberry','195 ₴','30 cm','Vegetarian','Tradition dough'),(2,'Margarita','./imgs/pizzaMargarita.jpg','Italian flour, whole tomato sauce, mozzarella, tomatoes, pesto, oregano','129 ₴','30 cm','Vegetarian','Tradition dough'),(3,'With porcini mushrooms and chanterelles','./imgs/pizzaWithPorciniMushroomsAndChanterelles.jpg','Italian flour, truffle sauce, mozzarella, porcini mushrooms, chanterelles, champignons, sweet onions, green onions','249 ₴','30 cm','Vegetarian','Tradition dough'),(4,'With baked eggplant and feta','./imgs/pizzaWithBakedEggplantAndFeta.jpg','Italian flour, baked eggplant, mozzarella, tomatoes, feta, pickled onions, pine nuts, basil, tarragon, mint, cilantro','195 ₴','30 cm','Vegetarian','Tradition dough');
/*!40000 ALTER TABLE `vegetarianpizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `withoutMushroomsPizza`
--

DROP TABLE IF EXISTS `withoutMushroomsPizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `withoutMushroomsPizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `withoutMushroomsPizza`
--

LOCK TABLES `withoutMushroomsPizza` WRITE;
/*!40000 ALTER TABLE `withoutMushroomsPizza` DISABLE KEYS */;
INSERT INTO `withoutMushroomsPizza` VALUES (1,'Chicken with pineapple','./imgs/pizzaChickenWithPineapple.jpg','Italian flour, whole tomato sauce, mozzarella, baked chicken, pineapple, bell pepper, orange mustard, cranberries, oregano','165 ₴','30 cm','Without mushrooms','Tradition dough'),(2,'Premium cheese','./imgs/pizzaPremiumCheese.jpg','Italian flour, cream and parmesan sauce, mozzarella, DorBlue, parmesan, walnut, cranberry','195 ₴','30 cm','Without mushrooms','Tradition dough'),(3,'Prosciutto','./imgs/pizzaProsciutto.jpg','Italian flour, whole tomato sauce, mozzarella, PROSUITTO, ruccola, cherry, sun-dried tomato, capers, oregano, parmesan','195 ₴','30 cm','Without mushrooms','Tradition dough'),(4,'With turkey','./imgs/pizzaWithTurkey.jpg','Italian flour, mozzarella, cream sauce, turkey, orange, almonds, mix of greens / arugula, cranberries, orange mustard','195 ₴','30 cm','Without mushrooms','Tradition dough'),(5,'Margarita','./imgs/pizzaMargarita.jpg','Italian flour, whole tomato sauce, mozzarella, tomatoes, pesto, oregano','129 ₴','30 cm','Without mushrooms','Tradition dough'),(6,'Some kind of fowl','./imgs/pizzaSomeKindOfFowl.jpg','Italian flour, whole tomato sauce, mozzarella, duck fillet (su-view) secret sauces from abroad, including walnut, leek, cucumber, cilantro','195 ₴','30 cm','Without mushrooms','Tradition dough'),(7,'With bacon','./imgs/pizzaWithBacon.jpg','Italian flour, whole tomato sauce, mozzarella, dorblu, dried bacon, hot pepper, oregano','195 ₴','30 cm','Without mushrooms','Tradition dough'),(8,'With lamb','./imgs/pizzaWithLamb.jpg','Italian flour, whole tomato sauce, mozzarella, lamb, baked eggplant, tomato salsa, sweet onion, basil, secret sauce','195 ₴','30 cm','Without mushrooms','Tradition dough'),(9,'With baked eggplant and feta','./imgs/pizzaWithBakedEggplantAndFeta.jpg','Italian flour, baked eggplant, mozzarella, tomatoes, feta, pickled onions, pine nuts, basil, tarragon, mint, cilantro','195 ₴','30 cm','Without mushrooms','Tradition dough'),(10,'Salami','./imgs/pizzaSalami.jpg','Italian flour, mozzarella, whole tomato sauce, premium salami, oregano','145 ₴','30 cm','Without mushrooms','Tradition dough');
/*!40000 ALTER TABLE `withoutMushroomsPizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `withoutOlivesPizza`
--

DROP TABLE IF EXISTS `withoutOlivesPizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `withoutOlivesPizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `withoutOlivesPizza`
--

LOCK TABLES `withoutOlivesPizza` WRITE;
/*!40000 ALTER TABLE `withoutOlivesPizza` DISABLE KEYS */;
INSERT INTO `withoutOlivesPizza` VALUES (1,'Chicken with pineapple','./imgs/pizzaChickenWithPineapple.jpg','Italian flour, whole tomato sauce, mozzarella, baked chicken, pineapple, bell pepper, orange mustard, cranberries, oregano','165 ₴','30 cm','Without olives','Tradition dough'),(2,'Chicken with mushrooms','./imgs/pizzaChickenWithMushrooms.jpg','Italian flour, parmesan and cream sauce, mozzarella, Dorblu, baked chicken, champignons, bell pepper, oregano','165 ₴','30 cm','Without olives','Tradition dough'),(3,'Premium cheese','./imgs/pizzaPremiumCheese.jpg','Italian flour, cream and parmesan sauce, mozzarella, DorBlue, parmesan, walnut, cranberry','195 ₴','30 cm','Without olives','Tradition dough'),(4,'Prosciutto','./imgs/pizzaProsciutto.jpg','Italian flour, whole tomato sauce, mozzarella, PROSUITTO, ruccola, cherry, sun-dried tomato, capers, oregano, parmesan','195 ₴','30 cm','Without olives','Tradition dough'),(5,'With turkey','./imgs/pizzaWithTurkey.jpg','Italian flour, mozzarella, cream sauce, turkey, orange, almonds, mix of greens / arugula, cranberries, orange mustard','195 ₴','30 cm','Without olives','Tradition dough'),(6,'Margarita','./imgs/pizzaMargarita.jpg','Italian flour, whole tomato sauce, mozzarella, tomatoes, pesto, oregano','129 ₴','30 cm','Without olives','Tradition dough'),(7,'Some kind of fowl','./imgs/pizzaSomeKindOfFowl.jpg','Italian flour, whole tomato sauce, mozzarella, duck fillet (su-view) secret sauces from abroad, including walnut, leek, cucumber, cilantro','195 ₴','30 cm','Without olives','Tradition dough'),(8,'With bacon','./imgs/pizzaWithBacon.jpg','Italian flour, whole tomato sauce, mozzarella, dorblu, dried bacon, hot pepper, oregano','195 ₴','30 cm','Without olives','Tradition dough'),(9,'With goat cheese','./imgs/pizzaWithGoatCheese.jpg','Italian flour, cream sauce according to someone’s grandmother’s secret recipe, mozzarella, goat cheese, root vegetables, pine nuts','195 ₴','30 cm','Without olives','Tradition dough'),(10,'With porcini mushrooms and chanterelles','./imgs/pizzaWithGoatCheese.jpg','Italian flour, truffle sauce, mozzarella, porcini mushrooms, chanterelles, champignons, sweet onions, green onions','249 ₴','30 cm','Without olives','Tradition dough'),(11,'With lamb','./imgs/pizzaWithLamb.jpg','Italian flour, whole tomato sauce, mozzarella, lamb, baked eggplant, tomato salsa, sweet onion, basil, secret sauce','195 ₴','30 cm','Without olives','Tradition dough'),(12,'With baked eggplant and feta','./imgs/pizzaWithBakedEggplantAndFeta.jpg','Italian flour, baked eggplant, mozzarella, tomatoes, feta, pickled onions, pine nuts, basil, tarragon, mint, cilantro','195 ₴','30 cm','Without olives','Tradition dough'),(13,'Salami','./imgs/pizzaSalami.jpg','Italian flour, mozzarella, whole tomato sauce, premium salami, oregano','145 ₴','30 cm','Without olives','Tradition dough');
/*!40000 ALTER TABLE `withoutOlivesPizza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `withoutOnionPizza`
--

DROP TABLE IF EXISTS `withoutOnionPizza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `withoutOnionPizza` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `img` text,
  `text` text,
  `price` text,
  `size` text,
  `type` text,
  `doughType` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `withoutOnionPizza`
--

LOCK TABLES `withoutOnionPizza` WRITE;
/*!40000 ALTER TABLE `withoutOnionPizza` DISABLE KEYS */;
INSERT INTO `withoutOnionPizza` VALUES (1,'Chicken with pineapple','./imgs/pizzaChickenWithPineapple.jpg','Italian flour, whole tomato sauce, mozzarella, baked chicken, pineapple, bell pepper, orange mustard, cranberries, oregano','165 ₴','30 cm','Without onion','Tradition dough'),(2,'Chicken with mushrooms','./imgs/pizzaChickenWithMushrooms.jpg','Italian flour, parmesan and cream sauce, mozzarella, Dorblu, baked chicken, mushrooms, bell pepper, oregano','165 ₴','30 cm','Without onion','Tradition dough'),(3,'Premium cheese','./imgs/pizzaPremiumCheese.jpg','Italian flour, cream and parmesan sauce, mozzarella, DorBlue, parmesan, walnut, cranberry','195 ₴','30 cm','Without onion','Tradition dough'),(4,'Prosciutto','./imgs/pizzaProsciutto.jpg','Italian flour, whole tomato sauce, mozzarella, PROSUUTO, ruccola, cherry, sun-dried tomato, capers, oregano, parmesan','195 ₴','30 cm','Without onion','Tradition dough'),(5,'With turkey','./imgs/pizzaWithTurkey.jpg','Italian flour, mozzarella, cream sauce, turkey, orange, almonds, mix of greens / arugula, cranberries, orange mustard','195 ₴','30 cm','Without onion','Tradition dough'),(6,'Margarita','./imgs/pizzaMargarita.jpg','Italian flour, whole tomato sauce, mozzarella, tomatoes, pesto, oregano','129 ₴','30 cm','Without onion','Tradition dough'),(7,'With homemade sausage','./imgs/pizzaWithHomemadeSausage.jpg','Italian flour, whole tomato sauce, mozzarella, homemade sausage, bell pepper, olives, small cucumbers, mushrooms, oregano','195 ₴','30 cm','Without onion','Tradition dough'),(8,'Some kind of fowl','./imgs/pizzaSomeKindOfFowl.jpg','Italian flour, whole tomato sauce, mozzarella, duck fillet (su-view), secret sauces from abroad, leeks, cucumber, cilantro','195 ₴','30 cm','Without onion','Tradition dough'),(9,'With bacon','./imgs/pizzaWithBacon.jpg','Italian flour, whole tomato sauce, mozzarella, dorblu, dried bacon, hot pepper, oregano','195 ₴','30 cm','Without onion','Tradition dough'),(10,'With goat cheese','./imgs/pizzaWithGoatCheese.jpg','Italian flour, cream sauce according to someone’s grandmother’s secret recipe, mozzarella, goat cheese, root vegetables, pine nuts','195 ₴','30 cm','Without onion','Tradition dough'),(11,'Capricciosa Classic','./imgs/pizzaCapricciosaClassic.jpg','Italian flour, whole tomato sauce, mozzarella, bacon, tomatoes, mushrooms, olives','195 ₴','30 cm','Without onion','Tradition dough'),(12,'With baked eggplant and feta','./imgs/pizzaWithBakedEggplantAndFeta.jpg','Italian flour, baked eggplant, mozzarella, tomatoes, feta, pickled onions, pine nuts, basil, tarragon, mint, cilantro','195 ₴','30 cm','Without onion','Tradition dough'),(13,'Salami','./imgs/pizzaSalami.jpg','Italian flour, mozzarella, whole tomato sauce, premium salami, oregano','145 ₴','30 cm','Without onion','Tradition dough');
/*!40000 ALTER TABLE `withoutOnionPizza` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-06 14:50:35
