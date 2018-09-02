CREATE DATABASE  IF NOT EXISTS `eatforlife` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `eatforlife`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: eatforlife
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `idClient` varchar(7) NOT NULL,
  `idDietician` varchar(7) DEFAULT NULL,
  `idPlan` varchar(7) NOT NULL,
  `idMedicalAid` varchar(7) NOT NULL,
  `idDietPreference` varchar(7) NOT NULL,
  `idOverview` varchar(7) NOT NULL,
  `idMedicalHistory` varchar(7) NOT NULL,
  `idShoppingList` varchar(7) NOT NULL,
  `idNutritionH` varchar(7) NOT NULL,
  `ID_No` int(13) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Surname` varchar(45) NOT NULL,
  `PhoneNum` varchar(45) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Current_Weight` decimal(4,2) NOT NULL,
  `Target_Weight` decimal(4,2) NOT NULL,
  `Target_BMI` decimal(4,2) NOT NULL,
  PRIMARY KEY (`idClient`),
  UNIQUE KEY `idClient_UNIQUE` (`idClient`),
  UNIQUE KEY `idPlan_UNIQUE` (`idPlan`),
  UNIQUE KEY `idMedicalAid_UNIQUE` (`idMedicalAid`),
  UNIQUE KEY `idDietPreference_UNIQUE` (`idDietPreference`),
  UNIQUE KEY `idOverview_UNIQUE` (`idOverview`),
  UNIQUE KEY `idMedicalHistory_UNIQUE` (`idMedicalHistory`),
  UNIQUE KEY `idShoppingList_UNIQUE` (`idShoppingList`),
  UNIQUE KEY `idNutritionH_UNIQUE` (`idNutritionH`),
  UNIQUE KEY `ID_No_UNIQUE` (`ID_No`),
  KEY `fk_client_d_idx` (`idDietician`),
  CONSTRAINT `fk_client_d` FOREIGN KEY (`idDietician`) REFERENCES `dietician` (`iddietician`),
  CONSTRAINT `fk_client_dp` FOREIGN KEY (`idDietPreference`) REFERENCES `diet_preference` (`iddietpreference`),
  CONSTRAINT `fk_client_ma` FOREIGN KEY (`idMedicalAid`) REFERENCES `medical_aid` (`idmedicalaid`),
  CONSTRAINT `fk_client_mh` FOREIGN KEY (`idMedicalHistory`) REFERENCES `medical_history` (`idmedicalhistory`),
  CONSTRAINT `fk_client_mp` FOREIGN KEY (`idPlan`) REFERENCES `meal_plan` (`idplan`),
  CONSTRAINT `fk_client_nh` FOREIGN KEY (`idNutritionH`) REFERENCES `nutritional_habits` (`idnutritionh`),
  CONSTRAINT `fk_client_ov` FOREIGN KEY (`idOverview`) REFERENCES `overview` (`idoverview`),
  CONSTRAINT `fk_client_sl` FOREIGN KEY (`idShoppingList`) REFERENCES `shopping_list` (`idshoppinglist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `client_BEFORE_INSERT` BEFORE INSERT ON `client` FOR EACH ROW BEGIN
INSERT INTO client_prefix VALUES (NULL);
  SET NEW.idClient = CONCAT('CL', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `client_prefix`
--

DROP TABLE IF EXISTS `client_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_prefix` (
  `idClient` int(11) NOT NULL,
  PRIMARY KEY (`idClient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_prefix`
--

LOCK TABLES `client_prefix` WRITE;
/*!40000 ALTER TABLE `client_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diet_preference`
--

DROP TABLE IF EXISTS `diet_preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diet_preference` (
  `idDietPreference` varchar(7) NOT NULL,
  `WheatFree` tinyint(4) NOT NULL,
  `LactoseFree` tinyint(4) NOT NULL,
  `Vegetarian` tinyint(4) NOT NULL,
  PRIMARY KEY (`idDietPreference`),
  UNIQUE KEY `idDietPreference_UNIQUE` (`idDietPreference`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diet_preference`
--

LOCK TABLES `diet_preference` WRITE;
/*!40000 ALTER TABLE `diet_preference` DISABLE KEYS */;
/*!40000 ALTER TABLE `diet_preference` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `diet_preference_BEFORE_INSERT` BEFORE INSERT ON `diet_preference` FOR EACH ROW BEGIN
INSERT INTO diet_preference_prefix VALUES (NULL);
  SET NEW.idDietPreference = CONCAT('DP', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `diet_preference_prefix`
--

DROP TABLE IF EXISTS `diet_preference_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diet_preference_prefix` (
  `idDiet_Preference` int(11) NOT NULL,
  PRIMARY KEY (`idDiet_Preference`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diet_preference_prefix`
--

LOCK TABLES `diet_preference_prefix` WRITE;
/*!40000 ALTER TABLE `diet_preference_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `diet_preference_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dietician`
--

DROP TABLE IF EXISTS `dietician`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dietician` (
  `idDietician` varchar(7) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Surname` varchar(45) NOT NULL,
  `PhoneNum` varchar(45) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  PRIMARY KEY (`idDietician`),
  UNIQUE KEY `idDietician_UNIQUE` (`idDietician`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dietician`
--

LOCK TABLES `dietician` WRITE;
/*!40000 ALTER TABLE `dietician` DISABLE KEYS */;
/*!40000 ALTER TABLE `dietician` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `dietician_BEFORE_INSERT` BEFORE INSERT ON `dietician` FOR EACH ROW BEGIN
INSERT INTO dietician_prefix VALUES (NULL);
  SET NEW.idDietician = CONCAT('DL', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `dietician_prefix`
--

DROP TABLE IF EXISTS `dietician_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dietician_prefix` (
  `idDietician` int(11) NOT NULL,
  PRIMARY KEY (`idDietician`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dietician_prefix`
--

LOCK TABLES `dietician_prefix` WRITE;
/*!40000 ALTER TABLE `dietician_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `dietician_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredient`
--

DROP TABLE IF EXISTS `ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredient` (
  `idIngredient` varchar(7) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Size` varchar(45) NOT NULL,
  `idMeasurement` varchar(7) NOT NULL,
  PRIMARY KEY (`idIngredient`),
  KEY `fk_ingre_msremnt_idx` (`idMeasurement`),
  CONSTRAINT `fk_ingre_msremnt` FOREIGN KEY (`idMeasurement`) REFERENCES `measurement` (`idmeasurement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredient`
--

LOCK TABLES `ingredient` WRITE;
/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;
/*!40000 ALTER TABLE `ingredient` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ingredient_BEFORE_INSERT` BEFORE INSERT ON `ingredient` FOR EACH ROW BEGIN
INSERT INTO ingredient_prefix VALUES (NULL);
  SET NEW.idIngredient = CONCAT('IN', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ingredient_prefix`
--

DROP TABLE IF EXISTS `ingredient_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredient_prefix` (
  `idIngredient` int(11) NOT NULL,
  PRIMARY KEY (`idIngredient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredient_prefix`
--

LOCK TABLES `ingredient_prefix` WRITE;
/*!40000 ALTER TABLE `ingredient_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `ingredient_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `idItem` varchar(7) NOT NULL,
  `Description` varchar(150) NOT NULL,
  `IconLoc` varchar(200) NOT NULL,
  `Grams` varchar(45) NOT NULL,
  `PPGram` decimal(5,2) NOT NULL,
  PRIMARY KEY (`idItem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `item_BEFORE_INSERT` BEFORE INSERT ON `item` FOR EACH ROW BEGIN
INSERT INTO item_prefix VALUES (NULL);
  SET NEW.idItem = CONCAT('IM', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `item_prefix`
--

DROP TABLE IF EXISTS `item_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_prefix` (
  `idItem` int(11) NOT NULL,
  PRIMARY KEY (`idItem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_prefix`
--

LOCK TABLES `item_prefix` WRITE;
/*!40000 ALTER TABLE `item_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list`
--

DROP TABLE IF EXISTS `list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `list` (
  `idList` varchar(7) NOT NULL,
  `idItem` varchar(45) NOT NULL,
  `Day` varchar(45) NOT NULL,
  `TimeOfDay` varchar(45) NOT NULL,
  PRIMARY KEY (`idList`),
  KEY `fk_list_item_idx` (`idItem`),
  CONSTRAINT `fk_list_item` FOREIGN KEY (`idItem`) REFERENCES `item` (`iditem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list`
--

LOCK TABLES `list` WRITE;
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
/*!40000 ALTER TABLE `list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `list_prefix`
--

DROP TABLE IF EXISTS `list_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `list_prefix` (
  `idList` int(11) NOT NULL,
  PRIMARY KEY (`idList`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list_prefix`
--

LOCK TABLES `list_prefix` WRITE;
/*!40000 ALTER TABLE `list_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `list_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meal_plan`
--

DROP TABLE IF EXISTS `meal_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meal_plan` (
  `idPlan` varchar(7) NOT NULL,
  `idList` varchar(7) NOT NULL,
  PRIMARY KEY (`idPlan`),
  UNIQUE KEY `idPlan_UNIQUE` (`idPlan`),
  KEY `fk_mealplan_l_idx` (`idList`),
  CONSTRAINT `fk_mealplan_l` FOREIGN KEY (`idList`) REFERENCES `list` (`idlist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal_plan`
--

LOCK TABLES `meal_plan` WRITE;
/*!40000 ALTER TABLE `meal_plan` DISABLE KEYS */;
/*!40000 ALTER TABLE `meal_plan` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `meal_plan_BEFORE_INSERT` BEFORE INSERT ON `meal_plan` FOR EACH ROW BEGIN
INSERT INTO meal_plan_prefix VALUES (NULL);
  SET NEW.idPlan = CONCAT('MP', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `meal_plan_prefix`
--

DROP TABLE IF EXISTS `meal_plan_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meal_plan_prefix` (
  `idMeal_plan` int(11) NOT NULL,
  PRIMARY KEY (`idMeal_plan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal_plan_prefix`
--

LOCK TABLES `meal_plan_prefix` WRITE;
/*!40000 ALTER TABLE `meal_plan_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `meal_plan_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `measurement`
--

DROP TABLE IF EXISTS `measurement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `measurement` (
  `idMeasurement` varchar(7) NOT NULL,
  `Type` varchar(4) NOT NULL,
  PRIMARY KEY (`idMeasurement`),
  UNIQUE KEY `Type_UNIQUE` (`Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `measurement`
--

LOCK TABLES `measurement` WRITE;
/*!40000 ALTER TABLE `measurement` DISABLE KEYS */;
/*!40000 ALTER TABLE `measurement` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `measurement_BEFORE_INSERT` BEFORE INSERT ON `measurement` FOR EACH ROW BEGIN
INSERT INTO measurement_prefix VALUES (NULL);
  SET NEW.idMeasurement = CONCAT('MT', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `measurement_prefix`
--

DROP TABLE IF EXISTS `measurement_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `measurement_prefix` (
  `idMeasurement` int(11) NOT NULL,
  PRIMARY KEY (`idMeasurement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `measurement_prefix`
--

LOCK TABLES `measurement_prefix` WRITE;
/*!40000 ALTER TABLE `measurement_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `measurement_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_aid`
--

DROP TABLE IF EXISTS `medical_aid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medical_aid` (
  `idMedicalAid` varchar(7) NOT NULL,
  `Scheme` varchar(45) NOT NULL,
  `MembershipNo` varchar(45) NOT NULL,
  `MainMemberName` varchar(45) NOT NULL,
  `RelationshipToMainMember` varchar(45) NOT NULL,
  PRIMARY KEY (`idMedicalAid`),
  UNIQUE KEY `idMedicalAid_UNIQUE` (`idMedicalAid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_aid`
--

LOCK TABLES `medical_aid` WRITE;
/*!40000 ALTER TABLE `medical_aid` DISABLE KEYS */;
/*!40000 ALTER TABLE `medical_aid` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `medical_aid_BEFORE_INSERT` BEFORE INSERT ON `medical_aid` FOR EACH ROW BEGIN
INSERT INTO medical_aid_prefix VALUES (NULL);
  SET NEW.idMedicalAid = CONCAT('MA', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `medical_aid_prefix`
--

DROP TABLE IF EXISTS `medical_aid_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medical_aid_prefix` (
  `idMedical_aid` int(11) NOT NULL,
  PRIMARY KEY (`idMedical_aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_aid_prefix`
--

LOCK TABLES `medical_aid_prefix` WRITE;
/*!40000 ALTER TABLE `medical_aid_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `medical_aid_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_history`
--

DROP TABLE IF EXISTS `medical_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medical_history` (
  `idMedicalHistory` varchar(7) NOT NULL,
  `HBloodInsulin` tinyint(4) NOT NULL,
  `Hyperglyaemia` tinyint(4) NOT NULL,
  `Diabetes` tinyint(4) NOT NULL,
  `Choloestorol` tinyint(4) NOT NULL,
  `HBloodPressure` tinyint(4) NOT NULL,
  `GastroIntestinal` tinyint(4) NOT NULL,
  `Thyroid` tinyint(4) NOT NULL,
  `Gout` tinyint(4) NOT NULL,
  `PolycysticOvarySyndrome` tinyint(4) NOT NULL,
  `UnmentionedCondition` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`idMedicalHistory`),
  UNIQUE KEY `idMedicalHistory_UNIQUE` (`idMedicalHistory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_history`
--

LOCK TABLES `medical_history` WRITE;
/*!40000 ALTER TABLE `medical_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `medical_history` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `medical_history_BEFORE_INSERT` BEFORE INSERT ON `medical_history` FOR EACH ROW BEGIN
INSERT INTO medical_history_prefix VALUES (NULL);
  SET NEW.idMedicalHistory = CONCAT('MH', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `medical_history_prefix`
--

DROP TABLE IF EXISTS `medical_history_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medical_history_prefix` (
  `idMedical_history` int(11) NOT NULL,
  PRIMARY KEY (`idMedical_history`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_history_prefix`
--

LOCK TABLES `medical_history_prefix` WRITE;
/*!40000 ALTER TABLE `medical_history_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `medical_history_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutritional_habits`
--

DROP TABLE IF EXISTS `nutritional_habits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nutritional_habits` (
  `idNutritionH` varchar(7) NOT NULL,
  `WaterPDay` varchar(45) NOT NULL,
  `AlcoholicDrinksPW` varchar(45) NOT NULL,
  `ThreeWholeGransPD` varchar(45) NOT NULL,
  `TwoHealthyFatsPW` varchar(45) NOT NULL,
  `TwoDairyPW` varchar(45) NOT NULL,
  `FiveFruitPD` varchar(45) NOT NULL,
  `JunkFoodPW` varchar(45) NOT NULL,
  `ColdDrinksPW` varchar(45) NOT NULL,
  `Smoke` varchar(45) NOT NULL,
  `CoffeeOrTeaPD` varchar(45) NOT NULL,
  `Excercise` varchar(45) NOT NULL,
  `nutritionalhabitscol` varchar(45) NOT NULL,
  PRIMARY KEY (`idNutritionH`),
  UNIQUE KEY `idNutritionH_UNIQUE` (`idNutritionH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutritional_habits`
--

LOCK TABLES `nutritional_habits` WRITE;
/*!40000 ALTER TABLE `nutritional_habits` DISABLE KEYS */;
/*!40000 ALTER TABLE `nutritional_habits` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `nutritional_habits_BEFORE_INSERT` BEFORE INSERT ON `nutritional_habits` FOR EACH ROW BEGIN
INSERT INTO nutritional_habits_prefix VALUES (NULL);
  SET NEW.idNutritionH = CONCAT('NH', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `nutritional_habits_prefix`
--

DROP TABLE IF EXISTS `nutritional_habits_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nutritional_habits_prefix` (
  `idNutritional_habits` int(11) NOT NULL,
  PRIMARY KEY (`idNutritional_habits`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutritional_habits_prefix`
--

LOCK TABLES `nutritional_habits_prefix` WRITE;
/*!40000 ALTER TABLE `nutritional_habits_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `nutritional_habits_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `overview`
--

DROP TABLE IF EXISTS `overview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `overview` (
  `idOverview` varchar(7) NOT NULL,
  `Weight` decimal(4,2) NOT NULL,
  `Height` decimal(4,2) NOT NULL,
  `BMI` decimal(4,2) NOT NULL,
  `Waist` decimal(4,2) NOT NULL,
  `Hip` decimal(4,2) NOT NULL,
  `Chest` decimal(4,2) NOT NULL,
  `Bicep` decimal(4,2) NOT NULL,
  `Thigh` decimal(4,2) NOT NULL,
  PRIMARY KEY (`idOverview`),
  UNIQUE KEY `idOverview_UNIQUE` (`idOverview`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `overview`
--

LOCK TABLES `overview` WRITE;
/*!40000 ALTER TABLE `overview` DISABLE KEYS */;
/*!40000 ALTER TABLE `overview` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `overview_BEFORE_INSERT` BEFORE INSERT ON `overview` FOR EACH ROW BEGIN
INSERT INTO overview_prefix VALUES (NULL);
  SET NEW.idOverview = CONCAT('OV', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `overview_prefix`
--

DROP TABLE IF EXISTS `overview_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `overview_prefix` (
  `idOverview` int(11) NOT NULL,
  PRIMARY KEY (`idOverview`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `overview_prefix`
--

LOCK TABLES `overview_prefix` WRITE;
/*!40000 ALTER TABLE `overview_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `overview_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipe` (
  `idRecipe` varchar(7) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `idRecIngre` varchar(7) NOT NULL,
  PRIMARY KEY (`idRecipe`),
  UNIQUE KEY `idRecipe_UNIQUE` (`idRecipe`),
  KEY `fk_recipe_recingre_idx` (`idRecIngre`),
  CONSTRAINT `fk_recipe_recingre` FOREIGN KEY (`idRecIngre`) REFERENCES `recipe_ingredient` (`idrecingre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `recipe_BEFORE_INSERT` BEFORE INSERT ON `recipe` FOR EACH ROW BEGIN
INSERT INTO recipe_prefix VALUES (NULL);
  SET NEW.idRecipe = CONCAT('RC', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `recipe_ingredient`
--

DROP TABLE IF EXISTS `recipe_ingredient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipe_ingredient` (
  `idRecIngre` varchar(7) NOT NULL,
  `idIngredient` varchar(7) NOT NULL,
  `idRecipe` varchar(7) NOT NULL,
  PRIMARY KEY (`idRecIngre`),
  KEY `fk_recingre_rec_idx` (`idRecipe`),
  KEY `fk_recingre_ingre_idx` (`idIngredient`),
  CONSTRAINT `fk_recingre_ingre` FOREIGN KEY (`idIngredient`) REFERENCES `ingredient` (`idingredient`),
  CONSTRAINT `fk_recingre_rec` FOREIGN KEY (`idRecipe`) REFERENCES `recipe` (`idrecipe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_ingredient`
--

LOCK TABLES `recipe_ingredient` WRITE;
/*!40000 ALTER TABLE `recipe_ingredient` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipe_ingredient` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `recipe_ingredient_BEFORE_INSERT` BEFORE INSERT ON `recipe_ingredient` FOR EACH ROW BEGIN
INSERT INTO recipe_ingredient_prefix VALUES (NULL);
  SET NEW.idRecIngre = CONCAT('RI', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `recipe_ingredient_prefix`
--

DROP TABLE IF EXISTS `recipe_ingredient_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipe_ingredient_prefix` (
  `idRecipe_ingredient` int(11) NOT NULL,
  PRIMARY KEY (`idRecipe_ingredient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_ingredient_prefix`
--

LOCK TABLES `recipe_ingredient_prefix` WRITE;
/*!40000 ALTER TABLE `recipe_ingredient_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipe_ingredient_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_prefix`
--

DROP TABLE IF EXISTS `recipe_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipe_prefix` (
  `idRecipe` int(11) NOT NULL,
  PRIMARY KEY (`idRecipe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_prefix`
--

LOCK TABLES `recipe_prefix` WRITE;
/*!40000 ALTER TABLE `recipe_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipe_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_list`
--

DROP TABLE IF EXISTS `shopping_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shopping_list` (
  `idShoppingList` varchar(7) NOT NULL,
  `idList` varchar(7) NOT NULL,
  `ShoppingTotal` decimal(5,2) NOT NULL,
  PRIMARY KEY (`idShoppingList`),
  KEY `fk_shoppingl_list_idx` (`idList`),
  CONSTRAINT `fk_shoppingl_list` FOREIGN KEY (`idList`) REFERENCES `list` (`idlist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_list`
--

LOCK TABLES `shopping_list` WRITE;
/*!40000 ALTER TABLE `shopping_list` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `shopping_list_BEFORE_INSERT` BEFORE INSERT ON `shopping_list` FOR EACH ROW BEGIN
INSERT INTO shopping_list_prefix VALUES (NULL);
  SET NEW.idShoppingList = CONCAT('SL', LPAD(LAST_INSERT_ID(), 3, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `shopping_list_prefix`
--

DROP TABLE IF EXISTS `shopping_list_prefix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shopping_list_prefix` (
  `idShopping_list` int(11) NOT NULL,
  PRIMARY KEY (`idShopping_list`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_list_prefix`
--

LOCK TABLES `shopping_list_prefix` WRITE;
/*!40000 ALTER TABLE `shopping_list_prefix` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_list_prefix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'eatforlife'
--

--
-- Dumping routines for database 'eatforlife'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-01 18:52:14
